'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  description: string
  category: string
  features: string[]
}

interface DynamicJobCarouselProps {
  title: string
  apiUrl: string
  className?: string
}

export default function DynamicJobCarousel({ title, apiUrl, className = '' }: DynamicJobCarouselProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        if (data.success) {
          setJobs(data.jobs)
        } else {
          setError('データの取得に失敗しました')
        }
      } catch (err) {
        console.error('Error fetching jobs:', err)
        setError('データの取得に失敗しました')
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [apiUrl])

  if (isLoading) {
    return (
      <section className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={`bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="text-center py-8">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    )
  }

  if (jobs.length === 0) {
    return null
  }

  return (
    <section className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">🚀</span>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{job.title}</h3>
              <p className="text-gray-700 font-medium mb-2">{job.company}</p>
              <p className="text-gray-600 mb-2">📍 {job.location}</p>
              <p className="text-orange-600 font-bold mb-3">💰 {job.salary}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href={`/jobs/${job.id}`} 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  詳細を見る
                </Link>
                <FavoriteButton job={job} className="text-center" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 