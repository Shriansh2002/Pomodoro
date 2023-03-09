// ReactContext
import { useBackground } from '@/context/BackgroundContext';

// Hooks
import useTimer from '@/hooks/useTimer';
import useProfiles from '@/hooks/useProfiles';
import { useEffect } from 'react';

// icons
import { FaUserAlt, FaSuperpowers } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

// Components
import ProfilesComponent from './ProfilesComponent';
import TimerStateComponent from './TimerStateComponent';
import ButtonsComponent from './ButtonsComponent';

function Pomodoro() {
	const { profiles, currentProfile, handleAddProfile, handleProfileChange } =
		useProfiles([
			{ name: 'Default', icon: <FaSuperpowers />, duration: 25 },
			{ name: 'Personal', icon: <FaUserAlt />, duration: 10 },
			{ name: 'Work', icon: <MdOutlineWork />, duration: 45 },
		]);

	const {
		minutes,
		seconds,
		isRunning,
		isReset,
		startTimer,
		stopTimer,
		resetTimer,
	} = useTimer(currentProfile.duration * 60);

	const { backgroundColor, darkMode, setDarkMode } = useBackground();

	useEffect(() => {
		resetTimer();
	}, [currentProfile]);

	return (
		<div
			style={{ backgroundColor: backgroundColor }}
			className="h-screen	py-36"
		>
			<button
				className={`absolute top-0 right-0 m-4 p-2 rounded-md shadow-md
					font-semibold
					${
						darkMode
							? 'bg-gray-400 text-[#0B132B] hover:text-white'
							: 'bg-[#0B132B] text-white hover:text-gray-300'
					}
					`}
				onClick={() => setDarkMode((ps) => !ps)}
			>
				{!darkMode ? '🌙 DARK' : '☀️ LIGHT'}
			</button>
			<div
				className={`max-w-md mx-auto px-6 py-12 ${
					darkMode ? 'bg-gray-200' : 'bg-[#2B2D42] text-[#F7F7F9]'
				}	rounded-lg shadow-lg`}
			>
				<h1 className="text-4xl font-bold text-center">
					Pomodoro App 🍅
				</h1>

				<ProfilesComponent
					profiles={profiles}
					currentProfile={currentProfile}
					handleProfileChange={handleProfileChange}
					handleAddProfile={handleAddProfile}
				/>
				<div className="flex items-center justify-center text-xl font-bold mb-4 text-blue-500 gap-1">
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

				<footer className="text-center text-sm font-semibold mt-4">
					Created With ❤️ by{' '}
					<a
						href="shrianshagarwal.in"
						className="text-blue-500 hover:text-blue-600 transition-colors duration-100 underline underline-offset-2 ease-in-out"
					>
						Shriansh Agarwal
					</a>
				</footer>
			</div>
		</div>
	);
}

export default Pomodoro;
