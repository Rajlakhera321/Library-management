const {Schema,model} = require("mongoose");

const librarySchema = new Schema({
    student_name: {
        type: Schema.Types.String
    },
    book_name: {
        type: Schema.Types.String
    },
    issueDate: {
        type: Schema.Types.String
    },
    charges: {
        type: Schema.Types.String
    }
});

module.exports = model("Library",librarySchema);