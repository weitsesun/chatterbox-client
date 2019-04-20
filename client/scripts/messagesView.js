var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
    Parse.readAll((data) => {
      MessagesView.render(data.results);
    });
    
  },

  render: function(arr) {
    for (let i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]); 
    }
    // MessagesView.renderMessage(arr);
  },
  renderMessage: function(message) {
    // want to $(#chat).append(MessageView.render(msgObject))
    if(!message['text']) {
      message['text'] = "a";
    }
    if(!message['username']) {
      message['username'] = "a";
    }
    MessagesView.$chats.append(MessageView.render(message));
  }

};



// var message = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'
// };