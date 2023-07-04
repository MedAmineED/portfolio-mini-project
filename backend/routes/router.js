const express = require("express")
const adminController = require("../controllers/adminController")
const skillController = require("../controllers/skillsController")
const messageController = require("../controllers/MessagesController")
const blogsController = require('../controllers/BlogsController')
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("hamma")
})

// router.get('/add', userController.getAllusers)

router.post('/updateAdmin', adminController.postUpdatedAdmin)
router.post('/addSkills', skillController.postNewSkill)
router.get('/skills', skillController.getSkills)
router.get('/admin', adminController.getAdmin)

router.get('/blogs', blogsController.getBlogs)
router.post('/blogs', blogsController.postNewBlog)
router.get('/blogs/showBlog/:id', blogsController.getBlogById)


router.post('/addMessage', messageController.postNewMessage)
module.exports = router