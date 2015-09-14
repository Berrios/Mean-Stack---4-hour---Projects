app.factory('userFactory', function($http, $location) {
	var factory = {};
	var currentUser = null;

	factory.setUser = function(user, callback) {
		var my_obj = new Object();
		my_obj.name = user;
		currentUser = my_obj.name;
		$http.post('/user', my_obj).success(function(data) {
			currentUser = data;
			callback(data);
		})
	}

	factory.readUser = function(callback) {
		callback(currentUser);
	}
	return factory;
})

app.factory('answersFactory', function($http, $location){
	var factory = {}
	var add = null;

	factory.addLike = function(answer, callback){
		$http.put('/answers/update',answer).success(function(data){
			callback(data);
		}).error(function(data){
			console.log(data);
		});
	}

	factory.createAnswer = function(answers, callback){
		var my_obj = new Object();
		my_obj.name =  answers.name;
		my_obj.heading =  answers.heading;
		my_obj.description =  answers.description;
		my_obj._question = answers._question;
	
		$http.post('/answers', my_obj).success(function(data){
			callback(data);
		}).error(function(info){
			console.log(info);
		});
	}

	factory.getAnswersIds = function(id, callback){
		console.log(id);
		$http.get('/questions/answers/'+id).success(function(data){
			console.log("-->",data);
			callback(data);
		});
	}
	return factory;
})

app.factory('questionsFactory', function($http, $location){
	var factory = {};

	factory.update = function(data, callback){
		$http.post('/questions/update', data).success(function(info){
			callback(info);
		})
	}
	
	factory.getAnswersIds = function(id, callback){
		$http.get('/questions/answers/'+id).success(function(data){
			callback(data);
		});
	}
 
	factory.createQuestion = function(questions, callback){
		var my_obj = new Object();
		my_obj.name =  questions.name;
		my_obj.question =  questions.question;
		my_obj.description =  questions.description;
		my_obj.answers = [];
		$http.post('/questions', my_obj).success(function(data){
			callback(data);
		})
	}

	factory.readQuestions = function(info, callback){
		$http.get('/questions').success(function(data){
			callback(data);
		})
	}

	factory.readQuestion = function(data, callback){
		var id = data
		$http.get('/questions/'+id).success(function(info){
			callback(info);
		});
	}

	factory.getQuestions = function(callback){
		$http.get('/questions').success(function(data){
			callback(data);
		})
	}
	return factory;
})
