/** @format */

'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	HeartHandshake,
	BookOpen,
	// Utensils,
	Smile,
	Wind,
	FileText,
	Lightbulb,
	// PenTool,
	Flame,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react'

export function Home() {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [isLargeScreen, setIsLargeScreen] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsLargeScreen(window.innerWidth >= 1024)
		}

		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)

		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (scrollContainer && !isLargeScreen) {
			let isDown = false
			let startX: number
			let scrollLeft: number

			const onMouseDown = (e: MouseEvent) => {
				isDown = true
				startX = e.pageX - scrollContainer.offsetLeft
				scrollLeft = scrollContainer.scrollLeft
			}

			const onMouseLeave = () => {
				isDown = false
			}

			const onMouseUp = () => {
				isDown = false
			}

			const onMouseMove = (e: MouseEvent) => {
				if (!isDown) return
				e.preventDefault()
				const x = e.pageX - scrollContainer.offsetLeft
				const walk = (x - startX) * 2
				scrollContainer.scrollLeft = scrollLeft - walk
			}

			scrollContainer.addEventListener('mousedown', onMouseDown)
			scrollContainer.addEventListener('mouseleave', onMouseLeave)
			scrollContainer.addEventListener('mouseup', onMouseUp)
			scrollContainer.addEventListener('mousemove', onMouseMove)

			return () => {
				scrollContainer.removeEventListener('mousedown', onMouseDown)
				scrollContainer.removeEventListener('mouseleave', onMouseLeave)
				scrollContainer.removeEventListener('mouseup', onMouseUp)
				scrollContainer.removeEventListener('mousemove', onMouseMove)
			}
		}
	}, [isLargeScreen])

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === 'left' ? -300 : 300
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 font-['Bodoni_Moda',_serif]">
			<header className='p-6 bg-white bg-opacity-80 shadow-md'>
				<h1 className='text-3xl font-bold text-center text-blue-600'>
					Coping Skills Toolbox
				</h1>
				<p className='text-center text-gray-600 mt-2'>
					Your digital space for managing anxiety and depression
				</p>
			</header>

			<main className='container mx-auto p-6 relative'>
				{!isLargeScreen && (
					<>
						<Button
							variant='outline'
							className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 lg:hidden'
							onClick={() => scroll('left')}>
							<ChevronLeft className='h-6 w-6' />
							<span className='sr-only'>Scroll left</span>
						</Button>
						<Button
							variant='outline'
							className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 lg:hidden'
							onClick={() => scroll('right')}>
							<ChevronRight className='h-6 w-6' />
							<span className='sr-only'>Scroll right</span>
						</Button>
					</>
				)}
				<div
					ref={scrollContainerRef}
					className={`
            ${
				isLargeScreen
					? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					: 'flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scrollbar-hide'
			}
          `}
					style={
						!isLargeScreen
							? {
									scrollbarWidth: 'none',
									msOverflowStyle: 'none',
							  }
							: {}
					}>
					<ToolboxItem
						icon={<HeartHandshake />}
						title='Daily IOP'
						href='/daily-iop'>
						Record of daily IOP activities, handouts, and notes.
					</ToolboxItem>
					<ToolboxItem
						icon={<HeartHandshake />}
						title='Support Network'
						href='/support'>
						Access your list of support groups, classes, and contact
						information for your support network.
					</ToolboxItem>

					<ToolboxItem
						icon={<FileText />}
						title='Relapse Prevention Plan'
						href='/relapse-prevention'>
						View and update your plan to prevent the relapse of
						mental health symptoms.
					</ToolboxItem>

					<ToolboxItem
						icon={<BookOpen />}
						title='Inspirational Content'
						href='/inspiration'>
						Find encouraging quotes, book passages, and links to
						uplifting podcasts or videos.
					</ToolboxItem>

					<ToolboxItem
						icon={<Smile />}
						title='Joy List'
						href='/joy'>
						Explore your personalized list of activities, people,
						and things that bring you joy.
					</ToolboxItem>

					<ToolboxItem
						icon={<Wind />}
						title='Breathing & Meditation'
						href='/breathing'>
						Access guided breathing exercises and meditation
						resources.
					</ToolboxItem>

					<ToolboxItem
						icon={<Lightbulb />}
						title='Affirmations'
						href='/affirmations'>
						Read and add to your list of positive mantras and
						affirmations.
					</ToolboxItem>

					<ToolboxItem
						icon={<Flame />}
						title='Self-Care Tools'
						href='/self-care'>
						Discover self-care practices and relaxation techniques.
					</ToolboxItem>
				</div>
			</main>

			<footer className='p-6 bg-white bg-opacity-80 shadow-md mt-6'>
				<p className='text-center text-gray-600'>
					Remember, you are not alone. Reach out for help when you
					need it.
				</p>
				<div className='flex justify-center mt-4'>
					<Button variant='outline'>Emergency Contacts</Button>
				</div>
			</footer>
		</div>
	)
}

interface ToolboxItemProps {
	icon: React.ReactNode
	title: string
	children: React.ReactNode
	href: string
}

function ToolboxItem({ icon, title, children, href }: ToolboxItemProps) {
	return (
		<Card className='flex-shrink-0 w-80 lg:w-full snap-center hover:shadow-lg transition-shadow bg-white bg-opacity-90'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2 text-blue-600'>
					{icon}
					<span>{title}</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='text-gray-600 mb-4'>{children}</p>
				<Link
					href={href}
					passHref>
					<Button
						variant='outline'
						className='w-full bg-blue-50 hover:bg-blue-100 text-blue-600'>
						Explore
					</Button>
				</Link>
			</CardContent>
		</Card>
	)
}
