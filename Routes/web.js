const controller = require('../app/controllers/disease')
const post = require('../app/controllers/post')

function initRoutes(app) {
  app.get('/disease-list', controller().diseaseList)
  app.get('/post/:title', post().getpost)
  app.get('/post/upvote/:id', post().upvotee)
  app.get('/post/downvote/:id', post().downvotee)
  app.post('/makepost', post().makepost)
}

module.exports = initRoutes
