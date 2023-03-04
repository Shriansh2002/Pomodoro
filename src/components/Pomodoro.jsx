import { useState, useEffect } from 'react';
import { FaUserAlt, FaSuperpowers } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';

function Pomodoro() {
	const [time, setTime] = useState(25 * 60);
	const [isRunning, setIsRunning] = useState(false);
	const [isReset, setIsReset] = useState(false);

	const [profiles, setProfiles] = useState([
		{ name: 'Default', tasks: [], icon: <FaSuperpowers /> },
		{ name: 'Personal', tasks: [], icon: <FaUserAlt /> },
		{ name: 'Work', tasks: [], icon: <MdOutlineWork /> },
	]);
	const [currentProfile, setCurrentProfile] = useState(profiles[0]);

	useEffect(() => {
		let interval = null;
		if (isRunning && !isReset) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isRunning, isReset]);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const startTimer = () => {
		setIsRunning(true);
		setIsReset(false);
	};

	const stopTimer = () => setIsRunning(false);

	const resetTimer = () => {
		setTime(25 * 60);
		setIsRunning(false);
		setIsReset(true);
	};

	function handleProfileChange(profile) {
		setCurrentProfile(profile);
	}

	return (
		<div className="max-w-md mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-lg">
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

			<div className="flex justify-center mb-4 p-4">
				<div className="flex items-center space-x-4">
					{profiles.map((profile) => (
						<button
							key={profile.name}
							className={`flex items-center justify-center h-10 w-10 rounded-full ${
								profile.name === currentProfile.name
									? 'bg-blue-500 text-white'
									: 'bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-600'
							}`}
							onClick={() => handleProfileChange(profile)}
						>
							{profile.icon}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default Pomodoro;
