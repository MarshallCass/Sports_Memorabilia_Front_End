import React from 'react';
import 'react-router-dom';

const Logout = () => {
    localStorage.removeItem('token');
    

    return null
}


export default Logout

