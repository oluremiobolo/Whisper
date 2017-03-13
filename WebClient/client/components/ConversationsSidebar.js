import React from 'react';
import Conversation from './Conversation';
/* 
  ConversationsSidebar
*/

export default class ConversationsSidebar extends React.Component {
    render() {
        return (
            <div className="conversationSidebar col-md-5 p-0">
                <div className="nav justify-content-end">
                    <div className="nav-item">
                        <button onClick={this.props.showContactsSidebar} className="btn btn-primary">
                            {this.props.leftDrawer.visible ? "Back to Conversations" : "Search Contacts"}
                        </button>
                    </div>
                </div>
                {this.props.leftDrawer.visible ?
                    "Contacts here"
                    :
                    Object.keys(this.props.conversations).map((i) => <Conversation {...this.props} key={i} i={i} />)
                }
            </div>
        )
    }
}