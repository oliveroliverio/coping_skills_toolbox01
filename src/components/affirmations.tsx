'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'

export function AffirmationsComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 font-['Bodoni_Moda',_serif]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Affirmations and Resources</h1>
          <p className="text-gray-600">Positive statements and support for your mental well-being</p>
        </header>

        <main className="space-y-16">
          <Section title="Daily Affirmations for Motivation and Well-being">
            {dailyAffirmations.map((affirmation, index) => (
              <AffirmationCard key={index} affirmation={affirmation.text} description={affirmation.description} />
            ))}
          </Section>

          <Section title="Mantras for Grounding and Self-Compassion">
            {mantras.map((mantra, index) => (
              <AffirmationCard key={index} affirmation={mantra.text} description={mantra.description} />
            ))}
          </Section>

          <Section title="Resources for Affirmations and Mental Health Support">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </Section>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-purple-600 mb-6">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  )
}

function AffirmationCard({ affirmation, description }: { affirmation: string; description: string }) {
  return (
    <Card className="bg-white bg-opacity-90 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-purple-600 break-words hyphens-auto leading-tight">
          {affirmation}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function ResourceCard({ resource }: { resource: { name: string; description: string; link: string } }) {
  return (
    <Card className="bg-white bg-opacity-90 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-purple-600 break-words hyphens-auto leading-tight">
          {resource.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-gray-600 mb-4">{resource.description}</p>
        <a
          href={resource.link}
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

const dailyAffirmations = [
  {
    text: "I am enough just as I am.",
    description: "This affirmation reinforces self-worth, reminding you that you don't need to \"do more\" or \"be more\" to be valuable."
  },
  {
    text: "My thoughts and feelings are valid, but they do not define me.",
    description: "Recognizes the importance of emotions but separates them from self-identity, reducing the overwhelming nature of negative thoughts."
  },
  {
    text: "I am resilient, and I have overcome difficult times before.",
    description: "A reminder of your inner strength and the resilience you have shown in the past, which can be called upon again."
  },
  {
    text: "I can take things one step at a time, and I don't have to rush my healing.",
    description: "Encourages patience with yourself and your healing process, eliminating pressure."
  },
  {
    text: "I choose to focus on small moments of joy today.",
    description: "This helps redirect attention to the small, positive things that can add up over time, even when things feel tough."
  },
  {
    text: "I am worthy of love, care, and kindness, especially from myself.",
    description: "A powerful affirmation for fostering self-compassion and combating feelings of unworthiness."
  },
  {
    text: "It's okay to not be okay; healing takes time, and I am on the right path.",
    description: "Normalizes struggle and reassures that you're on a journey toward healing."
  },
  {
    text: "My best effort is good enough, even if it looks different today.",
    description: "Encourages you to be gentle with yourself, understanding that some days are harder than others."
  },
  {
    text: "I can do hard things, and I have the strength to keep going.",
    description: "Reminds you of your ability to push through difficult circumstances."
  },
  {
    text: "I trust that this moment of difficulty will pass, and I will find peace again.",
    description: "Focuses on the impermanence of depressive episodes and the potential for future relief."
  }
]

const mantras = [
  {
    text: "This too shall pass.",
    description: "A timeless reminder that no emotional state is permanent, and brighter days will come."
  },
  {
    text: "Inhale peace, exhale fear.",
    description: "A grounding mantra to help anchor yourself in the present moment and let go of anxiety."
  },
  {
    text: "I am doing my best, and that is enough.",
    description: "Helps cultivate self-acceptance and alleviates the pressure to do more or be more."
  },
  {
    text: "I am not my illness. I am a person deserving of love and happiness.",
    description: "A mantra that helps separate your identity from your diagnosis, reinforcing that you deserve joy and love."
  },
  {
    text: "Breathe in calm, breathe out stress.",
    description: "A simple mantra to center yourself during moments of anxiety or stress."
  }
]

const resources = [
  {
    name: "Calm App",
    description: "A mindfulness and meditation app that offers positive affirmations, relaxation techniques, and guided meditation sessions to improve mental health and manage stress.",
    link: "https://www.calm.com/"
  },
  {
    name: "Insight Timer",
    description: "Offers thousands of free meditations, affirmations, and grounding exercises. Great for daily motivational affirmations.",
    link: "https://insighttimer.com/"
  },
  {
    name: "Headspace",
    description: "Focuses on mindfulness, including positive affirmations, stress reduction, and self-compassion tools.",
    link: "https://www.headspace.com/"
  },
  {
    name: "YouTube: Positive Affirmations for Depression",
    description: "A variety of guided affirmations specifically tailored to uplift those struggling with depression.",
    link: "https://www.youtube.com/results?search_query=positive+affirmations+for+depression"
  },
  {
    name: "TherapistAid: Affirmations Worksheets",
    description: "Free, printable affirmation worksheets designed to help shift negative thinking patterns.",
    link: "https://www.therapistaid.com/therapy-worksheets/affirmations/none"
  },
  {
    name: "The Depression Project",
    description: "Offers articles, support groups, and tools tailored for people with depression, including daily motivational messages and affirmations.",
    link: "https://thedepressionproject.com/"
  },
  {
    name: "National Institute of Mental Health (NIMH) Resources",
    description: "Comprehensive information on depression and ways to seek help, including coping strategies like affirmations.",
    link: "https://www.nimh.nih.gov/health/topics/depression"
  },
  {
    name: "The Miracle Morning by Hal Elrod",
    description: "A popular book on how morning routines, including affirmations, can transform your mindset and motivation.",
    link: "https://www.amazon.com/Miracle-Morning-Not-So-Obvious-Guaranteed-Transform/dp/0979019710"
  },
  {
    name: "The Gifts of Imperfection by Brené Brown",
    description: "A wonderful book on self-acceptance and resilience, filled with affirmations for embracing imperfections.",
    link: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X"
  },
  {
    name: "The Positive Mind Podcast",
    description: "Offers episodes filled with motivational affirmations and coping strategies.",
    link: "https://positivemindpodcast.com/"
  },
  {
    name: "The Mental Illness Happy Hour",
    description: "Real conversations about depression, affirmations, and mental health with a focus on finding hope and humor.",
    link: "https://mentalpod.com/"
  },
  {
    name: "PositivePsychology.com",
    description: "Offers research-backed affirmations and techniques to help reshape your mindset and deal with negative thought patterns.",
    link: "https://positivepsychology.com/"
  }
]