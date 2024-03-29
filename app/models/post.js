const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: String, required: true },
  usermail: { type: String, required: true },
  upvote: { type: Number, default: 0 },
  totalvotes: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  upvotedBy: { type: [String], default: null },
  downvotedBy: { type: [String], default: null },
  
  downvote: { type: Number, default: 0 },
  userExisted: { type: String, default: false }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
