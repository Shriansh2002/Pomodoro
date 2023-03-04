import { useEffect, useState } from 'react';

const INTERVAL_DELAY_IN_MS = 1000;

function useTimer(durationInSeconds) {
    const [time, setTime] = useState(durationInSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const [isReset, setIsReset] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning && !isReset && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, INTERVAL_DELAY_IN_MS);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, isReset, time]);

    const startTimer = () => {
        setIsRunning(true);
        setIsReset(false);
    };

    const stopTimer = () => setIsRunning(false);

    const resetTimer = () => {
        setTime(durationInSeconds);
        setIsRunning(false);
        setIsReset(true);
    };

    return { time, isRunning, isReset, startTimer, stopTimer, resetTimer };
}

export default useTimer;