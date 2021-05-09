import React from 'react'
import { useParams } from 'react-router'
function ActiveCoinPage() {
    // @ts-ignore
    let  { id } = useParams();
    
    return (
        <div>ID: {id}</div>
    )
}

export default ActiveCoinPage
