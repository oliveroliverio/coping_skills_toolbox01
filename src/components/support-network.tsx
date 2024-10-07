/** @format */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
import { PlusCircle, X } from 'lucide-react'

export function SupportNetworkComponent() {
	const [contacts, setContacts] = useState([
		{
			id: 1,
			name: 'Alex Salinas',
			met: 'Grade School (Sacred Heart Academy)',
			contact: '909-213-5708',
			image: '/AlexSalinas.jpg',
		},
		{
			id: 2,
			name: 'Jordan DeVera',
			met: 'Grade School',
			contact: '909-533-1566',
			image: '/Group.jpg',
		},
		{
			id: 3,
			name: 'Leah Ehinger',
			met: 'Therapist',
			contact: 'leah.ehinger@frnmail.com',
			image: '/Leah.jpg',
		},
	])

	const [newContact, setNewContact] = useState({
		name: '',
		met: '',
		contact: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setNewContact((prev) => ({ ...prev, [name]: value }))
	}

	// const addContact = () => {
	// 	if (newContact.name && newContact.met && newContact.contact) {
	// 		setContacts((prev) => [
	// 			...prev,
	// 			{ ...newContact, id: Date.now(), image: null as string | null },
	// 		])
	// 		setNewContact({ name: '', met: '', contact: '' })
	// 	}
	// }

	const removeContact = (id: number) => {
		setContacts((prev) => prev.filter((contact) => contact.id !== id))
	}
	const handleImageUpload = (
		id: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = e.target.files
		if (files && files.length > 0) {
			const file = files[0]
			const reader = new FileReader()
			reader.onloadend = () => {
				setContacts((prev) =>
					prev.map((contact) =>
						contact.id === id
							? { ...contact, image: reader.result as string }
							: contact
					)
				)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 font-['Bodoni_Moda',_serif] p-6">
			<header className='mb-8'>
				<h1 className='text-4xl font-bold text-center text-blue-600'>
					My Support Network
				</h1>
				<p className='text-center text-gray-600 mt-2'>
					The people who help me stay strong
				</p>
			</header>

			<main className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{contacts.map((contact) => (
						<Card
							key={contact.id}
							className='bg-white bg-opacity-90'>
							<CardHeader className='flex flex-row justify-between items-start'>
								<CardTitle>{contact.name}</CardTitle>
								<Button
									variant='ghost'
									size='icon'
									onClick={() => removeContact(contact.id)}>
									<X className='h-4 w-4' />
									<span className='sr-only'>
										Remove contact
									</span>
								</Button>
							</CardHeader>
							<CardContent>
								<p>
									<strong>How we met:</strong> {contact.met}
								</p>
								<p>
									<strong>Contact:</strong> {contact.contact}
								</p>
								<div className='mt-4'>
									{contact.image ? (
										<img
											src={contact.image}
											alt={`Photo of ${contact.name}`}
											className='w-full h-48 object-cover rounded-md'
										/>
									) : (
										<div className='w-full h-48 bg-gray-200 rounded-md flex items-center justify-center'>
											<Label
												htmlFor={`image-${contact.id}`}
												className='cursor-pointer'>
												<PlusCircle className='h-12 w-12 text-gray-400' />
												<span className='sr-only'>
													Upload image
												</span>
											</Label>
											<Input
												type='file'
												id={`image-${contact.id}`}
												accept='image/*'
												className='hidden'
												onChange={(e) =>
													handleImageUpload(
														contact.id,
														e
													)
												}
											/>
										</div>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<Card className='mt-8 bg-white bg-opacity-90'>
					<CardHeader>
						<CardTitle>Add New Contact</CardTitle>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={(e) => {
								e.preventDefault()
								// addContact()
							}}
							className='space-y-4'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									name='name'
									value={newContact.name}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor='met'>How you met</Label>
								<Input
									id='met'
									name='met'
									value={newContact.met}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div>
								<Label htmlFor='contact'>
									Contact information
								</Label>
								<Input
									id='contact'
									name='contact'
									value={newContact.contact}
									onChange={handleInputChange}
									required
								/>
							</div>
							<Button type='submit'>Add Contact</Button>
						</form>
					</CardContent>
				</Card>
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
