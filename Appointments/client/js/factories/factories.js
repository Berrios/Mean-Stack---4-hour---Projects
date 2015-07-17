app.factory('mainFactory', function ($http, $location){


	// return {
 //        checkLogin: function(user, callback){
 //            console.log(user);
 //            $http.post('/users/check', user).success(function(data){
 //                if(user === true)
 //                    $location.path("/bids");
 //                else
 //                    $location.path("/login");
 //            });
 //        }
 //    }
});

app.factory('appointmentFactory', function($http, $location){
    return{
        addAppointment: function(newAppt, callback){
            console.log(newAppt);
            $http.post('/appointment', newAppt).success(function(response){
                callback = response;
            })
        }
    }
});

app.factory('dashboardFactory', function($http, $location){
        return {
        showAppointments: function(callback){
            $http.get('/appointment').success(function(response){
               callback(response);
            })
        },
        // setAppointment: function(user){
        //     this.user = user;
        //     $location.path('/appointment/user');
        // },
        // getAppointment: function(){
        //     if(!this.user)
        //         $location.path('/users');
        //     return this.user;
        // }
    }
});
// app.factory('UserFactory', function($http, $location){
//     return {
//         getUsers: function(callback){
//             console.log("UsersFactory getUsers");
//             $http.get('/users').success(function(response){
//                 callback(response);
//             })
//         },
//         add: function(newUser, callback){
//             if(newUser){
//                 console.log("UsersFactory add ", newUser);
//                 $http.post('/users', newUser).success(function(response){
//                     callback(response);
//                 });
//             }
//         },
//         remove: function(user, callback){
//             console.log("UsersFactory remove ", user);
//             $http.delete('/users/'+user._id).success(function(response){
//                 callback();
//             })
//         },
//         update: function(user){
//             console.log("UsersFactory remove ", user);
//             $http.put('/users/'+user._id, user).success(function(response){
//                 $location.path('/users');
//             })
//         },
//         setUser: function(user){
//             this.user = user;
//             $location.path('/users/details');
//         },
//         getUser: function(){
//             if(!this.user)
//                 $location.path('/users');
//             return this.user;
//         }
//     }
// })

// app.factory("mainFactory", function ($http){
//     return{

//     }
// });


