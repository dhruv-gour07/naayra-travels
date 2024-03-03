import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const {name,phone,passenger,startDestination,endDestination,date,time} = reqBody;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "dhruvvvv3031@gmail.com",
                pass: "hnbo qpxh usvs cmpc",
            },
        });
        const testResult = await transporter.verify();
        // if(testResult){
        //     console.log("Success in creating transporter");
        // }

        const mailOption = {
            from:"dhruvvvv3031@gmail.com",
            to:"dhruvvvv3031@gmail.com",
            html:
            `
            <p>Name is ${name}</p>
            <p>Phone number is ${phone}</p>
            <p>Total passenger is ${passenger}</p>
            <p>Starting destination is ${startDestination}</p>
            <p>Ending destination is ${endDestination}</p>
            <p>Journey date is ${date}</p>
            <p>Journey time is ${time}</p>
            `
        }

        const sendResult = await transporter.sendMail(mailOption);
        // if(sendResult){
        //     console.log("Email is been sent");
        // }
        return NextResponse.json({message:"Success in sending data"}, {status: 200});

    } catch (error) {
        
    }
}