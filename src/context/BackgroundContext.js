import { createContext, useContext, useEffect, useState } from 'react';

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
    const [backgroundColor, setBackgroundColor] = useState('#4a4e69');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            setBackgroundColor('#4a4e69');
        } else {
            setBackgroundColor('#FFFFFF');
        }
    }, [darkMode]);

    return (
        <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor, setDarkMode }}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground() {
    return useContext(BackgroundContext);
}
