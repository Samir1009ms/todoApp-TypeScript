import React from 'react';
import {
    useDeletePostMutation,
    useGetDataQuery,
} from '../store/rtk-slice/serverApi';
import { Box, Button, Grid, Typography } from '@mui/material';

export default function TodoList() {
    const { data, isLoading, refetch } = useGetDataQuery();
    const [deletePost] = useDeletePostMutation();

    function handleDeletePost(id: number) {
        deletePost(id).unwrap();
        // refetch();
    }

    return (
        <Grid container spacing={2} flexDirection='column' rowGap="10px" sx={{ margin: 0, width: '100%' }}>
            {data &&
                data.map((item: any) => (
                    <Grid
                        key={item.id}
                        item
                        xs={12}
                        flexDirection='row'
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", width: '100%', padding: '15px', background: "#ff3333", borderRadius: '10px' }}>
                        <Typography variant="subtitle1" sx={{ width: '70%' }}>
                            {item.text}</Typography>
                        <Button onClick={() => handleDeletePost(item.id)}>Delete</Button>
                    </Grid>
                ))}
        </Grid>
    );
}
