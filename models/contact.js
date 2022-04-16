const { default: mongoose } = require('mongoose')
const {Schema} = require('mongoose')

const contactSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact