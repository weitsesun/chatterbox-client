var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomList: {},

  initialize: function() {
    Parse.readAll((data) => {
      RoomsView.render(data.results);
    })

    RoomsView.$button.on('click', function(event){
      var room = window.prompt("Please enter roomname");
      RoomsView.roomList[room] = 1;
    });
  },

  render: function(arr) {
    //put roomname to room List
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].roomname) {
        RoomsView.roomList[arr[i].roomname] = 1;
      }
    }
    //add room to the DOM
    for(var key in RoomsView.roomList) {
      RoomsView.renderRoom(key);
    }
  },

  renderRoom: function(roomName) {
  //   var roomname = str;
  //_.template only accepts object, how to solve it?
    
    RoomsView.$select.append(Rooms.render({"roomname" : roomName}));
    // console.log("Rooms render:",roomName)
  }

};
