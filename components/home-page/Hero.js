import Image from "next/image";
import classes from "./Hero.module.css";
import profileImg from "@/public/images/sg.jpeg"

const Hero = ()=>{
    return(<section className={classes.hero}>
        <div className={classes.image}>
            <Image src={profileImg} alt="max" height={300} width={300}></Image>
        </div>
        <h1>Hi I am Soumya</h1>
        <p>A Computer engineering professional specializing in programming. Adept at identifying solutions to complex technical problems</p>
    </section>)
}

export default Hero;