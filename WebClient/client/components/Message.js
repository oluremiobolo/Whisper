import React from 'react';
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
            return (
                <div className="p-0" style={{ border: 'solid 0.1px gray' }}>
                    <small>{message_data.sender}</small>
                    <p>{message_data.content}</p>
                    <small>
                        {message_data.timestamp !== '' ? <i className="fa fa-clock-o mr-1"></i> : ''}
                        {message_data.timestamp}
                    </small>
                </div>
            )

        }
        return (
                <div className="speech-whispper">

                <div className="bubble">
                    <div className="bubble-txt">
                    <p className="bubble-name">{message_data.sender}</p>
                    <p className="bubble-message">{message_data.content}</p>
                    <span className="bubble-timestamp">
                                    <i className="fa fa-clock-o mr-1"></i>
                                    {message_data.timestamp}
                    </span>
                    </div>
                    <div className="bubble-arrow"></div>
                </div>

                    <div className="bubble sender">
                        <div className="bubble-txt">
                        <p className="bubble-name sender">{message_data.sender}</p>
                        <p className="bubble-message">{message_data.content}</p>
                        <span className="bubble-timestamp">
                            <i className="fa fa-clock-o mr-1"></i>
                            {message_data.timestamp}
                        </span>
                        </div>
                        <div className="bubble-arrow sender"></div>
                    </div>


                </div>
        )
    }

}

// CODIGO PARA BURBUJA ALTERNATIVA...
/*
  <div className="bubble-sender-receiver">
    <div className="bubble-receiver-txt">
      <p className="bubble-receiver-name">+353 87 1234 567<span> ~ John</span></p>
      <p className="bubble-receiver-message">Nice... this will work great for my new project.</p>
      <span className="bubble-receiver-timestamp">10:22 pm</span>
    </div>
    <div className="bubble-receiver-arrow alt"></div>
  </div>
*/




// CODIGO FERNANDO ORIGINAL
/*
            <div className="p-0" style={{ border: "solid 0.1px gray" }}>
                <div className="message-sender">
                    {message_data.sender}</div>
                <p>{message_data.content}</p>
                <div className="message-timestamp">
                    <i className="fa fa-clock-o mr-1"></i>
                    {message_data.timestamp}
                </div>
            </div>
*/


