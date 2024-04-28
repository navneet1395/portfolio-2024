"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  console.log("send email function working", formData);
  const senderName = formData.name;
  const senderEmail = formData.email;
  const senderPhone = formData.phone || "";
  const senderDescription = formData.message || "";
  console.log(senderEmail, senderDescription, senderPhone, senderName);

  try {
    const data = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "nnvkg107@gmail.com",
        subject: "Message from Portfolio Website",
        reply_to: senderEmail as string,
        text: `${senderName} reached you out`,
        html: `<div>
        <h1> Thank you for reaching out , ${senderName}</h1>
    <p> Navneet will reach you out as soon as possible.</p>
    <strong>${senderDescription}</strong>
    <address>
    <link href="mailto:${senderEmail}">${senderEmail}</link><br/>
    <link href="tel:${senderPhone}">${senderPhone}</link>
    </address>
        </div>`,
      });
    
      

    return "Your message was sent";
  } catch (error) {
    return "Something Went Wrong ";
  }
  
};
