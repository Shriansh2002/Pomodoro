import React from 'react';

const SessionStatistics = () => {
	return (
		<main className="container mx-auto p-8">
			<h2 className="text-xl font-semibold text-gray-800 mb-4 px-4">
				Session Statistics
			</h2>
			<div className="flex flex-wrap">
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-800 mb-2">
							Total Sessions
						</h3>
						<p className="text-3xl font-bold text-gray-800">10</p>
					</div>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-800 mb-2">
							Completed Sessions
						</h3>
						<p className="text-3xl font-bold text-gray-800">8</p>
					</div>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-800 mb-2">
							Abandoned Sessions
						</h3>
						<p className="text-3xl font-bold text-gray-800">2</p>
					</div>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-800 mb-2">
							Average Session Length
						</h3>
						<p className="text-3xl font-bold text-gray-800">
							25 minutes
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SessionStatistics;
