var mongoose = require('mongoose');

var todo = mongoose.Schema({
	name: {type : String},
	done: {type : Boolean}
},
  {
	collection : 'todos'
  }
)

module.exports = mongoose.model('Todo', todo);