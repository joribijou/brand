// import nodemailer from 'nodemailer'
// const SendEmail=async(alluserInfo,newsData)=>{

//     let transporter=nodemailer.createTransport({
//         host:"smtp.gmail.com",
//         port:465,
//         secure:true,
//         auth:{
//             user:process.env.EMAIL,
//             pass:process.env.PASSWORD,
//         },
    
// });
// let mailOptions={
//     from:process.env.EMAIL,
//     to:alluserInfo.email,
//     subject:`${alluserInfo.firstName}new post has been posted`,
//     html:`<p>Dear,<b>${alluserInfo.firstName}${alluserInfo.lastName}</b></p><br/><br/> <p>new post <b>${newsData,newsMainTitle}<?b></p><br/><br/><p>Click the link <`
// }
// }