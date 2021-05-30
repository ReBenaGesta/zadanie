export default function (req, res) {
	require('dotenv').config()
	let nodemailer = require('nodemailer')
	const PASSWORD = process.env.password
	const EMAIL = process.env.email
	const transporter = nodemailer.createTransport({ 
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: EMAIL,
			pass: PASSWORD,
		},
		secure: true,});
	console.log(req.body)

	const mailData = {
		from: req.body.email,
		to: EMAIL,
		subject: `Wiadomość od ${req.body.name}`,
		html: `<div><h2>${req.body.message}</h2></div>
		<section style="background-color: grey; border: 2px solid black">
		<div><h4> Dane: </h4></div>
		<div><h4> Imie: ${req.body.name}</h4></div>
		<div><h4> Email: ${req.body.email}</h4></div>
		<div><h4> Telefon: ${req.body.tel}</h4></div>
		</section>`
	}

	transporter.sendMail(mailData, function (err, info) {
		if(err)
			console.log(err)
		else
			console.log(info)
	})

	res.status(200)
  }