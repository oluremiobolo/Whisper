var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var createBrowserHistory = require('history/lib/createBrowserHistory');

// Our helpers function to reduce code in main app
var h = require('./helpers');

/* Firebase */
var firebase = require('firebase');
var firebaseConfig = require('../firebaseconfig')
// var firebaseApp = firebase.initializeApp(firebaseConfig);

/*
    Main Wrapper for our Whisper Web App
*/
var AppWrapper = React.createClass({
    getInitialState: function () {
        return {
            conversations: {},
            messages: {}
        }
    },
    componentDidMount: function () {
        var messages = require('../sample-messages')
        this.setState({
            conversations: require('../sample-conversations'),
            // messages: require('../sample-messages')
            messages: {
                message000001: {
                    sender: 'ramiri01',
                    content: "Hey pal, hope you are doing great!",
                    typeOfContent: "text",
                    timestamp: 1487855066
                },
                message000002: {
                    sender: 'jurdini01',
                    content: "Hey Ramiri, long time no see. I'm great!",
                    typeOfContent: "text",
                    timestamp: 1487855080
                }
            }
        });
    },
    getDefaultProps: function () {
        var thisconvo = this.loadSampleConversations
        return {
            // this.setState({conversations: thisconvo})
        }
    },
    render: function () {
        // console.log(this.state.conversations);
        return (
            <div className="row">
                <ConversationsSideBar conversations={this.state.conversations} />
                <ConversationPanel messages={this.state.messages} />
            </div>

        )
    }
});

/* 
  ConversationsSideBar
  This will let us make <StorePicker/>
*/

var ConversationsSideBar = React.createClass({
    renderConversation: function (key) {
        return <Conversation key={key} index={key} details={this.props.conversations[key]} />
    },
    render: function () {
        return (
            <div className="col-md-4">
                <ul>
                    {Object.keys(this.props.conversations).map(this.renderConversation)}
                </ul>
            </div>
        )
    }
});


/*
    Conversation 
    In charge of rendering each conversation available on the sidebar
 */
var Conversation = React.createClass({
    rendersomething: function (index) {
        console.log("Index " + index + " was clicked.");
    },
    handleClick: function (index) {

        console.log(index);
    },
    render: function () {
        var last_message = this.props.details.last_message;
        var time = h.formatTime(this.props.details.timestamp);
        var index = this.props.index;
        // console.log(details);;
        return (
            <li>
                <button href={this.props.index} onClick={this.handleClick.bind(this, index)}>{this.props.index}</button>
                <p>{last_message}</p>
                <pre>{time}</pre>
            </li>
        )
    }
});



/* 
    Conversation Panel
    Used to render the conversation history with a contact.
*/

var ConversationPanel = React.createClass({
    renderMessages: function (key) {
        return <Message key={key} index={key} messageDetails={this.props.messages[key]} />
    },
    render: function () {
        return (
            <div className="">
                    {Object.keys(this.props.messages).map(this.renderMessages)}
            </div>

        )

    }
});


/*
    Messages
    Will render each message in the conversation panel

    <MessageDetail key={key} index={key} detaildetails={this.props.messageDetails[key]}/>
    {Object.keys(this.props.messageDetails).map(this.displayContents)}

*/
var Message = React.createClass({
    render: function () {
        var messageDetails = this.props.messageDetails;
        return (
            <ul>
               <li>Sender: {messageDetails.sender}</li>
               <li>{messageDetails.content}</li>
               <li>{messageDetails.typeOfContent}</li>
               <li>On: {h.formatTime(messageDetails.timestamp)}</li>
            </ul>
        )
    }
});

/*
    Routes
*/
var routes = (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={AppWrapper} />
    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));