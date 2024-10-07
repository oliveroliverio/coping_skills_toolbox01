/** @format */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	ExternalLink,
	Music,
	Headphones,
	Code,
	Brain,
	Briefcase,
	Microscope,
	Rocket,
	Beaker,
} from 'lucide-react'

export function JoyListComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 font-['Bodoni_Moda',_serif]">
			<div className='container mx-auto px-4 py-8 max-w-4xl'>
				<header className='mb-8 text-center'>
					<h1 className='text-4xl font-bold text-blue-600 mb-2'>
						My Joy List
					</h1>
					<p className='text-gray-600'>
						Explore the activities and interests that bring me
						happiness
					</p>
				</header>

				<main className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					<JoyItem
						title='Playing Piano, Guitar, and Drums'
						icon={<Music className='h-6 w-6' />}
						description='Expressing emotions through music is an incredible creative outlet.'
						resources={[
							{
								name: 'Pianote',
								link: 'https://www.pianote.com/',
								description:
									'Online piano lessons for all levels.',
							},
							{
								name: 'JustinGuitar',
								link: 'https://www.justinguitar.com/',
								description: 'Free online guitar tutorials.',
							},
							{
								name: 'Drumeo',
								link: 'https://www.drumeo.com/',
								description:
									'Comprehensive drum lessons and tutorials.',
							},
						]}
					/>

					<JoyItem
						title='DJing'
						icon={<Headphones className='h-6 w-6' />}
						description='Crafting musical experiences that resonate with others creates an energetic connection.'
						resources={[
							{
								name: 'DJTechTools',
								link: 'https://djtechtools.com/',
								description:
									'Gear reviews, tutorials, and community for DJs.',
							},
							{
								name: 'Serato DJ',
								link: 'https://serato.com/',
								description:
									'One of the most popular DJ software for creating mixes.',
							},
						]}
					/>

					<JoyItem
						title='Singing'
						icon={<Music className='h-6 w-6' />}
						description='Singing is an uplifting way to connect emotionally with yourself and others.'
						resources={[
							{
								name: '30 Day Singer',
								link: 'https://www.30daysinger.com/',
								description:
									'Singing lessons designed to improve your voice fast.',
							},
							{
								name: 'SingSnap',
								link: 'https://www.singsnap.com/',
								description:
									'Online karaoke and singing community where you can record and share.',
							},
						]}
					/>

					<JoyItem
						title='Coding'
						icon={<Code className='h-6 w-6' />}
						description='Coding satisfies your love for solving problems, creation, and learning.'
						resources={[
							{
								name: 'Codecademy',
								link: 'https://www.codecademy.com/',
								description:
									'Interactive platform for learning programming.',
							},
							{
								name: 'LeetCode',
								link: 'https://leetcode.com/',
								description:
									'Platform for practicing coding problems and interview prep.',
							},
							{
								name: 'freeCodeCamp',
								link: 'https://www.freecodecamp.org/',
								description:
									'Offers free tutorials and certifications in various coding languages.',
							},
						]}
					/>

					<JoyItem
						title='Artificial Intelligence (AI)'
						icon={<Brain className='h-6 w-6' />}
						description='AI opens up possibilities to create intelligent systems and solutions that have real-world impact.'
						resources={[
							{
								name: 'Coursera AI Courses',
								link: 'https://www.coursera.org/browse/data-science/artificial-intelligence',
								description:
									'A range of AI and machine learning courses by top universities.',
							},
							{
								name: 'DeepLearning.ai',
								link: 'https://www.deeplearning.ai/',
								description:
									'Courses and resources focused on deep learning and AI applications.',
							},
							{
								name: 'Towards Data Science',
								link: 'https://towardsdatascience.com/',
								description:
									'Blog offering articles, tutorials, and guides on AI and machine learning.',
							},
						]}
					/>

					<JoyItem
						title='Business Development & SaaS Business'
						icon={<Briefcase className='h-6 w-6' />}
						description='Strategizing and growing businesses taps into creativity and a love for problem-solving.'
						resources={[
							{
								name: 'SaaS Academy',
								link: 'https://www.danmartell.com/saas-academy',
								description:
									'Coaching and tools to scale your SaaS business.',
							},
							{
								name: 'The SaaS Playbook',
								link: 'https://www.saasplaybook.com/',
								description:
									'Strategies and tactics to grow SaaS businesses.',
							},
							{
								name: 'HubSpot Academy',
								link: 'https://academy.hubspot.com/',
								description:
									'Free courses in business development, sales, and marketing.',
							},
						]}
					/>

					<JoyItem
						title='Entrepreneurship'
						icon={<Rocket className='h-6 w-6' />}
						description='The thrill of creating something new, solving problems, and making an impact is fulfilling.'
						resources={[
							{
								name: 'Y Combinator Startup School',
								link: 'https://www.startupschool.org/',
								description:
									'Free online course with resources for entrepreneurs.',
							},
							{
								name: 'Foundr',
								link: 'https://foundr.com/',
								description:
									'Entrepreneur-focused resources, courses, and podcasts.',
							},
							{
								name: 'Entrepreneur.com',
								link: 'https://www.entrepreneur.com/',
								description:
									'A wealth of articles, guides, and resources for aspiring entrepreneurs.',
							},
						]}
					/>

					<JoyItem
						title='Molecular Biology'
						icon={<Microscope className='h-6 w-6' />}
						description='Exploring the molecular building blocks of life satisfies curiosity and desire for scientific discovery.'
						resources={[
							{
								name: 'Molecular Biology of the Cell',
								link: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/',
								description:
									'A comprehensive textbook on molecular biology.',
							},
							{
								name: 'iBiology',
								link: 'https://www.ibiology.org/',
								description:
									'Free online talks from leading scientists about molecular biology discoveries.',
							},
							{
								name: 'Cold Spring Harbor Laboratory',
								link: 'https://www.cshl.edu/',
								description:
									'A hub for molecular biology research and education.',
							},
						]}
					/>

					<JoyItem
						title='Science'
						icon={<Beaker className='h-6 w-6' />}
						description='Science allows for exploration, experimentation, and the pursuit of truth.'
						resources={[
							{
								name: 'Khan Academy Science',
								link: 'https://www.khanacademy.org/science',
								description:
									'Free science education covering a wide range of subjects.',
							},
							{
								name: 'Nature',
								link: 'https://www.nature.com/',
								description:
									'One of the leading scientific journals to stay updated with the latest research.',
							},
							{
								name: 'Science Daily',
								link: 'https://www.sciencedaily.com/',
								description:
									'A platform that publishes new scientific research and breakthroughs.',
							},
						]}
					/>

					<JoyItem
						title='Tech Startups'
						icon={<Rocket className='h-6 w-6' />}
						description='Building tech startups allows you to innovate, disrupt industries, and solve meaningful problems.'
						resources={[
							{
								name: 'TechCrunch',
								link: 'https://techcrunch.com/',
								description:
									'News on tech startups, innovation, and venture capital.',
							},
							{
								name: 'AngelList',
								link: 'https://angel.co/',
								description:
									'Platform for startup job listings and investment opportunities.',
							},
							{
								name: 'Product Hunt',
								link: 'https://www.producthunt.com/',
								description:
									'A community where you can discover and showcase new tech products.',
							},
						]}
					/>

					<JoyItem
						title='Biotech Startups'
						icon={<Beaker className='h-6 w-6' />}
						description='The combination of biology and technology provides opportunities for innovation that improves healthcare and solves complex biological problems.'
						resources={[
							{
								name: 'BioSpace',
								link: 'https://www.biospace.com/',
								description:
									'News, jobs, and updates from the biotech industry.',
							},
							{
								name: 'Biotech Primer',
								link: 'https://biotechprimer.com/',
								description:
									'Biotech education and training for people entering the industry.',
							},
							{
								name: 'STAT News',
								link: 'https://www.statnews.com/',
								description:
									'In-depth reporting on biotech and life sciences industries.',
							},
						]}
					/>
				</main>

				<footer className='mt-12 text-center'>
					<Link
						href='/'
						passHref>
						<Button variant='outline'>Back to Toolbox</Button>
					</Link>
				</footer>
			</div>
		</div>
	)
}

function JoyItem({ title, icon, description, resources }) {
	return (
		<Card className='bg-white bg-opacity-90'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2'>
					{icon}
					<span>{title}</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='text-gray-600 mb-4'>{description}</p>
				<h3 className='font-semibold mb-2'>Resources:</h3>
				<ul className='space-y-2'>
					{resources.map((resource, index) => (
						<li key={index}>
							<a
								href={resource.link}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center text-blue-600 hover:text-blue-800'>
								{resource.name}
								<ExternalLink className='h-4 w-4 ml-1' />
							</a>
							<p className='text-sm text-gray-500'>
								{resource.description}
							</p>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	)
}
