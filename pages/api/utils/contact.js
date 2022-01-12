const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs

    // Scrape the form elements from the body object
    const { email, sender, message } = req.body

    const msg = {
        to: process.env.CONTACT_EMAIL,
        from: 'hello@samhuckaby.com',
        subject: 'SamHuckaby.com Contact Form',
        text: 'You have been contacted by ' + sender + ' <' + email + '>. Message: "' + message + '"',
        html: '<p><strong>You have been contacted by ' + sender + ' (' + email + ')</strong></p><p>Message:</p><p>' + message + '</p>',
    };

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent');
            res.send(200);
        })
        .catch((error) => {
            console.error(error)
        });
}