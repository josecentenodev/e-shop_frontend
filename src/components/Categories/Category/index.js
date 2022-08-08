import React from 'react'
import { useParams } from "react-router-dom";

export default function Category() {
  let params = useParams();
  return (
    <h1 className=' text-2xl'>{params.id}</h1>
  )
}
