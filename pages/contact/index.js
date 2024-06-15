import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import { Fragment } from "react";
const Contact = ()=>{

    const submitContact=async (data)=>{

        const {name, email, comment} =data;

        try {
            const resp= await fetch("http://localhost:3000/api/postComment", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    comment:comment
                })
            })

            if (!resp.ok){
                throw new Error("Error in API response")
            }

            const data = await resp.json();

            if (!data){
                throw new Error("Error in API response")
            }
            console.log(data);

        } catch (error) {
            console.log(error);

        }

    }

    return (<Fragment>
                <Head>
                    <title>Contact us</title>
                </Head>
                <ContactForm onSubmitBtn={submitContact}/>
            </Fragment>)
}

export default Contact;