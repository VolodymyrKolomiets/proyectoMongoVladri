const Post = require('../models/Post');

const PostController ={
    async create(req,res){
    try {
    const post = await Post.create(req.body)
    res.status(201).send(post)
    } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Ha habido un problema al crear el post' })
    }
    },
    async update(req, res) {
        try {
          const post = await Post.findByIdAndUpdate(
            req.params._id,
            { ...req.body, userId: req.user._id },
            {
              new: true,
            }
          );
          res.send({ message: "Post successfully updated", post });
        } catch (error) {
          console.error(error);
        }
      },
    }
    
    module.exports = PostController;