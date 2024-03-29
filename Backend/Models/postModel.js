import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        desc: {
            type: String
        },
        likes: [],
        image: {
            type: String
        }
    },
    { timestamps: true }
)

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel
