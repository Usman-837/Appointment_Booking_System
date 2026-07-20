import express from 'express'
import { addDoctor } from '../controllers/adminController.js'
import multer from '../middlewares/multer.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor', upload.single('image'),addDoctor)

export default adminRouter