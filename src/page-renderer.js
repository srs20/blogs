import React from "react";
import {useParams,useMatch} from 'react-router-dom';


const generatePage = page =>{
    console.log(page);
    const component = () => require(`./pages/${page}`).default  

    try{
        return React.createElement(component());
    }
    catch (err){
        console.warn(err);
        return React.createElement(() => 404);
    }
}


const PageRenderer = () =>{
    const {page} = useParams();
    console.log(page);

    const match = useMatch(`/${page}`);
  
    return match ? generatePage(page) : React.createElement(() => 404);
};


export default PageRenderer;