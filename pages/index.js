import Hero from "@/components/home-page/Hero";
import postData from "@/data";
import Head from "next/head";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";

import { Fragment } from "react";

//const featuredPosts=postData.filter((p)=>{return (p.isFeatured===true)})

const Home = ({featuredPosts})=>{
  return (<Fragment>
    <Head >
      <title>Featured articles</title>
      <meta name="description" content="List of our most popular articles"></meta>
    </Head>
    <Hero />
    <FeaturedPosts featuredPosts={featuredPosts}/>
  </Fragment>)
}

export default Home;

const getStaticProps=(context)=>{

  const featuredPosts=postData.filter((p)=>{return (p.isFeatured===true)});

  return({
    props:{
      featuredPosts:featuredPosts
    },
    revalidate:600
  })

}

export {getStaticProps}