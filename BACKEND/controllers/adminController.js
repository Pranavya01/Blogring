import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import userModel from '../models/userModel.js';
import Blog from '../models/blogModel.js';
import Comment from '../models/commentModel.js';


export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select("-password");
        res.status(200).json({ success : true, message : "All user details fetched successfully", users})
    } catch (error) {
        res.status(500).json({ success : true, message : "Failed to fetch the users", error : error.message});
    }
}

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existing = await userModel.findOne({ email });
        if (existing) return res.status(400).json({ success : false, message : "Email address already exists!"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ name, email, password: hashedPassword});

        return res.status(201).json({ success : true, message : "User registered Successfully", user: newUser});
    } catch (error) {
        return res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if(!user) return res.status(400).json({ success : false, message : "Invalid Credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ success : false, messsage : "Incorrect Password"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "3d"});

        return res.status(200).json({ success : true, message: "Login Successful", token, user});
    } catch (error) {
        return res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
};


export const getAllBlogsAdmin = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.status(200).json({ success : true, message: "Users blogs fetched successfully", blogs})
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error : error.message});
    }
}

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate("blog", "title").sort({createdAt: -1})
        res.status(200).json({ success : true, message : "All users comments are fetched successfully", comments});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error : error.message});

    }
}

export const getDashboard = async (req, res) => {
    try {
        const recentBlogs = await Blog.find({}).sort({ createdAt: -1}).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({isPublished: false});

        const dashboardData = {
            blogs, comments, drafts, recentBlogs
        }

        res.status(200).json({ success : true, message : "All the data fetched successfully", dashboardData});

    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
}

export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        await Comment.findByIdAndDelete(id);
        res.status(200).json({ success : true, message : "Comment deleted successfully"});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
}

export const approveCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
        res.status(200).json({ success : true, message : "Comment approved successfully"});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
}