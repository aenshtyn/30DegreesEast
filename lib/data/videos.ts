export interface Video {
  id: string
  title: string
  description: string
  videoUrl: string
  category: 'teaching-learning' | 'systems-leverage' | 'work-identity' | 'coaching-education'
  publishedAt: string
}

// Sample video data - replace with actual videos
export const videos: Video[] = [
  {
    id: '1',
    title: 'Why Teaching Systems Matter',
    description: 'An introduction to building teaching systems that create leverage without burnout.',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID_1',
    category: 'teaching-learning',
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Building Leverage as an Educator',
    description: 'How to move from selling time to building systems that scale.',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID_2',
    category: 'systems-leverage',
    publishedAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'Transitioning Your Career Online',
    description: 'Strategic thinking for professionals moving into digital work.',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID_3',
    category: 'work-identity',
    publishedAt: '2024-01-05',
  },
  {
    id: '4',
    title: 'What Makes Good Coaching',
    description: 'The foundations of effective coaching and teaching frameworks.',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID_4',
    category: 'coaching-education',
    publishedAt: '2024-01-01',
  },
]

export const categories = {
  'teaching-learning': 'Teaching & Learning',
  'systems-leverage': 'Systems & Leverage',
  'work-identity': 'Work & Identity',
  'coaching-education': 'Coaching & Education',
} as const

export function getVideosByCategory(category: Video['category']): Video[] {
  return videos.filter((video) => video.category === category)
}

export function getAllCategories(): Array<{ id: Video['category']; name: string }> {
  return Object.entries(categories).map(([id, name]) => ({
    id: id as Video['category'],
    name,
  }))
}
