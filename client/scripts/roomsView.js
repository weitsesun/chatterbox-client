var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.renderRoom("superLobby");
    RoomsView.renderRoom("RedRoom");
    RoomsView.renderRoom("ChillRoom");
    RoomsView.renderRoom("LivingRoom");
  },

  render: function(arr) {
    //do for loop here
    // for (var i = 0; i < arr.length; i++) {

    // }
  },

  renderRoom: function(roomName) {
  //   var roomname = str;
  //_.template only accepts object, how to solve it?
    
    RoomsView.$select.append(Rooms.render({"roomname" : roomName}));
    // console.log("Rooms render:",roomName)
  }

};
