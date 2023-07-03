const BlogsModel = require('../models/BlogsModel');

class BlogsController {
  static async postNewBlog(req, res) {
    const reqBlogs = req.body;
    const addNewBlog = new BlogsModel(
                                    reqBlogs.blogTitle,
                                    reqBlogs.blogContent,
                                    reqBlogs.image
                                    )
        console.log("add Skill", addNewBlog)

    try {
      const savedBlog = await addNewBlog.addBlog();
      res.send(savedBlog)
    } catch (error) {
      console.log("my error = ",error);
      res.status(500).send('Error saving the skill');
    }
  }

  static async getBlogs(req, res) {
    try {
        const  BlogsData = await BlogsModel.getBlogsData()
        console.log("request success")
        console.log(BlogsData)
        res.send(BlogsData)
    }
    catch(err) {
        console.log(err)
    }


  }
}

module.exports = BlogsController