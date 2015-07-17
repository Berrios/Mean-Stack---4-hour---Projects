var appointment = require('../controllers/appointment.js');
// var topic = require('../controllers/topic.js');
// var post = require('../controllers/post.js')

module.exports = function(app) {
// User
	// // Index
	// app.get('/users', function(request, response) { users.index(request, response) })
	// // New
	// app.get('/users/new', function(request, response) { users.create(request, response) })
	// // Show
	// app.get('/users/:id', function(request, response) { users.show(request, response) })
	// // Edit 
	// app.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// // Create
	// app.post('/users', function(request, response) { users.create(request, response) })	
	// // Check
	// app.post('/users/check', function(request, response) { users.check(request, response) })	
	// // Destroy
	// app.delete('/users/:id', function(request, response) { users.destroy(request, response) })
	// // Update
	// app.put('/users/:id', function(request, response) { users.update(request, response) })

	app.post('/appointment', function(request, response){ appointment.create(request, response) })

	app.get('/appointment', function(request, response){ appointment.index(request,response) })

// WILDCARD Redirect to Mask unused urls.
	// app.get('/*', function(request, response){
	// 	response.redirect('/')
	// })
	// app.post('/*', function(request, response){
	// 	response.redirect('/')
	// })

}