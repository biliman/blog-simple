const Article = require('../models/article');
const methods = {};

methods.getAllArticles = (req, res) => {
  Article.find({})
  .populate('author')
  .exec((err, response) => {
    if (err) res.json({ msg: `Error when getting articles: ${err}`, success: false })
    else {
      res.send(response)
    }
  })
}

methods.getArticleByAuthor = (req, res) => {
  Article.find({})
  .populate('author')
  .exec((err, response) => {
    let pushData = [];
    response.forEach(article => {
      if (article.author._id == req.params.id) {
        pushData.push(article)
      }
    })
    res.send(pushData)
  })
}

methods.getArticleDetail = (req, res) => {
  Article.findById(req.params.id)
  .populate('author')
  .exec((err, response) => {
    if (err) res.json({ msg: `Error getting article detail: ${err}`, success: false})
    else {
      res.send(response)
    }
  })
}

methods.createArticle = (req, res) => {
  let newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })

  newArticle.save((err, response) => {
    if (err) res.json({ msg: `Error when create Article: ${err}`, success: false })
    else {
      Article.findById(response._id)
      .populate('author')
      .exec((err, response) => {
        if (err) res.json({ msg: `Error when getting detail article: ${err}`, success: false })
        else {
          res.send(response)
        }
      })
    }
  })
}

methods.editArticle = (req, res) => {
  Article.findById(req.params.id, (err, response) => {
    if (err) res.json({ msg: `Error when edit article: ${err}`, success: false})
    else {
      Article.findByIdAndUpdate({ '_id': response._id}, {
        $set: {
          title: req.body.title || response.title,
          content: req.body.content || response.content,
          category: req.body.category || response.category,
          author: req.body.author || response.author
        }
      }, {
        new: true
      })
      .exec((err, result) => {
        if (err) res.json({ msg: `Error when getting detail article: ${err}`, success: false })
        else {
          Article.findById(result._id)
          .populate('author')
          .exec((err, result) => {
            if (err) res.json({ msg: `Error when getting detail article: ${err}`, success:false})
            else {
              res.send(result)
            }
          })
        }
      })
    }
  })
}

methods.deleteArticle = (req, res) => {
  Article.findOneAndRemove(req.params.id, (err, response) => {
    if (err) res.json({ msg: `Error when delete article: ${err}`, sucess: false})
    else {
      res.send(response)
    }
  })
}

module.exports = methods
