const prisma = require("../config/database.js");
const mailService = require("../services/mailService.js");

const createReferral = async (req, res) => {
    const { referrerName, referrerEmail, refereeName, refereeEmail, courseInterested, howDidYouHear, referralCode, message } = req.body;

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !courseInterested) {
        return res.status(400).send('All fields are required');
    }

    try {
        const newReferral = await prisma.referral.create({
            data: {
                referrerName,
                referrerEmail,
                refereeName,
                refereeEmail,
                courseInterested,
                howDidYouHear,
                referralCode,
                message
            }
        });

        await mailService.sendReferralEmail(referrerName, refereeEmail, refereeName, courseInterested);

        res.status(201).json({
            statusCode: 201,
            message: "Success",
            data: {
                refereeName,
                courseInterested
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createReferral
}
