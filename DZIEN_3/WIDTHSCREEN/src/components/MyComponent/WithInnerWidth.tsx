import {Component, useEffect, useState} from "react";

const withInnerWidth = (Component:any) => (props:any) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    
    const handleResize = () => {
        setInnerWidth(window.innerWidth)
    }
    
    useEffect(()=>{
        window.addEventListener('resize',handleResize)
    },[])
    return<Component {...props} innerWidth={innerWidth}/>
}
export default withInnerWidth 
