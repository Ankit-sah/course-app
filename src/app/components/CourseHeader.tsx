import React from 'react';
import { Card, Rate, Tag } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Course } from '../types/course';

interface CourseHeaderProps {
  course: Course;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ course }) => {
  // Calculate total lessons count
  const totalLessons = course.chapters?.reduce((total, chapter) => 
    total + (chapter.lessons?.length || 0), 0
  ) || 0;

  // Calculate discount percentage
  const price = parseFloat(course.price) || 0;
  const strikePrice = parseFloat(course.strike_price) || 0;
  const discountPercentage = strikePrice > price 
    ? Math.round((1 - price / strikePrice) * 100)
    : 0;

  // Parse what you'll learn from HTML string
  const parseWhatYouLearn = (htmlString: string) => {
    if (!htmlString) return [];
    try {
      // Simple parsing - extract text from list items
      const items = htmlString.match(/<li[^>]*>(.*?)<\/li>/g) || [];
      return items.map(item => item.replace(/<[^>]*>/g, '').trim()).filter(Boolean);
    } catch {
      return [];
    }
  };

  const whatYouLearnItems = parseWhatYouLearn(course.whatyoulearn);

  return (
    <Card className="shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Thumbnail */}
        <div className="md:col-span-1">
          <div className="relative group">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 md:h-56 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = '/default-thumbnail.jpg';
              }}
            />
            {course.thumbnail_video && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircleOutlined className="text-white text-4xl" />
              </div>
            )}
          </div>
        </div>

        {/* Course Info */}
        <div className="md:col-span-2">
          <Tag color="blue" className="mb-3">{course.category?.name || 'Uncategorized'}</Tag>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {course.title}
          </h1>
          <div 
            className="text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: course.description }}
          />
          
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Rate disabled defaultValue={4.5} className="text-sm" />
              <span className="text-gray-700 font-medium">4.5</span>
              <span className="text-gray-500">(0 reviews)</span>
            </div>
            
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <span>📚 {totalLessons} lessons</span>
              <span>⏱️ {course.total_video_length} hours</span>
              <span>👥 {course.total_enrolled_students} students</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <img
              src={course.teacher?.image}
              alt={course.teacher?.name}
              className="w-10 h-10 rounded-full"
              onError={(e) => {
                e.currentTarget.src = '/default-avatar.jpg';
              }}
            />
            <div>
              <p className="font-medium text-gray-900">{course.teacher?.name || 'Unknown Instructor'}</p>
              <p className="text-gray-600 text-sm">Instructor</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              ${price}
            </span>
            {discountPercentage > 0 && (
              <>
                <span className="text-lg text-gray-500 line-through">
                  ${strikePrice}
                </span>
                <Tag color="red" className="ml-2">
                  {discountPercentage}% OFF
                </Tag>
              </>
            )}
            {course.is_free && (
              <Tag color="green" className="ml-2">FREE</Tag>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseHeader;