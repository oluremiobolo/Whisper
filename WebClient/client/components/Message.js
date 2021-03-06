import React from 'react';
import h from './helpers/h';
/*
    Message Component
    Renders all the messages from a conversation into the DOM
*/
export default class Message extends React.Component {
    componentDidMount() {
        // jQuery to auto scroll to top!!!
        $('#conversationPanel').scrollTop($('#conversationPanel')[0].scrollHeight);
    }
    render() {
        var message_data = this.props.message_data || {};
        if (message_data !== {}) {
            let isSenderLogged = this.props.loggedUser === message_data.sender;

            return (
                <div className="speech-whispper">
                    <div className={`bubble ${isSenderLogged?'':'float-right'}`}>
                        <div className="bubble-txt">
                            <p className="bubble-message">{message_data.content}</p>
                            <span className="bubble-timestamp">
                                {message_data.timestamp !== ''
                                    ?
                                    <i className="fa fa-clock-o mr-1"></i>
                                    : ''}
                                {h.formatTime(message_data.timestamp)}
                            </span>
                        </div>
                        {isSenderLogged
                            ?
                            <div className="bubble-arrow"></div>
                            :
                            <div className="bubble-arrow sender"></div>
                        }
                    </div>
                </div>
            )
        }
    }

}