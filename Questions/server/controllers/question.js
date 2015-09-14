var mongoose = require('mongoose');
var Questions = mongoose.model('Questions');

module.exports = (function() {
  return {
    add: function(req, res){
          console.log("This is req.body in add questions.js controller:"+req.body.question);
        question = new Questions(req.body);

        question.save({
          question: req.body.question,
          description: req.body.description
        }, function(err){
          if(err)
            console.log(err)
          else{
            // res.json({message: "New Question successfully added!"});
            console.log(req.body.question);
          }
        })
    }
  }
 
})();