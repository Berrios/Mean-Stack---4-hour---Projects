app.controller('MainController', function(mainFactory) {
  console.log("This is MainController");
  var that = this;
  var user = that.full_name;
    this.checkLogin = function(user){
        mainFactory.checkLogin(user);
    }
})

app.controller('AppointmentController', function(appointmentFactory){
    this.addAppointment = function(newAppt){
        console.log(newAppt);
        appointmentFactory.addAppointment(newAppt);
    }
})

app.controller('DashboardController', function(dashboardFactory){
    var that = this;

    dashboardFactory.showAppointments(function(appointments){
        console.log(appointments);
       return that.appointments = appointments;  
    })
})

// app.controller('UserController', function(UserFactory){
//     console.log("UserController Loaded");
//     this.user = UserFactory.getUser();
//     this.update = function(user){
//         UserFactory.update(user);
//     }
// })

// app.controller('UsersController', function(UserFactory){
//     console.log("UsersController Loaded");
//     var that = this;
    
//     var getUsers = function(){
//         UserFactory.getUsers(function(users){
//             that.users = users;
//         });
//     }
//     getUsers();
//     this.add = function(newUser){
//         UserFactory.add(newUser, function(){
//             getUsers();
//         })
//     }
//     this.remove = function(user){
//         UserFactory.remove(user, function(){
//             getUsers();
//         })
//     }
//     this.show = function(user){
//         UserFactory.setUser(user);
//     }
// })





