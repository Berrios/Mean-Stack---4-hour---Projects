   var session_info = [];

    //************ now lets create a controller with some hardcoded data! ************
    myApp.controller('LoginController', function ($scope, loginFactory){
    	
      // function to check if user is already login / session credentials are active
      var is_user = function(session_id){
        number_of_users = session_info.length;

        var current_user = false;

        if(number_of_users > 0){
          for(var ctr = 0; ctr < number_of_users; ctr++){
            if(session_info[ctr].id == session_id){
              current_user = session_info[ctr];
              current_user = true;
              break;
            }else{
              current_user = false; 
            }
          }
        }
        console.log("current user", current_user)
        return current_user;
      };
        var users = []
       
       users = [
          {name: "Tim"},
          {name: "Bob"},
          {name: "Joe"},
          {name: "Mike"}
        ];

     $scope.getUsers = function(){
        return users;
      }

    $scope.checkUser = function(userName) {
      console.log(userName);
      for (var i = 0; i <= users.length; i++) {
        if (users[i].name == userName) {
          return true;
          console.log("User already exists");
        }else{
          users.push({
              name: userName,
              created: Date.now()
          });
        }
      }
      return false;
    }

    		// var info = $scope.name;
    		// loginFactory.login(info);
    		// info = "";

    	// loginFactory.getUsers($scope, function(data){
    	// 	//this is get data from the friends array
    	// 	$scope.users = data;
    	// });
    });

    myApp.controller('ProductsController', function ($scope, productsFactory){
    	productsFactory.getProducts($scope, function(data){
    		//this is get data from the friends array
    		$scope.products = data;
    	});
    });

    myApp.controller('BidsController', function ($scope, bidsFactory){
       var products = [];
       var bids = [];


       $scope.bids = [
       {
             userName: "Tim",
             amount: 23
        },{
             userName: "Joe",
             amount: 12
        }];

      $scope.products = [ 
      {   
           id: 0,
           productName: "car",
           productImg: "http://images.clipartpanda.com/cars-20clipart-niBGKE66T.png",
           bids: $scope.bids
      },{
           id: 1, 
           productName: "plane",
           productImg: "http://www.clipartbest.com/cliparts/acq/ezd/acqezd8Ri.png",  
           bids: $scope.bids
      },{
           id: 2,
           productName: "boat",
           productImg: "http://cliparts.co/cliparts/pco/5xX/pco5xXqKi.png",
           bids: $scope.bids
      }];

      $scope.newBid = function(data, id, allBids){
         $scope.products[id].bids.push({bids: {userName: "will", amount: data}});
         var newest = $scope.bids.length-1;
         var allBids = $scope.products[id].bids;
         $scope.allBids;
         console.log(allBids);
         $scope.latest = $scope.products[id].bids[newest].bids;
         console.log($scope.latest.userName);
         console.log($scope.latest.amount);
      }
      // return $scope.products;
    });

  	//************ create the loginFactory ************
  	myApp.factory('loginFactory', function ($http){
  		var factory = {};
  

  		factory.login = function(info){
  		users.push({name: info});
 			$http('/login', info).success(function (output) {
	          console.log(output);
	          if(output.success == 1)
	    			  console.log("Logged in Succesfully!");
	          else
	            console.log("you have an error logging in!");
	        });
  		}

  		// factory.getUsers = function(callback){
    //     //where do we get access to $http?
    //     $http.get('/users').success(function(output){
	   //        callback(output);
	   //      })
  		// };

  		return factory;
  	});

//************ create the productsFactory ************
  	myApp.factory('productsFactory', function ($http){
  		var factory = {};
  		var products = [
  			{product: "car", amount: 4},
  			{product: "plane", amount: 2},
  			{product: "boat", amount: 44}
  		];

  		factory.getProducts = function(callback){
        //where do we get access to $http?
        $http.get('/products').success(function(output){
	          callback(output);
	        })
  		};

  		return factory;
  	});

  	//************ create the productsFactory ************
  	myApp.factory('bidsFactory', function ($http){
  		var factory = {};
  		var bids = [{
  			   userName: "Tim",
           productName: "car",
           productImg: "http://images.clipartpanda.com/cars-20clipart-niBGKE66T.png",
           amount: 23,
  		},{
           userName: "Joe",
           productName: "plane",
           productImg: "http://www.clipartbest.com/cliparts/acq/ezd/acqezd8Ri.png",
           amount: 12,
      }
      ];

  		// factory.getBids = function(callback){
    //     //where do we get access to $http?
    //     $http.get('/bids').success(function(output){
	   //        callback(output);
	   //      })
  		// };

  		return factory;
  	});