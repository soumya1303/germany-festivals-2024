import PostItem from "./PostItem";
import classes from "./PostGrid.module.css";

const PostsGrid=(props)=>{

    const {posts} = props;

    return(<ul className={classes.grid}>{
        posts.map((p)=>{
            return (<PostItem key={p.postId} postItem={p}/>)
        })
    }</ul>)

}

export default PostsGrid