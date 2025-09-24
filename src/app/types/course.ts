export interface Course {
  id: string;
  category: {
    id: string;
    parent: {
      id: string;
      created_at: string;
      updated_at: string;
      slug: string;
      image: string;
      name: string;
      priority: number;
      course_type: string;
      is_publish: boolean;
      parent: null;
    };
    created_at: string;
    updated_at: string;
    slug: string;
    image: string;
    name: string;
    priority: number;
    is_free: boolean;
    course_type: string;
    is_publish: boolean;
  };
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  short_description: string;
  description: string;
  language: string | null;
  price: string;
  strike_price: string;
  thumbnail: string;
  thumbnail_video: string;
  is_free: boolean;
  whatyoulearn: string;
  certification: string;
  course_type: string;
  total_video_length: string;
  course_expiry_days: number;
  is_publish: boolean;
  priority: number;
  is_featured: boolean;
  seo: {
    meta_title: string;
    meta_robots: string;
    social_image: string;
    canonical_url: string;
    meta_description: string;
  };
  teacher: {
    id: string;
    name: string;
    image: string;
    holding_degree: string;
    intro: string;
  };
  is_purchased: boolean;
  chapters_count: number;
  total_enrolled_students: number;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  created_at: string;
  updated_at: string;
  chapter_name: string;
  total_length: string;
  course: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  created_at: string;
  updated_at: string;
  lesson_name: string;
  lesson_type: string;
  file: string;
  description: string;
  is_free: boolean;
}

export interface CourseApiResponse {
  title: string;
  message: string;
  data: Course;
}

export interface OtherCoursesApiResponse {
  title: string;
  message: string;
  data: {
    docs: Course[];
  };
}