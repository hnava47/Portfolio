const sgMail = require('@sendgrid/mail');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = {
    sendMessage: async (req, res) => {
        const { email, firstName, lastName, message } = req.body;
        const smsMsg = `You have received a portfolio contact request from ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`;
        const emailMsg = {
            to: 'hector.r.nava44@gmail.com',
            replyTo: 'me@noreply.com',
            from: 'hector.r.nava35@gmail.com',
            subject: `Portfolio Contact: ${firstName} ${lastName}`,
            html: `<p>Received contact request from ${firstName} ${lastName} with the following message:<ul><li>${message}</li></ul></p></br><p>Respond back to them at ${email}</p>`
        };

        if (!email || !firstName || !lastName || !message) {
            res.status(400).json({ message: 'Email, first name, last name, and message are all required' })
        }

        try {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            await sgMail.send(emailMsg);

            await client.messages.create({body: smsMsg, from: '+15674052889', to: '+16507886439'});

            res.status(200).json({ message: 'Messages sent successfully' });
        } catch (error) {
            res.json(error);
        }
    }
};
