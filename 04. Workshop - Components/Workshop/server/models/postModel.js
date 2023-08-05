const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    themeId: {
        type: mongoose.Types.ObjectId,
        ref: "Theme"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Post', postSchema);
