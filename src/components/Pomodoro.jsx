import { useBackground } from '@/context/BackgroundContext';
import useTimer from '@/hooks/useTimer';
import { useState } from 'react';
import { FaUserAlt, FaSuperpowers } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import ProfilesComponent from './ProfilesComponent';

const POMODORO_DURATION_IN_SECONDS = 25 * 60;

function Pomodoro() {
	const { time, isRunning, isReset, startTimer, stopTimer, resetTimer } =
		useTimer(POMODORO_DURATION_IN_SECONDS);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [profiles, setProfiles] = useState([
		{ name: 'Default', icon: <FaSuperpowers /> },
		{ name: 'Personal', icon: <FaUserAlt /> },
		{ name: 'Work', icon: <MdOutlineWork /> },
	]);
	const [currentProfile, setCurrentProfile] = useState(profiles[0]);

	function handleProfileChange(profile) {
		setCurrentProfile(profile);
	}
	const { backgroundColor } = useBackground();

	return (
		<div
			style={{
				backgroundColor: backgroundColor,
			}}
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
				<div className="flex justify-center mb-10">
					<button
						className={`mr-4 bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-full ${
							isRunning && !isReset
								? 'opacity-50 cursor-default'
								: ''
						}`}
						onClick={startTimer}
						disabled={isRunning && !isReset}
					>
						Start
					</button>
					<button
						className={`mr-4 bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-full ${
							!isRunning || isReset
								? 'opacity-50 cursor-default'
								: ''
						}`}
						onClick={stopTimer}
						disabled={!isRunning || isReset}
					>
						Stop
					</button>
					<button
						className={`bg-gray-500 hover:bg-gray-600 text-white py-3 px-5 rounded-full ${
							isReset ? 'opacity-50 cursor-default' : ''
						}`}
						onClick={resetTimer}
						disabled={isReset}
					>
						Reset
					</button>
				</div>
				{!isRunning || isReset ? (
					<div
						className={`text-white ${
							isReset ? 'bg-[#4a4e69]' : 'bg-[#ffa200]'
						} p-4 rounded-lg mb-6 text-center`}
					>
						{isReset ? 'Timer reset!' : 'Timer paused.'}
					</div>
				) : (
					<div
						className={`bg-[#52b788] text-white p-4 rounded-lg mb-6 text-center`}
					>
						Timer running.
					</div>
				)}
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
