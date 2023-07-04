const BlogsModel = require('../models/BlogsModel');

class BlogsController {
  static async postNewBlog(req, res) {
    const reqBlogs = req.body;
    console.log(reqBlogs)
    const addNewBlog = new BlogsModel(
                                    reqBlogs.blogTitle,
                                    reqBlogs.blogContent,
                                    reqBlogs.image
                                    )
        console.log("add Blog", addNewBlog)

    try {
      const savedBlog = await addNewBlog.addBlog();
      res.send(savedBlog)
    } catch (error) {
      console.log("my error = ",error);
      res.status(500).send('Error saving the blog');
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
  
  static async getBlogById(req, res) {
    const blogId = parseInt(req.params.id); 
    console.log("id = ", req.params.id)

    try {
        const blog = await BlogsModel.getBlogById(blogId);
        if (blog.length > 0) {
            res.send(blog[0]);
        } else {
            res.status(404).send('Blog not found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error retrieving blog');
    }
}

}

module.exports = BlogsController