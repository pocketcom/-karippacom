
import React from "react"
import Image from "../components/image"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const PostTop=(props)=>(
    <>
    <div className="postcom">
    <div className="PostTitle">
    <ArrowRightIcon
    fontSize="large"
    color="Primary"/>
    <p>{props.postDate}</p>
    </div>
    <h1 className="posttoph1">{props.postTitle}</h1>
    </div>
    <Image filename={props.filename} alt={props.alt}/>
    </>
)


export default PostTop