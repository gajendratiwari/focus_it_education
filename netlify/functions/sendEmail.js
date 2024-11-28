const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  console.log("Event:", event);

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  const { name, email, phone, subject, message } = JSON.parse(event.body);

  // Ensure phone number is included
  if (!phone) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Phone number is required.",
      }),
    };
  }

  const emailMessage = {
    to: process.env.EMAIL_TO, // Replace with your email
    from: process.env.EMAIL_FROM,
    subject: `New Contact Form Submission: ${subject || "No Subject"}`,
    text: `You received a new message from your website contact form:\n\n
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Subject: ${subject || "No Subject"}\n
      Message: ${message}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await sgMail.send(emailMessage);

    const confirmationMessage = {
      to: email,
      from: process.env.EMAIL_TO, // Replace with your SendGrid authorized email
      subject: "Thank you for contacting us!",
      text: `Dear ${name},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nBest regards,\nYour Company`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>
        <p>Best regards,</p>
        <p>Your Company</p>
      `,
    };

    await sgMail.send(confirmationMessage);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Email sent successfully." }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Failed to send email. Please try again later.",
        error: error.response ? error.response.body : error.message,
      }),
    };
  }
};
