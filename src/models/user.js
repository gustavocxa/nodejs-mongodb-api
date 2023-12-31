const mongoose = require("mongoose");

const userShema = mongoose.Schema({
    id: {
        type: String
    },
    profileId: {
        type: Number,
        require: true
    },
    primaryEmail: {
        type: String,
        require: true,
        unique: true
    },
    secondaryEmail: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    tempPassword: {
        type: String
    },
    statusId: {
        type: Number,
    },
    avatar: {
        type: Buffer,
    },
    lastLogin: {
        type: Date
    },
    dateCreated: {
        type: Date
    },
    dateUpdated: {
        type: Date
    },
    createdBy: {
        type: Number
    },
    updatedBy: {
        type: Number
    },
});

module.exports = mongoose.model('User', userShema);