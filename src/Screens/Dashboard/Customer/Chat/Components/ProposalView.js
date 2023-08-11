
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ProposalView = () => {
    let { id } = useParams();
    const {NewChats:{proposal}} = useSelector((state) => state);
    return (
    <div className="proposal-container">
    <span className="date">12 April, 2023</span>
    <div className="desc">
        {proposal?.description}
    </div>
    <h3 className="item-service-title">Service Items</h3>
    <ul className="line-item-container">
    {proposal?.line_items?.map((mvalue,key)=>{
                    return (<li>
                        <div class='line-items'>
                            <div class="details">
                                <div className="title-wrapper">
                                    <h4>{mvalue.title} -<span>${mvalue.budget}</span></h4>
                                    <div class="status">
                                        {mvalue.status && mvalue.status=='approved' && (
                                            <>
                                            <span className='alert alert-success'>Approved</span>
                                            </>
                                        )}
                                        {mvalue.status && mvalue.status=='rejected' && (
                                            <>
                                            <span className='alert alert-danger'>Rejected</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <p>{mvalue.description}</p>
                            </div>
                        </div>
                    </li>)     
                })}
    </ul>
    <div class='total_amount'>
        Total Amount: <span>$500</span>
    </div>
 
    {/* <div className="actionbuttons">
        <button className="btn btn-success">Accept All</button><br />
        <a href='#'>Request to update  proposal</a>
    </div>
    <div className="amount">
        <span className="amounttitle">Total Amount</span>
        <h4>${proposal?.budget}</h4>
    </div>  */}
    </div>)
}

export default ProposalView;