import React, { useEffect } from 'react';

import './App.scss';
import { Stack, Typography, Box } from '@mui/material';
// import { useCreatePostMutation, useDeletePostMutation, useGetDataQuery } from './store/rtk-slice/serverApi';
// import { nanoid } from 'nanoid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  // const { data, isLoading, refetch } = useGetDataQuery()
  // console.log(data);
  // console.log(isLoading);

  // const [createPost] = useCreatePostMutation()

  // function handleCreatePost(e: any) {
  //   e.preventDefault()
  //   const id = nanoid()
  //   createPost({ text: e.target.title.value, id: id })

  // }

  // const [deletePost] = useDeletePostMutation()
  // function handleDeletePost(id: number) {
  //   deletePost(id).unwrap()
  //   // refetch();
  // }


  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: '100vh', width: '100%' }} rowGap='20px'>
      <Typography variant='h3'>
        Todo List
      </Typography>
      <Box component='form' sx={{ width: '50%' }}>
        <TodoInput />
      </Box>
      <Box sx={{ width: '50%', background: "#ff8303", borderRadius: '10px', padding: '15px' }}>
        <TodoList />
      </Box>
    </Stack>
  );
}

export default App;
