app.directive("topics", function(){
    return {
        restrict: "A",
        link: function($scope, $element){
            $scope.$on("new_topic", function(event, data){
                console.log("This is data.topic: "+data.topic);
                console.log(data.topic._id);
            $element.find("tbody").append("<tr ng-controller'TopicController as TopicController'><td>"+data.topic.category+"</td> \
                                    <td><a href='#/topic/"+data.topic._id+"'>"+data.topic.heading+"</a></td> \
                                    <td><a href='#/profile/{{topic.users_id}}'>User Name</a></td> \
                                    <td>posts.length</td> \
                                </tr>");
            });
        }
    }
});

// app.directive("posts", function(){
//     return {
//         restrict: "A",
//         link: function($scope, $element, $attr){
//             console.log("This is $scope.data: "+$scope.data);
//             $scope.$on("post_data", function(event, data){
//                 $element.append("<a href='#/topic/{{$data.post.topic._id}}'>(userName)</a> \
//                                    <p>"+data.post.post+"</p> \
//                                 <div class='vote'> \
//                                     <p class='likes'> (# of likes) </p> \
//                                     <button class='likes-btn' ng-click='post.like()'> ∆ </button> \
//                                     <button class='likes-btn' ng-click='post.dislike()'> ∇ </button> \
//                                     <p class='dislikes'> (# of dislikes) </p> \
//                                 </div> \
//                                 <div class='comments' ng-repeat='comment in comments | orderBy: comment.date'> \
//                                     <span> \
//                                         <a href='#/user/{{comment.id}}'> {{comment.userName}} </a> \
//                                         <p>{{comment.comment}}</p> \
//                                     </span> \
//                                 </div>");
          
//                 // $element.find("post").append("<a href='#/topic/{{topic._id}}'>"+data.post.userName+"</a> \
//                 //                     <p>"+data.post.post+"</p>");
//                // var content = "<a href='#/user/{{post.id}}'>{{post.userName}}</a>"+
//                //                              "<p>{{post.post}}</p>";
//                //  this.$element.append(content);
//             });
//         }
//     }
// });

// app.directive('colors', function(){
// 	return {
//         restrict: "AE",
// 		link: function(scope, element, attrs){
// 			element.css("background-color", "yellow")

// 			element.bind('mouseenter', function(){
// 				element.css("background-color", "red")
// 			})
// 			element.bind('mouseleave', function(){
// 				element.css("background-color", "green")
// 			})
// 		}
// 	}
// })

// .directive('sampleLink', function() {
//     return {
//         restrict: "E",
//         template: "<div>...loaded template (div) through <strong> sample-link </strong> directive!...</div>", // OR
//         // templateUrl: path/to/file/template.html
//         link: function(scope, element, attrs){
//         	console.log("<sample-link> link executing")

//        		element.addClass("sampleLinkLinked")

//            	element.bind("mouseenter", function(){

//            		// Do things after mouseenter...
//         		console.log("<sample-link> mouseenter triggered.")

//            		// Add a class...
//            		element.addClass("mouseenterEntered")
//  				// addClass()
// 				// after()
// 				// append()
// 				// detach()
// 				// empty()
// 				// eq()
// 				// hasClass()
// 				// html()
// 				// prepend()
// 				// prop()
// 				// text()
// 				// toggleClass()
// 				// val()

//            });
//         }
//     };
// })














