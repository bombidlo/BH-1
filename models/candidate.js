const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    fio: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: false
    },
    photo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false
    }
    ,
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    comment: {
        type: String,
        required: false
    }
});


module.exports = mongoose.model('Candidate', candidateSchema);