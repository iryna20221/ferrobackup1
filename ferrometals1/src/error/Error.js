import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'

const Error = ({data}) => {
    return (
        <div className='Error-container'>            
            <p>{data.errorMessage}</p>
            <Link to={data.menuPaths.home}>{data.returnMessage}</Link>
        </div>
    )
}

export default Error;