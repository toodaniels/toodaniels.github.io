import React from 'react'
import Link from 'next/link'

import MediaIcons from '@components/MediaIcons/MediaIcons'

export default function Example() {
	return (
		<header className="py-10">
			<div className="mx-auto max-w-5xl  px-4 sm:px-6 lg:px-8">
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center gap-x-5 md:gap-x-8">
						{/* <div className="hidden md:block"> */}
						<div>
							<Link href="/" passHref>
								<a
									href="replace"
									className="inline-block rounded-lg py-1 px-2 font-extrabold text-gray-300 hover:bg-slate-100 hover:text-emerald-500"
								>
									<span className="relative whitespace-nowrap text-emerald-500">
										too
									</span>
									daniels
								</a>
							</Link>
						</div>
						{/* <div className="-mr-1 md:hidden">
              <div>
                <button className="relative z-10 flex h-8 w-8 items-center justify-center" aria-label="Toggle Navigation" id="headlessui-popover-button-:R1p6:" type="button" aria-expanded="false">
                  <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none">
                    <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition">
                    </path>
                    <path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0">
                    </path>
                  </svg>
                </button>
              </div>
            </div> */}
					</div>
					<div className="flex items-center md:gap-x-12">
						{/* <div className="hidden md:flex md:gap-x-6"> */}
						<div className="flex md:gap-x-6">
							{/*{
                navigation.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a className={`inline-block rounded-lg py-1 px-2 text-sm ${item.href === route ? active : noActive}`}>
                      {item.name}
                    </a>
                  </Link>
                ))
              }*/}
						</div>
						<MediaIcons></MediaIcons>
					</div>
				</nav>
			</div>
		</header>
	)
}
