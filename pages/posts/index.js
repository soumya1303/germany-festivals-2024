import AllPosts from "@/components/all-posts/AllPosts";
import postData from "@/data";
import Head from "next/head";
import { Fragment } from "react";


const Posts = ({posts})=>{

    return (<Fragment>
                <Head>
                    <title>All articles</title>
                    <meta name="description" content="List of all articles published in our website"></meta>
                </Head>
                <AllPosts posts={posts}/>
            </Fragment>)
}

export default Posts;

const getStaticProps=()=>{
    return({
        props:{
            posts:postData
        },
        revalidate:600,
        
    })
}

export {getStaticProps}