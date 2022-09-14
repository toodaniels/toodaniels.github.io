import React, { useState } from 'react'

const jobs = [
	{
		title: 'Data Engineer',
		company: 'Dat’s Why',
		time: 'April 2020 - Present',
		items: [
			'Advanced Geospatial Data Cleaning and Analysis SQL (Postgis and Presto/Athena) on AWS.',
			'ETLs with Python on AWS.',
			'Data Pipelines using Apache Airflow on AWS and Custom operators to Apache Airflow.',
			'Airflow deployments on AWS with Github actions.',
			'Design Strategies to improve Python code implementations using Github actions.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Somos',
		time: 'March 2019 - March 2020: 12 Months',
		items: [
			'Web Development  ReactJS.',
			'API Rest using NodeJS and MongoDB.',
			'Python for Genomic Data Analysis with Docker on AWS.',
			'MongoDB database administration on AWS.',
			'Management of Wordpress Online store.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Cenidet',
		time: 'January 2018 - February 2019: 13 Months',
		items: [
			'Web Development ReactJS.',
			'Api Rest using NodeJS with MySQL and CrateDB.',
			'Python Web service to manage notifications for mobile applications using Firebase Cloud Messaging.',
			'Web services Dockerizing and orchestration.',
		],
	},
	{
		title: 'Mobile Engineer',
		company: 'Cenidet',
		time: 'August  2017 - December 2017: 4 Months',
		items: [
			'Mobile Development using React Native for Android.',
			'Api Rest Full using NodeJS and MongoDB.',
			'NPM library to easy  integration with Fiware cloud.',
		],
	},
]

export default function Experience() {
	const [active, setActive] = useState(0)

	return (
		<div className="py-12">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 pt-32 sm:px-8">
				<div className="">
					<p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-emerald-500 sm:text-2xl">
						Where I’ve Worked
					</p>
					<p className="mt-4 max-w-2xl text-md text-gray-400">
						Positions I have held throughout my career.
					</p>
				</div>

				<div className="grid grid-cols-8 mb-4 md:mb-6">
					<div className="flex flex-col sm:col-span-8 md:col-span-3 md:border-t-0 md:pl-8 hidden md:block">
						<ul className="mt-6 flex md:flex-col space-y-3">
							{jobs.map((job, index) => (
								<li key={index}>
									<button
										onClick={() => setActive(index)}
										className={`inline-block rounded-lg py-1 px-2 text-sm ${
											active === index
												? 'font-semibold text-slate-700 bg-emerald-500 text-gray-900 '
												: 'text-gray-100'
										}`}
									>
										{job.company}
									</button>
								</li>
							))}
						</ul>
					</div>

					{jobs.map((job, index) => (
						<div
							className={`flex flex-col space-y-4 col-span-8 md:col-span-5  block mt-6 ${
								active === index ? '' : 'md:hidden'
							}`}
							key={index}
						>
							<div className="flex flex-col space-y-1">
								<h3 className="text-lg font-medium leading-6 text-gray-100">
									{job.title} @ {job.company}
								</h3>
								<p className="text-xs text-gray-300">{job.time}</p>
								<div className="leading-7 text-gray-400 mx-2">
									<ul className="list-disc">
										{job.items.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
