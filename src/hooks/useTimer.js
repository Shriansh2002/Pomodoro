import { useEffect, useState } from 'react';
import { useBackground } from '../context/BackgroundContext';

const INTERVAL_DELAY_IN_MS = 1000;

function useTimer(durationInSeconds) {
    const [time, setTime] = useState(durationInSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const { setBackgroundColor } = useBackground();

    useEffect(() => {
        let interval = null;
        if (isRunning && !isReset) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(interval);
                        console.log('Timer is done! 🎉');
                        return prevTime;
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, isReset]);

    const startTimer = () => {
        setIsRunning(true);
        setIsReset(false);
        setBackgroundColor('#52b788');
    };

    const stopTimer = () => {
        setIsRunning(false);
        setBackgroundColor('#ffa200');
    };

    const resetTimer = () => {
        setTime(durationInSeconds);
        setIsRunning(false);
        setIsReset(true);
        setBackgroundColor('#4a4e69');
    };

    return { time, isRunning, isReset, startTimer, stopTimer, resetTimer };
}

export default useTimer;