import React, { Fragment } from 'react'
import loading from '../assets/giphy.gif'

export const Loading = () => {
  return (
    <div>
        <Fragment>
            <img src={loading} alt="..Loading" style={{width: '500px', margin: 'auto' , display: 'block'}}/>
        </Fragment>
    </div>
  )
}
