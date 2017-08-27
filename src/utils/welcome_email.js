const nodemailer = require('nodemailer')
// const xoauth2 = require('xoauth2')
const config = require('./cred')

module.exports = (username, email) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: config.username,
      pass: config.password
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: '"Patrick Porche" <pporche87@gmail.com>',
    to: `${email}`,
    subject: 'Welcome to Pilgrimage',
    text: `Hello ${username}! Welcome to Pilgrimage. I built this site to help other
    sacred site adventurers connect and share their stories. Hope to see some posts
    from you soon!`
  }

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      return console.log('Error sending email')
    } else {
      console.log('Email sent to user')
      console.log('response===>', response)
    }
  })
}
