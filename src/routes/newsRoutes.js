import express from 'express'

import NewsController from '../controller/newsController'
import VerifyAccess from '../middlewares/verifyAccess'

const router=express.Router()


router.post("/",NewsController.createNews)
router.get("/",NewsController.getAllNews)
router.patch("/:id",NewsController.updateNews)
router.get("/:id",NewsController.getOneNews)
router.delete("/:id",NewsController.deleteOneNews)


export default router