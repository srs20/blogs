import React from "react";
import trending from '../assets/mocks/trending';
import { MasonryPost, PostMasonary } from "../components/common";

import featured from '../assets/mocks/featured';

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0:{
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1:{
        height: '300px'
    },
    3:{
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}

const mergeStyles = (posts, config) =>{
    posts.forEach((post, index) => {
        post.style = config[index];
    });
}

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

const home = () =>{
    return(
        <section className="container home">
            <div className="row">
                <h1>Featured Post</h1>
                <section className="featured-posts-container">
                    <PostMasonary posts={featured} columns={1} tagsOnTop={true} />
                    <MasonryPost post={lastFeatured} tagsOnTop={true} />
                </section>
                <h1>Trending Post</h1>
                <PostMasonary posts={trending} columns={2} />
            </div>
        </section>
    );
};

export default home;