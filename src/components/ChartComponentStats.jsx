import { useEffect } from 'react';
import Chart from 'chart.js';

export default function CardLineChart({ data }) {
	useEffect(() => {
		var config = {
			type: 'line',
			data: data,
			options: {
				maintainAspectRatio: false,
				responsive: true,
				title: {
					display: false,
					text: 'Sales Charts',
					fontColor: 'white',
				},
				legend: {
					labels: {
						fontColor: 'white',
					},
					align: 'end',
					position: 'bottom',
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true,
				},
				scales: {
					xAxes: [
						{
							ticks: {
								fontColor: 'rgba(255,255,255,.7)',
							},
							display: true,
							scaleLabel: {
								display: false,
								labelString: 'Month',
								fontColor: 'white',
							},
							gridLines: {
								display: false,
								borderDash: [2],
								borderDashOffset: [2],
								color: 'rgba(33, 37, 41, 0.3)',
								zeroLineColor: 'rgba(0, 0, 0, 0)',
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
						},
					],
					yAxes: [
						{
							ticks: {
								fontColor: 'rgba(255,255,255,.7)',
							},
							display: true,
							scaleLabel: {
								display: false,
								labelString: 'Value',
								fontColor: 'white',
							},
							gridLines: {
								borderDash: [3],
								borderDashOffset: [3],
								drawBorder: false,
								color: 'rgba(255, 255, 255, 0.15)',
								zeroLineColor: 'rgba(33, 37, 41, 0)',
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
						},
					],
				},
			},
		};
		var ctx = document.getElementById('line-chart').getContext('2d');
		window.myLine = new Chart(ctx, config);
	}, []);

	return (
		<main className="container mx-auto p-8">
			<h2 className="text-xl font-semibold text-gray-800 mb-4 px-4">
				Productivity Statistics
			</h2>
			<div className="p-4">
				<div class="container mx-auto flex-col break-words shadow-lg rounded bg-gray-900">
					<div class="p-5 flex-auto">
						<div class="relative h-96">
							<canvas id="line-chart"></canvas>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
