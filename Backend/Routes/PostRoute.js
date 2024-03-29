import express from "express";
import { createpost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";
const router = express.Router()

router.post('/', createpost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)


export default router