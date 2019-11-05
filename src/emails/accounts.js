const sendgrid = require('@sendgrid/mail');

const sendgridAPIKey = process.env.send_key
sendgrid.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) =>{
  sendgrid.send({
    to:email,
    from:'ipg_2016053@iiitm.ac.in',
    subject:'welcome to app',
    text: `welcome to app, ${name}.let us know how we find about us`
  })
}
const sendCancelEmail = (email,name) =>{
  sendgrid.send({
    to:email,
    from:'ipg_2016053@iiitm.ac.in',
    subject:'Good to se you fucked up',
    text: `Get the fuck out of here , ${name}.`
  })
}
module.exports={
  sendWelcomeEmail,
  sendCancelEmail
}
