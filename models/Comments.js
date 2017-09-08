var mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
    name:{type:String, default:''},
    comment:{type:String, default:''},
    timestamp:{type:Date, default:Date.now}
})

module.exports = mongoose.model('CommentSchema', CommentSchema)