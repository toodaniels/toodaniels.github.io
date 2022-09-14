import React from 'react'
import { GitHub } from 'react-feather'

export default function OverView() {
	return (
		<div className="py-12">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 pt-32 sm:px-8 grid grid-cols-4">
				<div className="hidden lg:block px-3 col-span-4">
					<img
						className="rounded-full"
						width={50}
						height={50}
						src="https://avatars.githubusercontent.com/u/17733906?v=4"
						alt="Daniel Torres"
					/>
				</div>
				<div className="col-span-4 text-center lg:text-left lg:col-span-3">
					<h1 className="max-w-4xl font-display text-4xl font-extrabold text-white">
						Hi, I&apos;m
						<span className="text-emerald-500 m-3">Daniel</span>
					</h1>
					<p className="mt-6 max-w-4xl text-lg text-gray-300">
						I’m a passionate Software and Data engineer with 4+ years of
						experience. I like to constantly learn about new technologies and
						from my teammates, I enjoy sharing the knowledge on each opportunity
						I have.
					</p>
					<div className="mt-10 flex gap-x-6 justify-center lg:justify-start">
						<a
							className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-500 text-slate-900 hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
							href="mailto:torresestradadaniel@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send me a mail
						</a>
						<a
							className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-emerald-500 text-emerald-500 hover:text-slate-100 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
							href="https://github.com/toodaniels"
						>
							<GitHub></GitHub>
							<span className="ml-3">Follow me on GitHub</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
