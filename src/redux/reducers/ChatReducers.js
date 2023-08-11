const initialState = {
    proposalNewMessages: {},
  };
  export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case "NEW_MESSAGE":
        action.payload.is_actionable=true;
        return { ...state, messages: [...state.messages,action.payload]};
      case "FETCH_OLD_MESSAGE":
        const lastproposal_key =action.payload.oldmessages.findLast((element,key) => element.type=='proposal_update');
        action.payload.oldmessages.map((value) => {
          if(value.type=='proposal_update' ){
            if(value._id==lastproposal_key._id && !value.update){
              value.is_actionable=true
            } else{
              value.is_actionable=false
            }
            
          } 
          else if(value.type=='add_line_items' ){
            if(value.update==true){
              value.is_actionable=false
            } else{
              value.is_actionable=true
            }
          }
          return value
          })

          console.log(lastproposal_key,'lastproposal')

          return { ...state, 
          messages: action.payload.oldmessages,
          proposal: action.payload.proposal
        };  
      
      case "UPDATE_MESSAGE":
        let oldmessages=state.messages    
        
        oldmessages.map((element, index) => {
          if(element._id === action.payload._id) {
              console.log(action.payload.line_items,'line_items')
              oldmessages[index].data.line_items = action.payload.line_items;
              oldmessages[index].is_actionable=false;
          }
        });
        return { ...state, 
          messages: oldmessages,
        }; 
      case "GET_PROPOSAL_DETAIL":
        return { ...state, 
          proposal: action.payload
        }; 
      default:
        return state;
    }
  };