import React from 'react'
import { Database, Layout, Cloud, Activity } from 'react-feather'

export default function Skills() {
	return (
		<div className="py-12">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 pt-32 sm:px-8">
				<div className="">
					<p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-emerald-500 sm:text-2xl">
						What I&apos;ve Learned
					</p>
					<p className="mt-4 max-w-2xl text-md text-gray-400">
						Skills that I have acquired along the way as a Software Engineer.
					</p>
				</div>
				<div className="mt-10">
					<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
						<div className="relative">
							<dt>
								<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
									<Database></Database>
								</div>
								<p className="ml-16 text-lg font-medium leading-6 text-gray-100">
									Data Engineering
								</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-400">
								Airflow, Advanced SQL; Postgres/Postgis, Athena/PrestoDB,
								Snowflake, Pandas, ETL pipelines, MongoDB, Jupyter Notebook.
							</dd>
						</div>

						<div className="relative">
							<dt>
								<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
									<Layout></Layout>
								</div>
								<p className="ml-16 text-lg font-medium leading-6 text-gray-100">
									Web & Mobile Development
								</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-400">
								React, Express, React Native, Firebase, Tailwindcss,
								StyledComponents, Flask, FastAPI, Django.
							</dd>
						</div>

						<div className="relative">
							<dt>
								<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
									<Cloud></Cloud>
								</div>
								<p className="ml-16 text-lg font-medium leading-6 text-gray-100">
									Cloud & DevOps
								</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-400">
								Docker, AWS; S3, Athena, ECR, ECS, Batch, Lambda, Route53,
								Cloudfront, Cloudwatch, RDS, DynamoDB, Api Gateway, SQS, Glue,
								Redshift, Github Actions, k8s, Heroku, Bash scripting.
							</dd>
						</div>

						<div className="relative">
							<dt>
								<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
									<Activity></Activity>
								</div>
								<p className="ml-16 text-lg font-medium leading-6 text-gray-100">
									Soft skills
								</p>
							</dt>
							<dd className="mt-2 ml-16 text-base text-gray-400">
								Teamwork, Leadership, Assertiveness, Critical Thinking, and the
								most important for me, Proactivity.
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	)
}
