var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //add a on click function on submit
    $('.submit').on('click', function() {
      App.post();
    });
    $("html").find('.username').on('click', function() {
      console.log($(this).text());
      Friends.toggleStatus($(this).text());
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  //Post function
  post: function() {
    var message = {
      username: App.username,
      text: $('#message').val()
    };

    Parse.create(message);
    //location.reload(true);
  }
};
