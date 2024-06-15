
import Link from "next/link";
import Image from "next/image";
import classes from "./PostItem";

const PostItem = (props)=>{

    const {postItem:post} = props;
    
    return(<li className={classes.post}>
                <div className={classes.image}>
                    <Image src={post.image} alt="" height={200} width={300} layout="responsive"/>
                </div>
                <div className={classes.content}>
                <Link href={`/posts/${post.slug}`} legacyBehavior >
                    <a>    
                        <h3>{post.title}</h3>
                    </a>
                </Link>
                    <time>{post.date}</time>
                    <p>{post.summary}</p>
                </div>
            
            </li>)

}

export default PostItem;