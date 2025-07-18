import { NextResponse } from 'next/server'
import { jobs } from '@/data/jobs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')
    const limit = parseInt(searchParams.get('limit') || '3')

    if (!jobId) {
      return NextResponse.json(
        { success: false, error: 'jobId parameter is required' },
        { status: 400 }
      )
    }

    // 対象の求人を取得
    const targetJob = jobs.find(job => job.id === jobId)
    if (!targetJob) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      )
    }

    // 同じカテゴリの求人を取得（自分を除く）
    const relatedJobs = jobs
      .filter(job => 
        job.category === targetJob.category && 
        job.id !== jobId
      )
      .slice(0, limit)

    // 同じカテゴリの求人が少ない場合は、他のカテゴリからも取得
    if (relatedJobs.length < limit) {
      const remainingCount = limit - relatedJobs.length
      const otherJobs = jobs
        .filter(job => 
          job.category !== targetJob.category && 
          job.id !== jobId &&
          !relatedJobs.some(related => related.id === job.id)
        )
        .slice(0, remainingCount)
      
      relatedJobs.push(...otherJobs)
    }

    return NextResponse.json({
      success: true,
      jobs: relatedJobs,
      total: relatedJobs.length
    })
  } catch (error) {
    console.error('Error fetching related jobs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch related jobs' },
      { status: 500 }
    )
  }
} 