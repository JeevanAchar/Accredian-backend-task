const prisma = require("../config/database.js");
const mailService = require("../services/mailService.js");

const createReferral = async (req, res) => {
    const { referrerName, referrerEmail, refereeName, refereeEmail, courseInterest, referralSource } = req.body;

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !courseInterest || !referralSource) {
        return res.status(400).send('All fields are required');
    }

    try {
        const newReferral = await prisma.referral.create({
            data: {
                referrerName,
                referrerEmail,
                refereeName,
                refereeEmail,
                courseInterest,
                referralSource
            }
        });

        await mailService.sendReferralEmail(referrerName, refereeEmail, refereeName, courseInterest);

        res.status(201).json(newReferral);
    } catch (error) {
        console.log({ referrerName, referrerEmail, refereeName, refereeEmail, courseInterest, referralSource })
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createReferral
}
