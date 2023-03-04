import { useState } from 'react';

function useProfiles(defaultProfiles) {
    const [profiles, setProfiles] = useState(defaultProfiles);
    const [currentProfile, setCurrentProfile] = useState(defaultProfiles[0]);

    function handleAddProfile(name, icon, duration) {
        if (profiles.length >= 5) return;

        if (name && icon && duration)
            setProfiles((prevProfiles) => [...prevProfiles, { name, icon, duration },]);
    }

    function handleProfileChange(profile) {
        setCurrentProfile(profile);
    }

    return {
        profiles,
        currentProfile,
        handleAddProfile,
        handleProfileChange,
    };
}

export default useProfiles;
