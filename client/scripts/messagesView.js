var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
    Parse.readAll((data) => {
      MessagesView.render(data.results);
    });
    
  },

  render: function(arr) {
    //console.log('render function arr = ', arr);
    for (let i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]); 
    }
  },

  renderMessage: function(message) {
    // console.log("renderMessage message = ", message)
    if(!message['text']) {
      message['text'] = "";
    }
    if(!message['username']) {
      message['username'] = "(Anonymous)";
    }
    MessagesView.$chats.append(MessageView.render(message));
  }

};
