import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import socketServcies from 'src/Utlilities/socketServices';
import useProposalsActions from "./useProposalsActions";
import { useParams } from "react-router-dom";
let socketFlag={}
const useAddVendorSocket = (proposal_id) => {

    let dispatch=useDispatch()

    const [data, setData] = useState(null);
    const getState = useSelector((state) => state);
    const {setProposal}=useProposalsActions();


    const headers = {
        method: "POST",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Content-Type": "application/json",
        token: getState?.userSignin?.userInfo?.data?.token,
    };
    var requestOptions = {
        method: "POST",
        body: JSON.stringify({proposal_id: proposal_id}),
        headers: headers,
        redirect: "follow",
    };

    useEffect(() => {
        console.log("soc I am chANGED")
        socketServcies.initializeSocket()
        
        console.log("I am false",proposal_id)
        console.log("socket-customhool-test")
        fetch(process.env.REACT_APP_URL + '/vendor/chat/messagelist',requestOptions)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let proposal=data.data
            dispatch({ type: "FETCH_OLD_MESSAGE", payload: {oldmessages:proposal.messagelist,proposal:proposal} }) 
            if(socketFlag[proposal_id]===undefined){
                console.log("undeined")
                socketFlag[proposal_id]=true;
                socketServcies.on(proposal_id, async (msg) => {
                    console.log(msg,"msg")
                    if(msg.update){   
                        dispatch({ type: "UPDATE_MESSAGE", payload: {_id:msg._id,line_items: msg.data.line_items} })
                    }  else{
                        dispatch({ type: "NEW_MESSAGE", payload: {...msg,proposal_id:proposal._id} })
                    }
                    
                    if(msg.type=='add_line_items' || msg.type=='proposal_update' || msg.type=='system'){
                        setProposal(proposal._id);
                    }
                    document.getElementById('chatboxid').scrollTo(0, document.getElementById('chatboxid').scrollHeight+800);
                })

            }
        });

    },[proposal_id])
    return data;
};

export default useAddVendorSocket;