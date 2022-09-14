import React from 'react'
import MediaIcons from '@components/MediaIcons/MediaIcons'

function Footer() {
	return (
		<footer className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32">
			<div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
				<p className="mt-6 text-sm text-slate-500 sm:mt-0">
					Copyright © 2022 Daniel Torres
				</p>
				<div className="flex gap-x-6">
					<MediaIcons textColor="text-slate-500"></MediaIcons>
				</div>
			</div>
		</footer>
	)
}

export default Footer
