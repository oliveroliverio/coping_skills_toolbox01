/** @format */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function RelapsePreventionComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-['Bodoni_Moda',_serif]">
			<div className='container mx-auto px-4 py-8 max-w-3xl'>
				<header className='mb-8 text-center'>
					<h1 className='text-4xl font-bold text-blue-600 mb-2'>
						Mental Health Relapse Prevention Plan
					</h1>
					<p className='text-gray-600'>
						Your personalized guide to maintaining mental wellness
					</p>
				</header>

				<main className='space-y-8'>
					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Participant Information
						</h2>
						<p>
							<strong>Name:</strong> Oliver Oliverio
						</p>
						<p>
							<strong>Date:</strong> 09/15/2024
						</p>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Mental Health Symptoms
						</h2>
						<p>
							Common mental health symptoms that indicate you are
							struggling:
						</p>
						<ul className='list-disc list-inside ml-4 mt-2 space-y-2'>
							<li>
								Intrusive self-harming thoughts during either
								random times or times of crisis.
							</li>
							<li>
								These may be triggered by major events such as
								bad performance reviews or mistakes in a job or
								performance.
							</li>
							<li>
								They may also be triggered by minor events such
								as a cold shoulder or a frown from a stranger.
							</li>
							<li>
								Physical sensations include chest tightening or
								a pang of angst or dread.
							</li>
						</ul>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Warning Signs and Triggers
						</h2>
						<h3 className='text-xl font-medium text-blue-500 mb-2'>
							Early Warning Signs:
						</h3>
						<ul className='list-disc list-inside ml-4 space-y-2'>
							<li>Heightened irritability</li>
							<li>Future tripping</li>
							<li>Mind reading</li>
							<li>
								Presumptions or assumptions of situations,
								scenarios or people
							</li>
							<li>
								Loss of will-power or inspiration for hobbies,
								activities, or work
							</li>
						</ul>
						<h3 className='text-xl font-medium text-blue-500 mt-4 mb-2'>
							Common Triggers:
						</h3>
						<ul className='list-disc list-inside ml-4 space-y-2'>
							<li>
								Unexpected and undesirable reactions from people
								I talk to
							</li>
							<li>
								Feeling misunderstood or not positively received
							</li>
							<li>
								Self-doubt about personal qualities (e.g.,
								&quot;Maybe I&#39;m not as
								funny/charming/charismatic/eloquent/clear as I
								thought I was&quot;)
							</li>
						</ul>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Plan of Action
						</h2>
						<h3 className='text-xl font-medium text-blue-500 mb-2'>
							Self-Care Strategies:
						</h3>
						<ul className='list-disc list-inside ml-4 space-y-2'>
							<li>
								Change location when feeling stuck or paralyzed
							</li>
							<li>
								Talk to someone (about the task/problem or
								something else entirely)
							</li>
							<li>Engage in hobbies (e.g., playing piano)</li>
							<li>Try a new activity</li>
							<li>
								Think about launching a business/startup for
								motivation
							</li>
						</ul>
						<h3 className='text-xl font-medium text-blue-500 mt-4 mb-2'>
							Coping Skills:
						</h3>
						<ul className='list-disc list-inside ml-4 space-y-2'>
							<li>Change location</li>
							<li>
								TIPP (Temperature, Intense exercise, Paced
								breathing, Paired muscle relaxation)
							</li>
						</ul>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Support System
						</h2>
						<p>People and resources to reach out to for help:</p>
						<ul className='list-disc list-inside ml-4 mt-2 space-y-2'>
							<li>
								Old friends/family: Alex Salinas, Jordan DeVera,
								Tony Nakashima
							</li>
							<li>988 hotline</li>
							<li>Therapists/psychiatrists</li>
						</ul>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Professional Help
						</h2>
						<p>When and how to seek professional help:</p>
						<ol className='list-decimal list-inside ml-4 mt-2 space-y-2'>
							<li>During times of crisis, reach out to 988</li>
							<li>Message psychiatrist</li>
							<li>Contact therapist</li>
						</ol>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Emergency Plan
						</h2>
						<h3 className='text-xl font-medium text-blue-500 mb-2'>
							Immediate Steps:
						</h3>
						<ul className='list-disc list-inside ml-4 space-y-2'>
							<li>
								TIPP (Temperature, Intense exercise, Paced
								breathing, Paired muscle relaxation)
							</li>
							<li>Change of location</li>
						</ul>
						<h3 className='text-xl font-medium text-blue-500 mt-4 mb-2'>
							Emergency Contacts:
						</h3>
						<ul className='list-none ml-4 space-y-2'>
							<li>
								<strong>988</strong> - Crisis Hotline
							</li>
							<li>
								<strong>Mom:</strong> 909-314-9707
							</li>
							<li>
								<strong>Stephanie (sister):</strong>{' '}
								909-533-1566
							</li>
							<li>
								<strong>Alex Salinas:</strong> [Phone number]
							</li>
						</ul>
					</section>

					<section className='bg-white bg-opacity-90 p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-blue-600 mb-4'>
							Commitment
						</h2>
						<p className='italic'>
							&#34;I will commit to use this plan during times of
							crisis or when I need emotional help. This will
							serve as a totem for the dread and angst I feel when
							I`&#39;`ve lost control, when I&#39;ve lost hope,
							and when I&#39;ve lost others. This will help me
							find these and restore an energy, a self, that
							I&#39;ve never learned to develop, but now have the
							tools and motivation to do so.&#34;
						</p>
					</section>
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
