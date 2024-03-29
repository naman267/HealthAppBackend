const Post = require('../models/post')
const Disease = require('../models/disease')

function post() {
  return {
    async makepost(req, res) {
      console.log('request accepted')
      const title = req.body.title
      const body = req.body.body
      const category = req.body.category
      const usermail = req.body.usermail
      let diseas = await Disease.find({ title: title })
      console.log(diseas)
      if (diseas.length === 0) {
        const diseasee = await Disease.insertMany([
          {
            title,
            category
          }
        ])
        console.log(diseasee)
      }
      const post = new Post({
        title,
        body,
        category,
        usermail,
        upvote: 0,
        downvote: 0,
        totalvotes: 0,
        verified: false
      })
      post.save()
      res.json(post)
    },
    async upvotee(req, res) {
      const postId = req.params.id
      const votedBy = req.query.user
      const post = await Post.findById(postId)

      const idx = post.upvotedBy.findIndex((user) => user === votedBy)
      if (idx === -1) {
        post.upvotedBy.push(votedBy)
        const idx1 = post.downvotedBy.findIndex((user) => user === votedBy)
        post.upvote = post.upvote + 1
        if (idx1 === -1) {
          post.totalvotes = post.totalvotes + 1
        } else {
          post.downvotedBy.splice(idx1, 1)
          post.downvote = post.downvote - 1
        }
      }

      post.userExisted = idx !== -1
      post.save()
      res.json(post)
    },

    getpost(req, res) {
      const title = req.params.title
      Post.find({ title: title })
        .sort('-upvote')
        .then((post) => {
          console.log(post)
          return res.json(post)
        })
    },

    async downvotee(req, res) {
      const postId = req.params.id
      const votedBy = req.query.user
      const post = await Post.findById(postId)

      const idx = post.downvotedBy.findIndex((user) => user === votedBy)
      if (idx === -1) {
        post.downvotedBy.push(votedBy)
        const idx1 = post.upvotedBy.findIndex((user) => user === votedBy)
        post.downvote = post.downvote + 1
        if (idx1 === -1) {
          post.totalvotes = post.totalvotes + 1
        } else {
          post.upvotedBy.splice(idx1, 1)
          post.upvote = post.upvote - 1
        }
      }

      post.userExisted = idx !== -1
      post.save()
      res.json(post)
    },

    givepost(req, res) {
      Post.find({}).then((post) => {
        console.log(post[0])
        return res.json(post[0])
      })
    }
  }
}

module.exports = post
