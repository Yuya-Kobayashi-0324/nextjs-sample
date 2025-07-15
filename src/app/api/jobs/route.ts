import { NextRequest, NextResponse } from 'next/server';
import { jobs } from '@/data/jobs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  const feature = searchParams.get('feature');

  // ページネーション設定
  const jobsPerPage = 10;
  const currentPage = page ? parseInt(page) : 1;

  // フィルタリング
  let filteredJobs = jobs;

  // カテゴリフィルター
  if (category) {
    filteredJobs = filteredJobs.filter(job => job.category === category);
  }

  // 特徴フィルター
  if (feature) {
    filteredJobs = filteredJobs.filter(job => job.features.includes(feature));
  }

  // 検索フィルター
  if (search) {
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  // ページネーション
  const totalJobs = filteredJobs.length;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  return NextResponse.json({
    jobs: currentJobs,
    totalJobs,
    currentPage,
    totalPages: Math.ceil(totalJobs / jobsPerPage),
    hasNextPage: endIndex < totalJobs,
    hasPrevPage: currentPage > 1
  });
} 