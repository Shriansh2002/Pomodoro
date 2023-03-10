const SessionStatistics = () => {
	const listofStats = [
		{
			title: 'Total Sessions',
			value: 10,
		},
		{
			title: 'Completed Sessions',
			value: 8,
		},
		{
			title: 'Abandoned Sessions',
			value: 2,
		},
		{
			title: 'Average Session Length',
			value: 25,
		},
	];

	return (
		<main className="container mx-auto p-8">
			<h2 className="text-xl font-semibold text-gray-800 mb-4 px-4">
				Session Statistics
			</h2>
			<div className="flex flex-wrap">
				{listofStats.map((stat, _idx) => (
					<div
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
						key={_idx}
					>
						<div className="bg-white rounded-lg shadow p-6">
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								{stat.title}
							</h3>
							<p className="text-3xl font-bold text-gray-800">
								{stat.value}
								{stat.title === 'Average Session Length' &&
									' Minutes'}
							</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default SessionStatistics;
