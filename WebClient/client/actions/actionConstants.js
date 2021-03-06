module.exports = {

    // FIREBASE ACTIONS
	FIREBASE: "https://pythonwithfirebase-6b00a.firebaseio.com",

	// UI ACTIONS
    // USER DRAWER
    SHOW_CONTACTS_SIDEBAR: "SHOW_CONTACTS_SIDEBAR",
    FILL_USERS: "FILL_USERS",

	// AUTH ACTIONS
	ATTEMPTING_LOGIN: "ATTEMPTING_LOGIN",
	LOGIN_USER: "LOGIN_USER",
	// LOGOUT: "LOGOUT",

	// AUTH STATES
	LOGGED_IN: "LOGGED_IN",
    LOGGED_OUT: "LOGGED_OUT",
	ANONYMOUS: "ANONYMOUS",
	AWAITING_AUTH_RESPONSE: "AWAITING_AUTH_RESPONSE",
    LOGIN_ERROR: "LOGIN_ERROR",

	// Conversations
    FETCH_CONVERSATIONS: 'FETCH_CONVERSATIONS',
    START_NEW_CONVERSATION: "START_NEW_CONVERSATION",
    TOGGLE_CONVERSATION: "TOGGLE_CONVERSATION",
    ADD_CONVERSATION : "ADD_CONVERSATION",
    UPDATE_CONVERSATION_HEADER: "UPDATE_CONVERSATION_HEADER",
    
    // MESSAGES
    ADD_MESSAGE: "ADD_MESSAGE",
    FETCH_MESSAGES: 'FETCH_MESSAGES',

    // PARTICIPANTS
    FETCH_PARTICIPANTS: "FETCH_PARTICIPANTS",
};