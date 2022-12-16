const { model, Schema } = require('mongoose');

const postSchema = new Schema ({ 
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  github: {
    type: String,
    required: true,
  },
  liveSite: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  id: {
    type: Number, 
    required: true,
  }
});

const Post = model('Post', postSchema);


module.exports = Post;