import Image from "next/image";
import Markdown from "react-markdown";
import classes from "./PostHeader.module.css";

const PostHeader=({title, image})=>{
    return(<header className={classes.header}>
        <h1>{title}</h1><br></br>
        <Image src={image} alt={title} width={100} height={100} className={classes.img}/>
    </header>)
}

export default PostHeader;