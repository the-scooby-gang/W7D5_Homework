import React from 'react';
import './ListItem.css';

const ListItem = ({guardian, onGuardianClick}) =>{

    const handleClick = () => {
        onGuardianClick(guardian);
    }

    return <li onClick={handleClick}>Title: {guardian.webTitle}</li>
}

export default ListItem;