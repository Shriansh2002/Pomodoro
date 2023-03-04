// ReactContext
import { useBackground } from '@/context/BackgroundContext';

// Hooks
import useTimer from '@/hooks/useTimer';
import { useEffect, useState } from 'react';

// icons
import { FaUserAlt, FaSuperpowers } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import ButtonsComponent from './ButtonsComponent';

// Components
import ProfilesComponent from './ProfilesComponent';
import TimerStateComponent from './TimerStateComponent';

function Pomodoro() {
	const profiles = [
		{ name: 'Default', icon: <FaSuperpowers />, duration: 25 },
		{ name: 'Personal', icon: <FaUserAlt />, duration: 10 },
		{ name: 'Work', icon: <MdOutlineWork />, duration: 45 },
	];
	const [currentProfile, setCurrentProfile] = useState(profiles[0]);

	const {
		minutes,
		seconds,
		isRunning,
		isReset,
		startTimer,
		stopTimer,
		resetTimer,
	} = useTimer(currentProfile.duration * 60);

	function handleProfileChange(profile) {
		setCurrentProfile(profile);
	}
	const { backgroundColor } = useBackground();

	useEffect(() => {
		resetTimer();
	}, [currentProfile]);

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="min-h-screen py-36 items-center justify-center"
		>
			<div className="max-w-md mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
				<h1 className="text-4xl font-bold text-center">
					Pomodoro App 🍅
				</h1>

				<div className="flex items-center justify-center text-xl font-bold my-4 text-blue-500 gap-1">
					<p>{currentProfile.name} Profile</p>
					{currentProfile.icon}
				</div>

				<div className="text-6xl font-bold text-center mb-12">
					{minutes.toString().padStart(2, '0')}:
					{seconds.toString().padStart(2, '0')}
				</div>

				<ButtonsComponent
					startTimer={startTimer}
					stopTimer={stopTimer}
					resetTimer={resetTimer}
					isRunning={isRunning}
					isReset={isReset}
				/>

				<TimerStateComponent isRunning={isRunning} isReset={isReset} />

				<ProfilesComponent
					profiles={profiles}
					currentProfile={currentProfile}
					handleProfileChange={handleProfileChange}
				/>
				<footer className="text-center text-black text-sm font-semibold mt-4">
					Created With ❤️ by{' '}
					<a href="shrianshagarwal.in">Shriansh Agarwal</a>
				</footer>
			</div>
		</div>
	);
}

export default Pomodoro;
