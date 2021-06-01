require("dotenv").config();
const nodemailer = require("nodemailer");

export default async function (req, res) {

  if (req.method === 'POST') {

    const PASSWORD = process.env.PASSWORD;
    const EMAIL = process.env.EMAIL;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: req.body.email,
      to: EMAIL,
      subject: `Wiadomość od ${req.body.name}`,
      html: `<div><h2>${req.body.msg}</h2></div>
            <section style="background-color: grey; border: 2px solid black">
              <div><h4> Dane: </h4></div>
              <div><h4> Imie: ${req.body.name}</h4></div>
              <div><h4> Email: ${req.body.email}</h4></div>
              <div><h4> Telefon: ${req.body.tel}</h4></div>
            </section>`,
            };

    transporter.sendMail(mailData, (err) => {
      if (err) res.status(500).json(err).end();
      else res.status(200).json(mailData).end();
    });

  } else {
    return res.status(405).end();
  }
}
