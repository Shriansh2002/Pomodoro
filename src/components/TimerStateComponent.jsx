const TimerStateComponent = ({ isRunning, isReset }) => {
	return (
		<>
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
		</>
	);
};

export default TimerStateComponent;
