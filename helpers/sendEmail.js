const nodemailer = require('nodemailer')
require('dotenv').config

const { META_LOGIN, META_PASSWORD} = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "mariankravets004@meta.ua",
    pass: "Mario15062004!@#",
  },
};

const transport = nodemailer.createTransport(nodemailerConfig)

const sendEmail = async (data) => {
    const email = { ...data, from: "mariankravets004@meta.ua" };
    await transport.sendMail(email)
    return true
}

module.exports = sendEmail