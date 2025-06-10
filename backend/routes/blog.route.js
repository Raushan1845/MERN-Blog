import express from "express"
import { login,logout,register, updateProfile } from "../controllers/user.controller.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import {singleUpload} from "../middleware/multer.js"
import getDataUri from '../utils/dataUri.js'; 

import {createBlog, updateBlog} from '../controllers/blog.controller.js'
const router = express.Router()

router.route("/").post(isAuthenticated, createBlog)
router.route("/:blogId").put(isAuthenticated, singleUpload, updateBlog)
export default router;