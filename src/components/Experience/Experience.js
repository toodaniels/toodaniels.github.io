import React, { useState } from 'react'

const jobs = [
	{
		title: 'Data Engineer',
		company: 'Axity',
		time: 'November 2022 - Present',
		start: '01 November 2022',
		items: [
			'Driving process automation for Python-based workflows using Astronomer-managed Apache Airflow on Google Cloud Platform (GCP), leveraging Dataproc and Google Cloud Storage (GCS) for scalable execution.',
			'Designing and implementing robust data models and ensuring code standardization across data engineering scripts to enhance maintainability and performance.',
			'Developing and optimizing automation scripts to streamline data operations and increase efficiency.',
			'Performing complex data transformations utilizing Spark SQL and Hive on Dataproc, supporting critical analytical needs.',
			'Leading significant data migration initiatives from diverse source systems, including SQL Server, DB2, and Excel, to integrate into our Data Mesh architecture.',
			'Serving as a key member of the Data Engineering team dedicated to our most important client, ensuring high-quality data solutions and delivery.',
			'Taking on tech lead responsibilities, including technical decision-making, team guidance, and implementing best practices in data engineering workflows.',
		],
	},
	{
		title: 'Data Engineer',
		company: 'Dat’s Why',
		time: 'April 2020 - November 2022',
		start: '01 April 2020',
		end: '01 November 2022',
		description:
			'As a Data Engineer, I am responsible for designing, implementing, and maintaining robust data solutions on AWS. My core focus includes:',
		items: [
			'Cleaning and analyzing geospatial data using Python and advanced SQL (specifically PostGIS and AWS Athena), ensuring data quality and readiness for analysis.',
			'Designing and implementing end-to-end ETL processes on AWS to streamline data ingestion and transformation.',
			'Developing and deploying resilient data pipelines orchestrated with Apache Airflow on AWS, guaranteeing efficient and scheduled data flows.',
			"Extending Apache Airflow's functionality by creating custom operators to meet specific business needs and enhance automation capabilities.",
			'Managing the full lifecycle of Airflow deployments and maintenance on AWS, leveraging GitHub Actions for seamless CI/CD.',
			'Implementing strategies to enhance Python code quality and performance through automated workflows in GitHub Actions, fostering best practices and operational excellence.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Somos',
		time: 'March 2019 - March 2020',
		start: '01 March 2019',
		end: '01 March 2020',
		description:
			'As a Software Engineer, I focused on full-stack web development, containerized scientific workflows, and e-commerce optimization. My core focus included:',
		items: [
			'Designing, building, and deploying highly responsive Progressive Web Applications (PWAs) using React and Material-UI to ensure optimal user experiences.',
			'Developing and deploying robust, scalable backend RESTful APIs using Node.js, Express, and MongoDB.',
			'Architecting containerized workflows using Docker to deploy Python-based applications optimized for high-performance genomic data analysis.',
			'Administering and optimizing MongoDB databases to ensure data integrity, high availability, and query performance.',
			'Managing and customizing WooCommerce/WordPress online stores, improving checkout flows and site performance.',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Cenidet',
		time: 'August 2017 - February 2019',
		start: '01 August 2017',
		end: '01 February 2019',
		description:
			'As a Software Engineer at Cenidet, I focused on full-stack web and mobile development, open-source integration with FIWARE, and containerized cloud solutions. My core focus included:',
		items: [
			'Developing and maintaining open-source, highly reusable generic modules and applications powered by the FIWARE platform.',
			'Building robust, cross-platform and full-stack solutions using a diverse technology stack including React, React Native, Java (Android), Node.js, Python, MongoDB, and MySQL.',
			'Orchestrating and containerizing microservices using Docker to guarantee seamless portability and standardized deployment environments.',
			'Leveraging Google Cloud and Firebase services for efficient web hosting, real-time database management, and scalable cloud functionalities.',
		],
	},
]

// ChatGPT Function
function formatDateDiff(date1, date2) {
	// calculamos la diferencia en milisegundos
	const diffMs = Math.abs(date1 - date2)

	// calculamos los años, meses y días transcurridos
	const diffDate = new Date(diffMs)
	const years = diffDate.getUTCFullYear() - 1970
	const months = diffDate.getUTCMonth()

	// build the formatted result
	let result = ''
	if (years > 1) {
		result = `${years} years`
	} else if (years === 1) {
		result = `${years} year`
	}

	if (months > 0) {
		if (result !== '') {
			result += ' and '
		}
		if (months > 1) {
			result += `${months} months`
		} else {
			result += `${months} month`
		}
	}

	return result
}

const TimeJob = (props) => {
	const { start, end } = props
	const startDate = Date.parse(start)
	const endDate = end ? Date.parse(end) : Date.now()
	return (
		<p className="text-xs text-gray-300">
			{start} - {end ? end : 'Present'}: {formatDateDiff(endDate, startDate)}
		</p>
	)
}

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
								<TimeJob start={job.start} end={job.end} />
								{job.description && (
									<p className="text-sm text-gray-300 mt-3 mb-1 font-light">
										{job.description}
									</p>
								)}
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
