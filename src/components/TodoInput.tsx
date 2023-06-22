import React from 'react'
import { Box, Button, Grid, Typography, TextField } from '@mui/material';
import { create } from 'domain';
import { useCreatePostMutation } from '../store/rtk-slice/serverApi';
import { nanoid } from 'nanoid';
import { useState } from 'react';


export default function TodoInput() {

    const [createPost] = useCreatePostMutation()
    const [text, setText] = useState<any>()
    function handleCreatePost() {
        const id = nanoid()
        createPost({ text: text, id: id })
        setText('')
    }
    return (
        <Grid container alignItems='center' justifyContent='center' spacing={4}>
            <Grid item>
                <TextField onChange={(e: any) => setText((e.target.value.trimStart()))} value={text} id="standard-basic" label="Standard" variant="standard" />
            </Grid>
            <Grid item>
                <Button disabled={!text} onClick={handleCreatePost} variant="contained">Add</Button>
            </Grid>
        </Grid>
    )
}
