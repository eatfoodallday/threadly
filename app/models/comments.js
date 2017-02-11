// grab the packages that we need for the comment model
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 // comment schema
 var commentSchema = new Schema({
 comment: String
 });

module.exports = mongoose.model('comments', commentSchema);