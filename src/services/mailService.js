const transporter = require("../config/mail.js");

const sendReferralEmail = async (referrerName, refereeEmail, refereeName, courseInterest) => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: refereeEmail,
        subject: "You have been referred!",
        text: `Hi ${refereeName},\n\n${referrerName} has referred you to our course: ${courseInterest}.\n\nRegards,\nAccredian Team`,
    }

    await transporter.sendMail(mailOptions, (error)=>{
        if(error){
            console.error(error);
        }
    });
}

module.exports = {
    sendReferralEmail
}
