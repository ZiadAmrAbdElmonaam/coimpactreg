import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface Contact {
  name: string;
  email: string;
}

interface ProjectData {
  participation: string;
  patients: string;
  dicomShared: string;
}

interface RegistryFormData {
  date: string;
  centerName: string;
  centerAddress: string;
  contacts: Contact[];
  projects: {
    [key: string]: ProjectData;
  };
  dataTransferAgreement: string;
  references: string;
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const isRegistryForm = data.formType === 'registry'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER as string,
        pass: process.env.GMAIL_APP_PASSWORD as string,
      },
    })

    let mailOptions

    if (isRegistryForm) {
      const { formData } = data as { formData: RegistryFormData }
      mailOptions = {
        from: process.env.GMAIL_USER as string,
        to: 'Mohamed.shelan@insel.ch, Constantinos.Zamboglou@goc.com.cy',
        subject: `New Registry Application from ${formData.centerName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #2563eb; margin-bottom: 25px; text-align: center; border-bottom: 2px solid #e5e7eb; padding-bottom: 15px;">New Registry Application</h2>
              
              <div style="margin-bottom: 25px; background-color: #f3f4f6; padding: 20px; border-radius: 6px;">
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Date:</strong> ${formData.date}</p>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Center Name:</strong> ${formData.centerName}</p>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Center Address:</strong> ${formData.centerAddress}</p>
              </div>
              
              <div style="margin-bottom: 25px;">
                <h3 style="color: #2563eb; margin-bottom: 15px;">Contact Persons</h3>
                <div style="display: grid; gap: 15px;">
                  ${formData.contacts.map((contact: Contact, index: number) => `
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px;">
                      <p style="margin: 5px 0;"><strong style="color: #4b5563;">Contact ${index + 1}</strong></p>
                      <p style="margin: 5px 0;"><strong style="color: #4b5563;">Name:</strong> ${contact.name}</p>
                      <p style="margin: 5px 0;"><strong style="color: #4b5563;">Email:</strong> ${contact.email}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div style="margin-bottom: 25px;">
                <h3 style="color: #2563eb; margin-bottom: 15px;">Projects</h3>
                <div style="display: grid; gap: 15px;">
                  ${Object.entries(formData.projects).map(([project, data]: [string, ProjectData]) => `
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px;">
                      <h4 style="color: #4b5563; margin: 0 0 10px 0;">${project.toUpperCase()}</h4>
                      <p style="margin: 5px 0;"><strong style="color: #4b5563;">Participation:</strong> ${data.participation}</p>
                      ${data.participation === 'yes' ? `<p style="margin: 5px 0;"><strong style="color: #4b5563;">Number of Patients:</strong> ${data.patients}</p>` : ''}
                      <p style="margin: 5px 0;"><strong style="color: #4b5563;">DICOM Shared:</strong> ${data.dicomShared}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div style="margin-bottom: 25px; background-color: #f3f4f6; padding: 20px; border-radius: 6px;">
                <h3 style="color: #2563eb; margin-bottom: 15px;">Data Transfer Agreement</h3>
                <p style="margin: 0; line-height: 1.6;">${formData.dataTransferAgreement}</p>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px;">
                <h3 style="color: #2563eb; margin-bottom: 15px;">References</h3>
                <p style="margin: 0; line-height: 1.6;">${formData.references}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
              <p>This is an automated email from the Co-IMPACT Registry System</p>
            </div>
          </div>
        `,
      }
    } else {
      const { name, email, institution, message } = data
      mailOptions = {
        from: process.env.GMAIL_USER as string,
        to: 'Mohamed.shelan@insel.ch, Constantinos.Zamboglou@goc.com.cy',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #2563eb; margin-bottom: 25px; text-align: center; border-bottom: 2px solid #e5e7eb; padding-bottom: 15px;">New Contact Form Submission</h2>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Email:</strong> ${email}</p>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Institution:</strong> ${institution}</p>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px;">
                <h3 style="color: #2563eb; margin-bottom: 15px;">Message</h3>
                <p style="margin: 0; line-height: 1.6;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
              <p>This is an automated email from the Co-IMPACT Registry System</p>
            </div>
          </div>
        `,
      }
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 