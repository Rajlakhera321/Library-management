const {Schema,model} = require("mongoose");

const librarySchema = new Schema({
    studentName: {
        type: Schema.Types.String
    },
    bookName: {
        type: Schema.Types.String
    },
    issueDate: {
        type: Schema.Types.String
    },
    charges: {
        type: Schema.Types.String
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true
    }
},{timestamps: true});

module.exports = model("Library",librarySchema);