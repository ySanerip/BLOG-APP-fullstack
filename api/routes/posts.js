import express from "express";
import {
    addPost,
    getPost,
    getPosts,
    deletePost,
    updatePost
} from "../controllers/post.js";

const router = express.Router()

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

//router.get("/test", addPost);

export default router;