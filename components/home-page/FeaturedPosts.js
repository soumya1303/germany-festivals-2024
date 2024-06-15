import PostsGrid from "../posts/PostsGrid";
import classes from "./FeaturedPosts.module.css";

const FeaturedPosts = ({featuredPosts})=>{
    
    return (<section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={featuredPosts}/>
    </section>
    )
}

export default FeaturedPosts;