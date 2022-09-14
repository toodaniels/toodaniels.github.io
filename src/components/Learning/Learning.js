import React, { useState } from 'react'

import Course from '@components/Course/Course'
import coursesTaking from './coursesTaking.json'

export default function Learning() {
	const defaultShow = 3
	const [showing, setShowing] = useState(defaultShow)
	const { courses } = coursesTaking

	const showMore = () => {
		if (showing < courses.length) {
			setShowing(showing + defaultShow)
			return
		}
		setShowing(defaultShow)
	}

	return (
		<div className="py-12">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 pt-32 sm:px-8">
				<div className="">
					<p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-emerald-500 sm:text-2xl">
						What I&apos;m Learning
					</p>
					<p className="mt-4 max-w-2xl text-md text-gray-400">
						Recommendations of courses I&apos;ve taken
					</p>
				</div>
				<div className="mt-10">
					<ol className="grid grid-cols-1 gap-y-10 mb-10 lg:grid-cols-3 lg:text-center xl:-mx-12">
						{courses.slice(0, showing).map((course, index) => (
							<Course key={index} props={course} />
						))}
					</ol>
					<div className="mx-auto flex items-center justify-center">
						<button
							className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-500 text-gra-300 hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-gra-300"
							onClick={showMore}
						>
							{showing < courses.length ? 'Show More' : 'Show Less'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
