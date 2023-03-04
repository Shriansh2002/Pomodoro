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
		{ name: 'Default', tasks: [], icon: <FaSuperpowers /> },
		{ name: 'Personal', tasks: [], icon: <FaUserAlt /> },
		{ name: 'Work', tasks: [], icon: <MdOutlineWork /> },
	]);
	const [currentProfile, setCurrentProfile] = useState(profiles[0]);

	function handleProfileChange(profile) {
		setCurrentProfile(profile);
	}

	return (
		<div className="max-w-md mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
			<h1 className="text-4xl font-bold text-center">Pomodoro App 🍅</h1>

			<h1 className="text-center text-xl font-bold my-4 text-blue-500">
				{currentProfile.name} Profile
			</h1>

			<div className="text-6xl font-bold text-center mb-12">
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}
			</div>
			<div className="flex justify-center mb-10">
				<button
					className={`mr-4 bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded-full ${
						isRunning && !isReset ? 'opacity-50 cursor-default' : ''
					}`}
					onClick={startTimer}
					disabled={isRunning && !isReset}
				>
					Start
				</button>
				<button
					className={`mr-4 bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-full ${
						!isRunning || isReset ? 'opacity-50 cursor-default' : ''
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
			{(!isRunning || isReset) && (
				<div
					className={`bg-gray-100 ${isReset && 'bg-red-100'}  ${
						!isReset && 'bg-orange-100'
					} p-4 rounded-lg mb-6 text-center`}
				>
					{isReset ? 'Timer reset!' : 'Timer paused.'}
				</div>
			)}
			<ProfilesComponent
				profiles={profiles}
				currentProfile={currentProfile}
				handleProfileChange={handleProfileChange}
			/>
		</div>
	);
}

export default Pomodoro;
