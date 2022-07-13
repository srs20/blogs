import React from "react";
import { MasonryPost } from "./";



const PostMasonary = ({posts, columns, tagsOnTop}) =>{
    return(
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns},1fr) minmax(275px, 1fr)`}}>
            {posts.map((post,index) => 
                <MasonryPost {...{post,index,tagsOnTop,key: index}} />
            )}
        </section>
    );
}

export default PostMasonary;