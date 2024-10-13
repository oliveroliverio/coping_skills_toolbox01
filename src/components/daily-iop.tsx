/** @format */

'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export function DailyIOPComponent() {
	return (
		<>
			<div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-['Bodoni_Moda',_serif]">
				<div className='container mx-auto px-4 py-8 max-w-3xl'>
					<header className='mb-8 text-center'>
						<h1 className='text-4xl font-bold text-blue-600 mb-2'>
							Daily IOP
						</h1>
						<p className='text-gray-600'>
							Insert notes, handouts, and other resources here for
							each attended IOP day.
						</p>
					</header>
				</div>
			</div>

			<footer className='mt-12 text-center'>
				<Link
					href='/'
					passHref>
					<Button variant='outline'>Back to Toolbox</Button>
				</Link>
			</footer>
		</>
	)
}
