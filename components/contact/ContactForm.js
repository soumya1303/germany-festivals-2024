import { useRef } from "react";
import classes from "./ContactForm.module.css";


const ContactForm=({onSubmitBtn})=>{
    
    const userName = useRef();
    const userEmail=useRef();
    const userComment=useRef();

    const handleClick=(evt)=>{

        evt.preventDefault();

        const data={
            name:userName.current.value,
            email:userEmail.current.value,
            comment:userComment.current.value
        }

        onSubmitBtn(data);

    }
    
    return(<section className={classes.contact} onSubmit={handleClick}>
        <h1>How can I help you ?</h1>
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="userEmail">Your email</label>
                    <input type="email" name="email" id="userEmail" required ref={userEmail}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="userName">Your Name</label>
                    <input type="text" id="userName" name="name" ref={userName}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="userComment">Your comment</label>
                    <textarea rows="5" cols="10" id="userComment" name="comment" ref={userComment}></textarea>
                </div>
            </div>
            <div className={classes.action}>
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>)
}

export default ContactForm;