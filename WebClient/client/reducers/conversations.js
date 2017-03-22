import h from '../components/helpers/h';
import C from '../actions/actionConstants';

function conversations(state = {}, action) {
    switch (action.type) {
        case C.FETCH_CONVERSATIONS:
            return action.conversations
        case C.UPDATE_CONVERSATION_HEADER:
            return {
                ...state,
                [action.conversationId]: {
                    last_message: action.lastMessage,
                    timestamp: action.timestamp,
                    sender: action.sender
                }
            }
        case C.START_NEW_CONVERSATION:
            return {
                ...state,
                [action.conversationId]: {
                    last_message: action.lastMessage,
                    timestamp: action.timestamp,
                    sender: action.sender
                }
            }
        default:
            return state;

    }
    return state;
}

export default conversations;