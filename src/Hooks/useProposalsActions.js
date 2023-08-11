import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useGetPosts from "./useGetPosts";
import { useDispatch } from "react-redux";
const useProposalsActions = () => {
    const dispatch=useDispatch();
    const {getdata}=useGetPosts({url: 'message_list'});

    const setProposal = async (proposal_id) => {
        const proposaldetails=await getdata({});
        console.log(proposaldetails,'propo,dispatch');
        proposaldetails?.data?.vendors.map((value,index) =>{
            if(proposal_id==value._id){
                dispatch({ type: "GET_PROPOSAL_DETAIL", payload: value })
            }
        })
    }
    return {setProposal};
};

export default useProposalsActions;