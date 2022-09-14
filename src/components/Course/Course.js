import React from 'react'

export default function Course({ props }) {
	return (
		<li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
			{/* <PlatformImage props={props}></PlatformImage> */}
			<div>
				<span className="text-emerald-500">{props.type}</span>
				<h3 className="text-base font-medium tracking-tight text-gray-300">
					{props.title}
				</h3>
				<p className="mt-2 text-sm text-slate-600">{props.description}</p>
				<span className="text-slate-500">@{props.platform}</span>
			</div>
		</li>
	)
}
