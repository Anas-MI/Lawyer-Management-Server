const router = require('express').Router()
const controller = require('./blogs.controller')


router.post("/create", controller.createList)
router.get("/delete/:id", controller.deleteList)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.viewBlog)

module.exports = router