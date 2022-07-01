import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    desc: String,
    creator: String,
    selectedFile: String,
    mintInfo: String,
    price: String,
    supply: {
        type: Number,
        default: 0,
    },
    listedDate: {
        type: Date,
        default: new Date(),
    },

})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;