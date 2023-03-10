// React
import { useEffect, useState } from 'react';

// Next
import Link from 'next/link';

// NextAuth
import { useSession, signOut } from 'next-auth/react';

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
		} else {
			setUserData({});
		}
	});

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

	function handleLogOut(e) {
		e.preventDefault();
		signOut();
	}

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
					<div className="flex gap-2">
						{session && session.user && (
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
						{session && session.user && (
							<button
								onClick={handleLogOut}
								className="bg-gray-800 text-white px-4 py-2 rounded-md"
							>
								Logout
							</button>
						)}
					</div>
				</div>
			</header>

			{session && session.user ? (
				<>
					<SessionStatistics />
					<ChartComponentStats data={GraphData} />
				</>
			) : (
				<main className="container mx-auto p-8 py-52 m-auto text-center">
					<p className="text-2xl font-bold text-gray-800  ">
						You need to be logged in to view this page.
					</p>
					<Link href="/api/auth/signin">
						<button className="bg-gray-800 text-white px-4 py-2 my-4 rounded-md">
							Back to Login
						</button>
					</Link>
				</main>
			)}
		</div>
	);
};

export default StatisticsComponent;
