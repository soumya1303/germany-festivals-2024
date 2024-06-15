import { Fragment } from "react";
import classes from "./AllPosts.module.css";
import PostsGrid from "../posts/PostsGrid";
const AllPosts=(props)=>{

    const {posts} = props;
    return(<section className={classes.posts}>
        <h1>All posts</h1>
        <PostsGrid posts={posts} />
    </section>)

}

export default AllPosts;