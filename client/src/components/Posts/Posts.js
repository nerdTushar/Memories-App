import React from "react";
import Post from './Post/Post';
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyle from './styles';
const Posts = ({setCurrentId})=>{
    const classes = useStyle();
    const posts = useSelector((state)=> state.posts);
    if(posts.length === 0)
    {
        return <CircularProgress/>
    }
    return (
            <Grid className={classes.container} container alignitem = 'stretch' spacing={3}>
                {posts.map((post)=>(
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post = {post} setCurrentId = {setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
}
export default Posts;