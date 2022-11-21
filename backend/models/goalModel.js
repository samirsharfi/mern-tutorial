const mongoose = require("mongoose");

const goalSchema = ({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}
)

module.exports = mongoose.model('Goal', goalSchema)
