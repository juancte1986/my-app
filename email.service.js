const nodemailer = require ('nodemailer');
const environments = require ('./environments.json');

module.exports.sendMail = (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: environments.smtp,
	  port: environments.smtpPort,
	  secure: true,
	  service: environments.emailService,
    auth: environments.auth
  });
  transporter.sendMail({
    from: req.body.name,
	  to: environments.auth.user,
	  subject: environments.emailSubject,
	  text: req.body.message,
    html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
  }, (err, resp) => {
    if (err) {
      next(err);
    } else {
      res.json({status:'ok'});
    }
  });
}