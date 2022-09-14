import React from 'react'
import Link from 'next/link'
import { GitHub, Instagram, Facebook, Twitter, Linkedin } from 'react-feather'

const socialLinks = [
	{
		icon: GitHub,
		href: 'https://github.com/toodaniels',
	},
	{
		icon: Instagram,
		href: 'https://instagram.com/toodaniels',
	},
	{
		icon: Facebook,
		href: 'https://facebook.com/toodaniels',
	},
	{
		icon: Twitter,
		href: 'https://twitter.com/toodaniels',
	},
	{
		icon: Linkedin,
		href: 'https://linkedin.com/in/toodaniels/',
	},
]

export default function MediaIcons({ textColor, hoverTextColor }) {
	const _textColor = textColor ? textColor : 'text-emerald-500'
	const _hoverTextColor = hoverTextColor ? hoverTextColor : 'text-gray-300'

	return (
		<div className="flex md:gap-x-6">
			{socialLinks.map((item, index) => (
				<Link href={item.href} key={index} passHref>
					<a
						href="replace"
						className={`${_textColor} hover:${_hoverTextColor} mx-2 md:mx-0`}
					>
						<item.icon />
					</a>
				</Link>
			))}
		</div>
	)
}
