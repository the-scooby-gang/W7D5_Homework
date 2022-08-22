import React from 'react';

const GuardianDetail = ({guardian}) => {

    if(guardian){
        return(
            <div>
                <h3>{guardian.webTitle}</h3>
                <p>{guardian.sectionName}</p>
                <a href={guardian.webUrl}>Click here for full article</a>
            </div>
        )
    }
}

export default GuardianDetail;