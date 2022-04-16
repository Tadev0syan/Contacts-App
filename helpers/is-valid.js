function isValid(name, phone){
	const regName = /^[a-zA-Z ]{2,30}$/
	const regPhone = /^(\+374(-| )\d{2}|(0\d{2}))((-| )\d{2}){3}/
	const nameValid = regName.test(name)
	const phoneValid = regPhone.test(phone)
	return (nameValid && phoneValid)
}

module.exports = isValid