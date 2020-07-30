const mongoose = require('mongoose');
const Post = require('../models/post');
const User = require('../models/user');
const Friends = require('../models/friends');
const UserInfo = require('../models/user_info');
const Likes = require('../models/likes');
const Page = require('../models/page');

exports.getAllUsers = (req, res, next) => {
  if (Object.keys(req.query).length > 0) {
    User.findOne(req.query)
      .exec()
      .then(user => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: 'no entries found' })
        }
      })
      .catch(error => {
        res.status(500).json(error)
      })
  } else {
    User.find()
      .exec()
      .then(users => {
        if (users.length > 0) {
          res.status(200).json(users);
        } else {
          res.status(404).json({ message: 'no entries found' })
        }
      })
      .catch(error => {
        res.status(500).json(error)
      })
  }


}

exports.getUser = (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
}


exports.getInfo = (req, res, next) => {
  const id = req.params.userId;
  UserInfo.findOne({ user: id })
    .populate('user', 'avatar firstName lastName userName')
    .exec()
    .then(user => {
      if (user) {
        console.log(user)
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
}

exports.getFriends = (req, res, next) => {
  const id = req.params.userId;
  Friends.findOne({ user: id })
    .populate('user', 'avatar firstName lastName userName')
    .populate({
      path: 'friends'
    })
    .exec()
    .then(user => {
      if (user) {
        console.log(user)
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
}

exports.getPosts = (req, res, next) => {
  console.log("--- GET USER POSTS")
  const id = req.params.userId;
  let level1, level2, level3, all;
  Post.find({ author: id, parent: null })
    .populate('author', 'avatar firstName lastName userName')
    .exec()
    .then(posts => {
      if (posts) {
        level1 = posts
        const level1Id = posts.map(l1 => l1._id)
        return Post.find({ parent: { $in: level1Id } })
          .populate('author', 'firstName lastName userName avatar')
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .then(posts => {
      if (posts) {
        level2 = posts
        const level2Id = posts.map(l2 => l2._id)
        return Post.find({ parent: { $in: level2Id } })
          .populate('author', 'firstName lastName userName avatar')
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .then(posts => {
      if (posts) {
        level3 = posts
        all = level1.map(l1 => {
          l1.children = level2
            .filter(l2 => l2.parent.equals(l1._id))
            .map(l2 => {
              l2.children = level3.filter(l3 => l3.parent.equals(l2._id))
              return l2
            })
          return l1
        })
        res.status(200).json(all)
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
}

exports.getLikes = (req, res, next) => {
  const id = req.params.userId;
  Likes.findOne({ user: id })
    .populate('user', 'avatar firstName lastName userName')
    .populate({
      path: 'pages'
    })
    .exec()
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .catch(error => {
      console.error(error)
      res.status(500).json(error)
    })
}