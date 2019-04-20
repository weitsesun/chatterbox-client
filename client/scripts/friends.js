var Friends = {
    
    //friendsList: {}, //username: true
    // $username: $('.username'),

    // initialize: function(){

    // }

    toggleStatus: function(username){
        //if find friend in friendList -> return T else F
        // if (!Friends[username]) {
        //     Friends[username] = true;
        // } else {
        //     Friends[username] = false;
        // }

        (!Friends[username]) ? Friends[username] = true: Friends[username] = false;
    }

};


// $username: $('.username'),

//     addFriend: function(){
//         $username.on("click", function(event){
//             //add to friend
//             alert("clicked");
//         })
//     }