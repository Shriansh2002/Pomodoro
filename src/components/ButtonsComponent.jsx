const ButtonsComponent = ({
	startTimer,
	stopTimer,
	resetTimer,
	isRunning,
	isReset,
}) => {
	return (
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
	);
};

export default ButtonsComponent;
