import React from 'react';
import autobind from 'autobind-decorator';
import h from '../helpers/helpers';
/*
    Conversation 
    In charge of rendering each conversation available on the sidebar
 */

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);
    }
    retrieveConversation(index) {
        // In this section we add the state to the message.
        // So this is the best place to call the conversation from firebase.
        this.props.refreshConversationPanel(index);
    }

    render() {
        var last_message = this.props.details.last_message;
        var time = h.formatTime(this.props.details.timestamp);
        var index = this.props.index;
        return (
            <li>
                <button href={this.props.index} onClick={this.retrieveConversation.bind(this, index)}>{this.props.index}</button>
                <p>{last_message}</p>
                <pre>{time}</pre>
            </li>
        )
    }
}
// var Conversation = React.createClass({
//     retrieveConversation: function (index) {
//         // In this section we add the state to the message.
//         // So this is the best place to call the conversation from firebase.
//         this.props.refreshConversationPanel(index);
//     },

//     render: function () {
//         var last_message = this.props.details.last_message;
//         var time = h.formatTime(this.props.details.timestamp);
//         var index = this.props.index;
//         return (
//             <li>
//                 <button href={this.props.index} onClick={this.retrieveConversation.bind(this, index)}>{this.props.index}</button>
//                 <p>{last_message}</p>
//                 <pre>{time}</pre>
//             </li>
//         )
//     }
// });
// export default Conversation;