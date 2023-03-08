import { useState } from 'react';

// Toast Library
import toast from 'react-hot-toast';

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
        toast.success(`Profile changed to ${profile.name}`, {
            icon: profile.icon,
        });
    }

    return {
        profiles,
        currentProfile,
        handleAddProfile,
        handleProfileChange,
    };
}

export default useProfiles;
