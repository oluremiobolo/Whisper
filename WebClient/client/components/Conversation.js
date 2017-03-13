import React from 'react';
/*
    Conversation 
    In charge of rendering each conversation available on the sidebar
 */

export default class Conversation extends React.Component {
    render() {
        const { conversations, i } = this.props;
        return (
            <div className="list-group-item" onClick={() => {this.props.toggleConversation(i)}}>
                <div>{conversations[i].last_message}</div>
                <small><i className="fa fa-clock-o mr-1"></i>{conversations[i].timestamp}</small>
            </div>
        )
    }
}
