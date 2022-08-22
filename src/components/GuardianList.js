import React from 'react';
import ListItem from './ListItem';

const GuardianList = ({guardians, onGuardianClick}) => {
    
    const guardiansItems = guardians.map((guardian, index) => {
        return <ListItem guardian={guardian} key={index} onGuardianClick={onGuardianClick}/>
    })

    return(
        <div>
            <ul>
                {guardiansItems}
            </ul>
        </div>
    )
}

export default GuardianList;