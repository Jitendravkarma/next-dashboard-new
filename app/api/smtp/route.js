import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { smtp } = await request.json();

    const transporter = nodemailer.createTransport({
      host: smtp.out_server,
      port: smtp.out_port,
      secure: smtp.out_port === 465,
      auth: {
        user: smtp.username,
        pass: smtp.password,
      },
    });

    // This checks the SMTP server and credentials
    await transporter.verify();

    return new Response(JSON.stringify({ success: true, message: 'SMTP settings are valid.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    // console.error('SMTP verify error:', err);
    return new Response(JSON.stringify({ success: false, error: 'SMTP verification failed.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { smtp } = await request.json();

//     const transporter = nodemailer.createTransport({
//       host: smtp.out_server, // your SMTP host
//       port: smtp.out_port, // or 465
//       secure: smtp.out_port === 465 ? true : false, // true for 465, false for 587
//       auth: {
//         user: smtp.username,
//         pass: smtp.password,
//       },
//     });

//     // Verify connection
//     await transporter.verify();
    
//     const info = await transporter.sendMail({
//       from: `"Test" ${smtp.username}`,
//       to: "xonefag197@bocapies.com",
//       subject: 'SMTP Test from Next.js 14',
//       text: 'Hello! This is a test email sent from a Next.js 14 App Router project.',
//     });

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//     });
//   } catch (err) {
//     return new Response(JSON.stringify({ success: false }), {
//       status: 500,
//     });
//   }
// }
