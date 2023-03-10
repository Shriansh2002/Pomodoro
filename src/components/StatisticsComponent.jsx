// React
import { useEffect, useState } from 'react';

// Next
import Link from 'next/link';

// NextAuth
import { useSession } from 'next-auth/react';

// Components
import SessionStatistics from '@/components/SessionStatistics';
import ChartComponentStats from '@/components/ChartComponentStats';

// Icons
import { HiHome } from 'react-icons/hi';

const StatisticsComponent = () => {
	const { data: session } = useSession();

	const [userData, setUserData] = useState({});

	useEffect(() => {
		if (session && session.user) {
			setUserData(session.user);
		}
	}, []);

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
					<div>
						{userData && (
							<div className="flex items-center gap-2">
								<p className="text-gray-800">
									Welcome, {userData.name}
								</p>
								<img
									src={userData.image}
									className="rounded-full w-10 h-10"
								/>
							</div>
						)}
					</div>
				</div>
			</header>
			<SessionStatistics />

			<ChartComponentStats data={GraphData} />
		</div>
	);
};

export default StatisticsComponent;
