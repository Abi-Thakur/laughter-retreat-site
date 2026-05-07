import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      country,
      message,
      retreatTitle,
    } = body;

    if (!firstName || !email) {
      return Response.json({
        success: false,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Retreat Enquiry - ${retreatTitle}`,

      html: `
        <h2>New Retreat Enquiry</h2>

        <p><strong>Retreat:</strong> ${retreatTitle}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
    });
  }
}