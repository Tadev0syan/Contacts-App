const Contact = require('../models/contact')
const creatPath = require('../helpers/create-path')
const mongoose = require('mongoose')
const isValid = require('../helpers/is-valid')

let fail = false
let isRedir = false

const getContacts = (req, res) => {
	const title = 'Contacts'
	Contact
		.find()
		.then((contacts) => res.render(creatPath('contacts'), {contacts, title}))
		.catch((error) => console.log(error))
}

const getCreate = (req, res) => {
	if(isRedir){
		fail = true
		isRedir = false
	} else {
		fail = false
	}
	const title = 'Create contact'
	res.render(creatPath('create'), {title, fail})
}
const postCreate = (req, res) => {
	fail = false
	const {name, phone} = req.body
	if(isValid(name,phone)){
		const contact = new Contact({name, phone})
		contact
			.save()
			.then(() => res.redirect('/contacts'))
			.catch((error) => console.log(error))
	} else {
		isRedir = true
		res.redirect('/create')
	}
}

const deleteContacts = (req, res) => {
	Contact
	.findByIdAndDelete( mongoose.Types.ObjectId(req.params.id.trim()))
	.then(() => {
		res.sendStatus(200)
	})
	.catch(error => console.log(error))
}

const getEdit = (req, res) =>{
	if(isRedir){
		fail = true
		isRedir = false
	} else {
		fail = false
	}
	const title = 'Edit contact'
	Contact
		.findById(req.params.id)
		.then(contact => res.render(creatPath('edit'), {title, contact, fail}))
		.catch(error => console.log(error))
}
const postEdit = (req, res) =>{
	const {name, phone} = req.body
	if(isValid(name, phone)){
		fail = false
		Contact
			.findByIdAndUpdate(req.params.id, {name, phone})
			.then(() => {res.redirect('/contacts')})
			.catch(error => console.log(error))
	} else {
		isRedir = true
		res.redirect(`/edit/${req.params.id}`)
	}
}

module.exports = {
	getContacts,
	deleteContacts,
	postCreate,
	getCreate,
	getEdit,
	postEdit
}