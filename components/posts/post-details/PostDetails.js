import ReactMarkdown from "react-markdown";
import classes from "./PostDetail.module.css";
import PostHeader from "./PostHeader";

const PostDetails = ({post})=>{



    return(<article className={classes.content}>
        <PostHeader title={post.title} image={post.image}/>
        <p>{post.content}</p>
    </article>)

}

export default PostDetails;