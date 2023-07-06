const express = require("express")
const adminController = require("../controllers/adminController")
const skillController = require("../controllers/skillsController")
const messageController = require("../controllers/MessagesController")
const blogsController = require('../controllers/BlogsController')
const router = require("express").Router();
const multer = require("multer")

const storage = multer.diskStorage({
    destination : (req, file, cd)=> {
        cd(null, './uploads')
    },
    filename : (req, file, cd)=> {
        const filename = `${Date.now()}_${file.originalname.replace(/\s+/g, '-')}`
        cd(null, filename)
    }
})

const upload = multer({storage}).single('receipt')

router.get("/", (req, res) => {
    res.send("hamma")
})

// router.get('/add', userController.getAllusers)

router.post('/updateAdmin', adminController.postUpdatedAdmin)
router.post('/addSkills', skillController.postNewSkill)
router.get('/skills', skillController.getSkills)
router.get('/admin', adminController.getAdmin)

router.get('/blogs', blogsController.getBlogs)
router.get('/blogs/showBlog/:id', blogsController.getBlogById)

router.post('/blogs', upload, 
                // (req, res)=> {
                //     const image = req.file
                //     res.send({
                //         filename : image.originalname,
                //         path : image.path
                //     })
                // }
                blogsController.postNewBlog
                )



router.post('/addMessage', messageController.postNewMessage)
module.exports = router