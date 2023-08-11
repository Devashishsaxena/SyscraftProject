import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetPosts from "src/Hooks/useGetPosts";
import useSavePosts from "src/Hooks/useSavePosts";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function ServiceModal({ service }) {
  const [varyingState, setVaryingState] = useState("");
  const [formError, setFormError] = useState([]);
  const [varyingModal, setVaryingModal] = useState(false);
  const [iscontactRequest, setContactRequest] = useState(false);
  const [project_id, setProjectId] = useState();
  const [varyingMessage, setVaryingMessage] = useState("");  
  const getState = useSelector((state) => state);
  const navigate = useNavigate();
  

  const [ProposalRequest, setProposalRequest] = useState({url:"",request_data:{}});
  
  const {data: project_data,getdata:get_posts}=useGetPosts({url: 'customer_projects',onLoad:"false"})
  const {saveposts:proposal_request}=useSavePosts(ProposalRequest.url,ProposalRequest.request_data)


  const checkStatus = () => {
    if (!getState?.userSignin?.isLoggedIn) {
      navigate("/login");
    }
    setVaryingState(service?.data?.title);
  };

  const onChangeProjectId = (e) => {
    if (e.target.value == "add") {
      window.open("/customer_project_add", "_blank");
    } else {
      setProjectId(e.target.value);
    }
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };
  const modalOnSubmit = (e) => {
    e.preventDefault();

    if (project_id) {
      const modalData = {
        project_id: project_id,
        service_id: service.data._id,
        message: varyingMessage,
      };
      setProposalRequest({ url: "proposal_request", request_data: modalData });
    } else {
      setFormError({ project: "Select Project" });
    }
  };

  useEffect(() => {
    if (proposal_request && proposal_request.status) {
      setContactRequest(true);
    }
  }, [proposal_request]);

  return (
    <>
      <MDBBtn
        onClick={() => {
          setVaryingState("@mdo");
          setVaryingModal(true);
          checkStatus();
        }}
        className="makeoffer"
      >
        Contact for Service
      </MDBBtn>

      <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Contact <span style={{ color: "#6A2FF9" }}>{varyingState}</span>
              </MDBModalTitle>
              <MDBBtn
                className="btn-close closeBtn"
                color="none"
                onClick={() => setVaryingModal(false)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {!iscontactRequest ? (
                <form>
                  <div className="category-dropdown mb-4">
                    <label>Project Name:</label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => {
                        onChangeProjectId(e);
                      }}
                      onFocus={(e) => {
                        get_posts({});
                      }}
                    >
                      <option>Default selction:</option>
                      <option value="add">Add Project</option>

                      {project_data?.data?.map((prj) => (
                        <option value={prj._id}>{prj.title}</option>
                      ))}
                    </Form.Select>
                    <span className="error">{formError?.project}</span>
                  </div>
                  {/* <div className="mb-3">
            {varyingModal && (
              <MDBInput
                label="Recipient:"
                value={varyingRecipient}
                onChange={onChangeRecipient}
                labelClass="col-form-label"
              />
            )}
          </div> */}
                  <div className="mb-3">
                    <label>Message:</label>
                    {varyingModal && (
                      <MDBTextArea
                        value={varyingMessage}
                        onChange={onChangeMessage}
                        labelClass="col-form-label"
                      />
                    )}
                  </div>
                </form>
              ) : (
                "Thanks for contact"
              )}
            </MDBModalBody>
            <MDBModalFooter>
              <div className="btn-modal-div">
                <MDBBtn
                  color="secondary"
                  onClick={() => setVaryingModal(false)}
                >
                  Close
                </MDBBtn>
                {!iscontactRequest ? (
                  <MDBBtn onClick={(e) => modalOnSubmit(e)}>Submit</MDBBtn>
                ) : (
                  ""
                )}
              </div>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ServiceModal;
