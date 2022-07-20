import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser,getAllUsers } from "../Controllers/UserControllers.js";
import authMiddleWare from "../middleware/Authmiddleware.js";
const router = express.Router();

router.get('/',getAllUsers)
router.get('/:id', getUser)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow', authMiddleWare, followUser)
router.put('/:id/unfollow', authMiddleWare, unfollowUser)
export default router;