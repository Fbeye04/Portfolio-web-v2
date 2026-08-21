import transporter from "../config/nodemailer.js";

export const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Pesan dari web portfolio: ${subject}`,
    text: `Dari: ${name} (${email})\n\nPesan:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email successfully sent!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({
      success: false,
      message: "The server failed to send the email.",
    });
  }
};
