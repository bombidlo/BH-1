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

// candidateSchema.methods.addToDb = function (url) {
//     request("https://api.vk.com/method/users.get?user_ids=" + url + "&fields=bdate,city,country,home_town,photo_200,has_mobile,contacts,relation&access_token=" + token + "&v=5.92", (err, resp, body) => {
//         const $ = cheerio.load(body);
//         const result = JSON.parse($.text());
//         return result;
//     })
// }


module.exports = mongoose.model('Candidate', candidateSchema);