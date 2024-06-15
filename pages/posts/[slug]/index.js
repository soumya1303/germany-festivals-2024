import PostDetails from "@/components/posts/post-details/PostDetails";
import { useRouter } from "next/router";
import postData from "@/data";
import Head from "next/head";
import { Fragment } from "react";

const Post = ({post})=>{

    /*
    const router = useRouter();

    const slug = router.query.slug;

    if (!slug) {
        return (<p>Loading...</p>)
    }

    const post = postData.find((p)=>{
        return (p.slug===slug)
    })
    */
    return (<Fragment>
                <Head>
                    <title>{post.title}</title>
                    <meta name="description" content={post.summary}></meta>
                </Head>
                <PostDetails post={post}/>
            </Fragment>)
}

export default Post;

const getStaticPaths=()=>{

    //const slugArr = postData.map((p)=>{return p.slug})

    return ({
        fallback:false,
        paths: postData.map((post)=>{
            return({
                params:{
                    slug:post.slug
                }
            })
        })
    })

}

export {getStaticPaths}

const getStaticProps=(ctx)=>{

    const slug = ctx.params.slug;

    const post = postData.find((p)=>{return (p.slug===slug)});

    return ({
        props:{
            post:post
        }
    })

}

export {getStaticProps}