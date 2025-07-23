import fs from "fs"
import imagekit from "../config/imageKit.js";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";

export const addBlog = async (req, res) => {
    try {
        const {title, subTitle, description, author, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if(!title || !description || !author || !category || !imageFile) {
            return res.status(400).json({ success : false, message: "Missing required fields" });
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title, subTitle, description, author, category, image, isPublished})

        res.status(200).json({ success : true, message : "Blog added Successfully"})

    } catch (error) {
        return res.status(500).json({ success : false, message: "Server Error", error: error.message});
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({isPublished: true})
        res.status(200).json({ success : true, message : "All blogs data fetched successfully", blogs});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error : error.message});
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)
        if(!blog) {
            return res.status(401).json({ success : false, message : "Blog Not found"});
        }
        res.status(200).json({ success : true, message : "Blog data fetched successfully", blog})
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);

        //Delete all the comments associated with the blog
        await Comment.deleteMany({blog: id});

        res.status(200).json({ success : true, message : "Blog deleted successfully"});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
}

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.status(200).json({ success : true, message : "Blog status updated successfully"});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error : error.message});
    }
}

export const addComment = async (req, res) => {
    try {
        const {blog, name, content} = req.body;
        await Comment.create({ blog, name, content});
        res.status(200).json({ success : true, message : "Comment added for review"});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error: error.message});
    }
}

export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort
        ({createdAt: -1});
        res.status(200).json({ success : true, message : "All blogs comments fetched successfully", comments});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error", error:error.message});
    }
}