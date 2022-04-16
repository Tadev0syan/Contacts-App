const express =require('express')
const { getContacts, deleteContacts, postCreate, getCreate, getEdit , postEdit} = require('../controllers/contact-controller')

const router = express.Router()

router.get('/', (req, res) => {
	res.redirect('/contacts')
})
router.get('/contacts', getContacts)

router.get('/create', getCreate)
router.post('/create', postCreate)

router.delete('/contacts/:id', deleteContacts)

router.get('/edit/:id',getEdit)
router.post('/edit/:id', postEdit)

module.exports = router