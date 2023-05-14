import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
export default function LoadingTodoList() {
    return (
    <>
        <Placeholder animation="glow" className='text-white'>
            <Placeholder style={{ width: '60%' }} /> <br />
            <Placeholder style={{ width: '40%' }} /> <br />
            <Placeholder style={{ width: '25%' }} />
        </Placeholder>
    </>
  )
}