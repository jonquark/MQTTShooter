var MQTTUtils = MQTTUtils || {};

MQTTUtils.Client = {
	// reference to the Paho.MQTT.Client object
	client : null,
	// reference to function to be called when a message is received
	messageHandler : null,
	// reference to the connection options that were used on the first
	// connect, so they can be reused in the event the connection has
	// to be re-established after an abnormal failure.
	userOnConnect: null,
	willMessage : null,
	// user callback for when if the connection is lost
	userOnConnectionLost : null,

	// Establishes a connection to an MQTT server, at server:port.  Creates and
	// specifies a will message containing willData that will be published to willTopic
	// in the event that the connection is lost abnormally.
	// The clientID is used to uniquely identify this client instance.
	// onConnectCallback will be called when the connection has been established
	// onConnectionLostCallback will be cslled if the connection is lost
	ConnectToServer : function(clientID, server, port, onConnectCallback, onConnectionLostCallback, willTopic, willData) {
		console.log("TODO: connect to server");
	},

	// stores a reference to the function that should be called
	// when a message has been received for a subscription that
	// this client has made.  The handler function will be called
	// with a single argument that is the received Paho.MQTT.Message
	// object
	SetMessageHandler : function(handlerFunc) {
		this.messageHandler = handlerFunc;
	},	

	// Creates a new Paho.MQTT.Message object that contains
	// 'messageData' in the message body, and then publishes
	// that message to the topic specified in 'topic'
	PublishMessage : function(topic, messageData) {		
		console.log("TODO: publish a message");
	},

	// creates a new subscription to a topic specified as a string.
	// Once the subscription has been successfully established,
	// messages that are published to the topic will be delivered to
	// this client via the 'OnMessage' callback.
	SubscribeToTopic : function(topic) {
		console.log("TODO: subscribe to a topic");		
	},

	// The callback which we will configure to be by the Paho.MQTT.Client object
	// every time a message is received 
	onMessage : function(message) {
		console.log("TODO: handle on message");
	},

	// The callback which we will configure to be called when a connection is 
	// lost.  We will attempt to reconnect to the server using the same details
	// and options from the first connect call.
	onConnectionLost : function(responseObject) {
		if (responseObject.errorCode !== 0) {
   			console.log("onConnectionLost:"+responseObject.errorMessage);
   			MQTTUtils.Client.userOnConnectionLost();

   			// create a new connection options object using
   			// the original parameters
   			var connectOpts = {
   				onSuccess : MQTTUtils.Client.userOnConnect,
   				willMessage : MQTTUtils.Client.willMessage
   			};

   			// reconnect
   			MQTTUtils.Client.client.connect(connectOpts);
  		}
	}
};
