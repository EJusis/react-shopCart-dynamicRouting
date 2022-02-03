import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className='ToolbarWrap d-flex'>
            <h3><Link to='/'>All products</Link></h3>
            <h3><Link to='/create'>Create product</Link></h3>
            <h3><Link to='/cart'>Shopping cart</Link></h3>
        </div>
    );
};

export default Toolbar;