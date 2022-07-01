
///////////////////////////////
//going unused
/////////////////////////



import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({setCurrentId,currentId}) => {
    const [postData, setPostData] = useState({  creator: '', title: '', desc: '', supply: '', selectedFile: '', mintInfo:'' });
    //const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const posts = useSelector((state) => currentId? state.posts.find((p)=>p._id===currentId):null);

    useEffect(()=>{
        if (posts) setPostData(posts)
    },[posts])

    const clear = () => {
        setCurrentId(null)
        setPostData({ creator: '', title: '', desc: '', supply: '', selectedFile: '', mintInfo:'' });
    };
/*title: String,
desc: String,
    creator: String,
    selectedFile: String,
    supply: {
        type: Number,
        default: 0,
    },
    listedDate: {
        type: Date,
        default: new Date(),
    },
    mintInfo: String
}*/
    const handleSubmit = async (e) => {
       e.preventDefault();

       if (currentId){
        console.log(postData)
        dispatch(updatePost(currentId,postData))
    }
    else{dispatch(createPost(postData));}
    clear()

        
        

        
    };

//{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId?"editing a memory":"making a memory"}
                </Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth 
                value={postData.creator} 
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth 
                value={postData.title} 
                onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

                <TextField 
                name="mintInfo" 
                variant="outlined" 
                label="mintInfo" 
                fullWidth 
                value={postData.mintInfo} 
                onChange={(e) => setPostData({ ...postData, mintInfo: e.target.value })} />

                <TextField 
                name="desc" 
                variant="outlined" 
                label="desc" 
                fullWidth 
                multiline 
                minRows={4} 
                value={postData.desc} 
                onChange={(e) => setPostData({ ...postData, desc: e.target.value })} />

                <TextField 
                name="supply" 
                variant="outlined" 
                label="supply" 
                fullWidth 
                value={postData.supply} 
                onChange={(e) => setPostData({ ...postData, supply:parseInt(e.target.value) })} />

                <div className={classes.fileInput}>
                <FileBase 
                type="file" 
                multiple={false} 
                onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>

                <Button 
                className={classes.buttonSubmit} 
                variant="contained" 
                color="primary" 
                size="large" 
                type="submit" 
                fullWidth>Submit</Button>

                <Button 
                variant="contained" 
                color="secondary" 
                size="small" 
                onClick={clear} 
                fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
