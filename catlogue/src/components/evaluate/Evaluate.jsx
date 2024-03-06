import React from 'react'
import './evaluate.css';
import {useLoaderData,useParams} from "react-router-dom"
import RankedData from '../RankedData/RankedData';

const Evaluate = () => {
    const {id}=useParams();
  return (
    <div className='evaluate-content'>
        <h1 className="gradient__text">Catalog Scoring</h1>
        <p>{id}</p>
        <RankedData/>
    </div>
  )
}

export default Evaluate