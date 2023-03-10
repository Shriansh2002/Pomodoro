// Next
import Link from 'next/link';

// Components
import SessionStatistics from '@/components/SessionStatistics';
import ChartComponentStats from '@/components/ChartComponentStats';

// Icons
import { HiHome } from 'react-icons/hi';

const StatisticsComponent = () => {
	const GraphData = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
		],
		datasets: [
			{
				label: new Date().getFullYear(),
				backgroundColor: '#DE3C4B',
				borderColor: '#DE3C4B',
				data: [65, 78, 66, 44, 56, 67, 75],
				fill: false,
			},
		],
	};

	return (
		<div className="bg-gray-100 min-h-screen">
			<header className="bg-white shadow-sm py-4">
				<div className="container mx-auto px-4 flex items-center justify-between">
					<Link href="/">
						<HiHome className="text-gray-800 text-xl cursor-pointer" />
					</Link>
					<h1 className="text-3xl font-bold text-gray-800">
						Pomodoro Statistics
					</h1>
					<div></div>
				</div>
			</header>
			<SessionStatistics />

			<ChartComponentStats data={GraphData} />
		</div>
	);
};

export default StatisticsComponent;
