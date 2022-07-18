import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament } from './redux/createSlice';
import { getPost } from './redux/extraReducer'

const Root = () => {
    // const counter = useSelector((store) => store.counter);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()

    useEffect(()=>{
         dispatch(getPost());
    }, [])
  return (
    <div style={{ width:'100%',display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
       {
        user.value.map((v)=>{
            return(
                <h1 key={v.id}>{v.title}</h1>
            )
        })
       }
    </div>
  )
}

export default Root