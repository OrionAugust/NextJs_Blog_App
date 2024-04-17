import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-post";
import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-utils";
 
export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>San</title>
        <meta name="description" content="We post about programming"></meta>
      </Head>
      <Hero />
      <FeaturedPost posts={props?.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    }
    // ,
    // validate:120
  };
}
