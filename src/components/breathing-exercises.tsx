/** @format */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Progress } from '@/components/ui/progress'

const breathingExercises = [
	{
		id: 'box-breathing',
		name: 'Box Breathing',
		instructions: [
			'Inhale slowly through your nose for 4 seconds',
			'Hold your breath for 4 seconds',
			'Exhale slowly through your mouth for 4 seconds',
			'Hold your breath for 4 seconds',
			'Repeat the cycle',
		],
		duration: 16,
		cycles: 4,
	},
	{
		id: '4-7-8-breathing',
		name: '4-7-8 Breathing',
		instructions: [
			'Inhale quietly through your nose for 4 seconds',
			'Hold your breath for 7 seconds',
			'Exhale completely through your mouth for 8 seconds',
			'Repeat the cycle',
		],
		duration: 19,
		cycles: 4,
	},
	{
		id: 'deep-belly-breathing',
		name: 'Deep Belly Breathing',
		instructions: [
			'Place one hand on your chest and the other on your belly',
			'Inhale deeply through your nose, feeling your belly expand',
			'Exhale slowly through your mouth, feeling your belly contract',
			'Focus on the movement of your belly, not your chest',
			'Repeat for several breaths',
		],
		duration: 30,
		cycles: 5,
	},
]

export function BreathingExercisesComponent() {
	const [activeExercise, setActiveExercise] = useState(null)
	const [timer, setTimer] = useState(0)
	const [isActive, setIsActive] = useState(false)
	const [currentStep, setCurrentStep] = useState(0)

	useEffect(() => {
		let interval = null
		if (isActive && timer > 0) {
			interval = setInterval(() => {
				setTimer((timer) => timer - 1)
			}, 1000)
		} else if (isActive && timer === 0) {
			clearInterval(interval)
			if (
				activeExercise &&
				currentStep < activeExercise.instructions.length - 1
			) {
				setCurrentStep(currentStep + 1)
				setTimer(
					activeExercise.duration / activeExercise.instructions.length
				)
			} else {
				setIsActive(false)
				setCurrentStep(0)
			}
		}
		return () => clearInterval(interval)
	}, [isActive, timer, currentStep, activeExercise])

	const startExercise = (exercise) => {
		setActiveExercise(exercise)
		setTimer(exercise.duration / exercise.instructions.length)
		setCurrentStep(0)
		setIsActive(true)
	}

	const stopExercise = () => {
		setIsActive(false)
		setActiveExercise(null)
		setTimer(0)
		setCurrentStep(0)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-['Bodoni_Moda',_serif] p-6">
			<header className='mb-8'>
				<h1 className='text-4xl font-bold text-center text-blue-600'>
					Meditative Breathing Exercises
				</h1>
				<p className='text-center text-gray-600 mt-2'>
					Find calm and focus with these breathing techniques
				</p>
			</header>

			<main className='container mx-auto max-w-3xl'>
				<Card className='mb-8 bg-white bg-opacity-90'>
					<CardHeader>
						<CardTitle>How to Use These Exercises</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Each exercise below includes step-by-step
							instructions and a timer to guide you through the
							process. Choose an exercise, find a comfortable
							position, and click &quot;Start&quot; when
							you&apos;re ready to begin. Remember to breathe
							naturally and don&apos;t force your breath. If you
							feel uncomfortable at any point, stop the exercise
							and return to your normal breathing.
						</p>
					</CardContent>
				</Card>

				<Accordion
					type='single'
					collapsible
					className='mb-8'>
					{breathingExercises.map((exercise) => (
						<AccordionItem
							key={exercise.id}
							value={exercise.id}>
							<AccordionTrigger>{exercise.name}</AccordionTrigger>
							<AccordionContent>
								<ol className='list-decimal list-inside mb-4'>
									{exercise.instructions.map(
										(instruction, index) => (
											<li
												key={index}
												className='mb-2'>
												{instruction}
											</li>
										)
									)}
								</ol>
								<Button onClick={() => startExercise(exercise)}>
									Start {exercise.name}
								</Button>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				{activeExercise && (
					<Card className='mb-8 bg-white bg-opacity-90'>
						<CardHeader>
							<CardTitle>{activeExercise.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-2xl font-bold mb-4'>
								{activeExercise.instructions[currentStep]}
							</p>
							<Progress
								value={
									(timer /
										(activeExercise.duration /
											activeExercise.instructions
												.length)) *
									100
								}
								className='mb-4'
							/>
							<p className='text-xl mb-4'>
								Time remaining: {timer} seconds
							</p>
							<Button
								onClick={stopExercise}
								variant='destructive'>
								Stop Exercise
							</Button>
						</CardContent>
					</Card>
				)}
			</main>

			<footer className='mt-12 text-center'>
				<Link
					href='/'
					passHref>
					<Button variant='outline'>Back to Toolbox</Button>
				</Link>
			</footer>
		</div>
	)
}
