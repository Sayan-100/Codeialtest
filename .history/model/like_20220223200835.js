const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
    },

    //The object on which like is placed the IDs

    likeable: {
        type: mongoose.Schema.ObjectId,
        require: true,

        //we are goging to place the path into some other field which is there
        //the field will decide on which type of object the like has been placed it decides which other property that is the type of the object
        refPath: 'onModel'
    },

    //a property on likes and the type
    onModel: {
        type: String,
        required: true,
        enum: ['Post', 'Comment'] //values can be put
    }

})