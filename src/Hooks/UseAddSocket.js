import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import socketServcies from 'src/Utlilities/socketServices';
import useProposalsActions from "./useProposalsActions";
let socketFlag=[]
const useAddSocket = (proposal_id) => {

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
        body: JSON.stringify({}),
        headers: headers,
        redirect: "follow",
    };


    useEffect(() => {
        socketServcies.initializeSocket()
        
        console.log("I am false",proposal_id)
        console.log("socket-customhool-test")
        fetch(process.env.REACT_APP_URL + '/customer/chat/messagelist',requestOptions)
        .then((res) => res.json())
        .then((data) => {
            data?.data?.vendors.map((value,index) =>{
                if(proposal_id==value._id){
                    console.log(value,"vendr");
                    dispatch({ type: "FETCH_OLD_MESSAGE", payload: {oldmessages:value.messagelist,proposal:value} }) 
                    if(socketFlag[proposal_id]==undefined){
                        console.log("undeined")
                        socketFlag[proposal_id]=true;
                        socketServcies.on(value._id, async (msg) => {
                            console.log(msg,"msg")
                            if(msg.update){   
                                dispatch({ type: "UPDATE_MESSAGE", payload: {_id:msg._id,line_items: msg.data.line_items} })
                            }  else{
                                dispatch({ type: "NEW_MESSAGE", payload: {...msg,proposal_id:value._id} })
                            }
                            
                            if(msg.type=='add_line_items' || msg.type=='proposal_update' || msg.type=='system'){
                                setProposal(proposal_id);
                            }
                            document.getElementById('chatboxid').scrollTo(0, document.getElementById('chatboxid').scrollHeight+800);
                        })
    
                    }
    
                }
            })

        });

    },[proposal_id])
    return data;
};

export default useAddSocket;