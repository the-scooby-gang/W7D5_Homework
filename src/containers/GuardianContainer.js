import React, {useState, useEffect} from 'react';
import GuardianList from '../components/GuardianList';
import GuardianDetail from '../components/GuardianDetail'

const GuardianContainer = () => {
    const [guardians, setGuardians] = useState ([]);
    const [selectedGuardian, setSelectedGuardian] = useState(null);

    useEffect (() => {
        getGuardians();
    }, [])

    const onGuardianClick = (guardian) => {
        setSelectedGuardian(guardian)
    }

    const getGuardians = function(){
        fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
        .then(res => res.json())
        .then(guardians => setGuardians(guardians.response.results))
        .catch(err => console.error);
        // .then(guardians => processData(guardians))
    }

    return (
        <div className="main-container">
            <GuardianList guardians={guardians} onGuardianClick={onGuardianClick}/>
            <GuardianDetail guardian={selectedGuardian}/>
        </div>
    )
}

export default GuardianContainer