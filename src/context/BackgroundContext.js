import { createContext, useContext, useEffect, useState } from 'react';

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
    const [backgroundColor, setBackgroundColor] = useState('#AFBFC0');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            setBackgroundColor('#0B132B');
        } else {
            setBackgroundColor('#AFBFC0');
        }
    }, [darkMode]);

    return (
        <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor, darkMode, setDarkMode }}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground() {
    return useContext(BackgroundContext);
}
