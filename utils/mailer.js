const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.post("/send-email", async (req, res) => {
  const { firstname, lastname, email, phone, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "antho.src34@gmail.com",
      pass: "mtjq rsty osjt urjr",
    },
  });

  let mailOptions = {
    from: "antho.src34@gmail.com",
    to: "antho.src34@gmail.com",
    subject: subject,
    text: `Email: ${email} | numéro de téléphone: ${phone}\n
    Bonjour ${firstname} ${lastname}\n
    ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("E-mail envoyé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    res.status(500).send("Une erreur est survenue lors de l'envoi de l'e-mail");
  }
});

app.listen(3001, () => {
  console.log("Serveur backend en cours d'écoute sur le port 3001");
});
