import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
    const [backgroundColor, setBackgroundColor] = useState('#4a4e69');
    return (
        <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground() {
    return useContext(BackgroundContext);
}
