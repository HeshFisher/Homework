import React from 'react'
import './errorMessage.css';

export default function ErrorMessage(props) {
    const { message } = props;
  return (
      <div className='error-message'>
          <h2>Error: {message}</h2>
    </div>
  )
}
