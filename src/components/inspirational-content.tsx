'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Headphones, Video } from 'lucide-react'

export function InspirationalContentComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 font-['Bodoni_Moda',_serif]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Inspirational Content</h1>
          <p className="text-gray-600">Discover resources to keep you motivated and uplifted</p>
        </header>

        <main className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Encouraging Quotes</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard 
                title="BrainyQuote" 
                description="A large collection of motivational quotes from famous authors, thinkers, and leaders."
                link="https://www.brainyquote.com/"
              />
              <ResourceCard 
                title="Goodreads Quotes" 
                description="A treasure trove of inspirational quotes from books and authors."
                link="https://www.goodreads.com/quotes"
              />
              <ResourceCard 
                title="Inspire Me Today" 
                description="Daily inspiration with uplifting quotes, stories, and personal development articles."
                link="https://inspiremetoday.com/"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Book Passages</h2>
            <div className="space-y-4">
              <BookPassage 
                title="The Power of Now" 
                author="Eckhart Tolle"
                quote="Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life."
                description="A great resource for passages that encourage mindfulness and being present."
              />
              <BookPassage 
                title="The Alchemist" 
                author="Paulo Coelho"
                quote="When you want something, all the universe conspires in helping you to achieve it."
                description="Filled with motivational lessons about following one's dreams."
              />
              <BookPassage 
                title="Man's Search for Meaning" 
                author="Viktor Frankl"
                quote="When we are no longer able to change a situation, we are challenged to change ourselves."
                description="A deeply moving book that teaches about finding purpose, even in the most difficult circumstances."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Podcasts</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard 
                title="On Purpose with Jay Shetty" 
                description="Focuses on wisdom, mindfulness, and mental well-being, with interviews and motivational content."
                link="https://jayshetty.me/podcast/"
                icon={<Headphones className="h-6 w-6" />}
              />
              <ResourceCard 
                title="The Daily Stoic Podcast" 
                description="Short daily episodes filled with Stoic wisdom, life lessons, and inspiration."
                link="https://dailystoic.com/podcast/"
                icon={<Headphones className="h-6 w-6" />}
              />
              <ResourceCard 
                title="The Tony Robbins Podcast" 
                description="Features motivational talks, interviews, and insights from Tony Robbins and other leaders in personal development."
                link="https://www.tonyrobbins.com/podcasts/"
                icon={<Headphones className="h-6 w-6" />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Uplifting Videos</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard 
                title="TED Talk: How to Stay Calm When You Know You'll Be Stressed" 
                description="Inspires resilience in moments of stress and teaches coping strategies."
                link="https://www.ted.com/talks/daniel_levitin_how_to_stay_calm_when_you_know_you_ll_be_stressed"
                icon={<Video className="h-6 w-6" />}
              />
              <ResourceCard 
                title="MotivationHub YouTube Channel" 
                description="A channel with motivational speeches, compilations, and inspiring stories from influential people."
                link="https://www.youtube.com/channel/UCMTk_R_Y49jvq-HQXDmKI0Q"
                icon={<Video className="h-6 w-6" />}
              />
              <ResourceCard 
                title="Goalcast YouTube Channel" 
                description="Known for motivational videos and speeches from people who've overcome incredible challenges."
                link="https://www.youtube.com/channel/UCKZGVYnA7Ho7UgLwFdBLUpg"
                icon={<Video className="h-6 w-6" />}
              />
            </div>
          </section>
        </main>

        <footer className="mt-12 text-center">
          <Link href="/" passHref>
            <Button variant="outline">Back to Toolbox</Button>
          </Link>
        </footer>
      </div>
    </div>
  )
}

function ResourceCard({ title, description, link, icon = <ExternalLink className="h-6 w-6" /> }) {
  return (
    <Card className="bg-white bg-opacity-90">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-purple-600 hover:text-purple-800"
        >
          Visit Resource
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </CardContent>
    </Card>
  )
}

function BookPassage({ title, author, quote, description }) {
  return (
    <Card className="bg-white bg-opacity-90">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span>{title} by {author}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="italic text-gray-700 border-l-4 border-purple-300 pl-4 mb-4">
          "{quote}"
        </blockquote>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}