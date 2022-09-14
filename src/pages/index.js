import React from 'react'
import OverView from '@components/Overview/OverView'
import Experience from '@components/Experience/Experience'
import Skills from '@components/Skills/Skills'
import Learning from '@components/Learning/Learning'

// https://salient.tailwindui.com/
function Home() {
	return (
		<>
			<OverView></OverView>
			<Skills></Skills>
			<Experience></Experience>
			<Learning></Learning>
		</>
	)
}

export default Home
