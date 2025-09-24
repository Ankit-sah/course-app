import React from 'react';
import { Card, Button } from 'antd';
import { Course } from '../types/course';

interface CourseSidebarProps {
  course: Course;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ course }) => {
  const price = parseFloat(course.price) || 0;
  const strikePrice = parseFloat(course.strike_price) || 0;


  const features = [
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-5 w-5 flex-shrink-0">
          <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"></path>
        </svg>
      ),
      text: `${course.total_video_length || '18'} hrs Playable video`
    },
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0">
          <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
        </svg>
      ),
      text: 'Downloadable Resources'
    },
    {
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 flex-shrink-0">
          <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 0 0 1 5.25v9.5A2.25 2.25 0 0 0 3.25 17h13.5A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H3.25Zm.943 8.752a.75.75 0 0 1 .055-1.06L6.128 9l-1.88-1.693a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.06-.055ZM9.75 10.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd"></path>
        </svg>
      ),
      text: 'MCQ Quizes'
    }
  ];

  return (
    <div className="space-y-6 sticky top-6">
      <Card className="border-gray-300 rounded-lg shadow-lg">
        {/* Course Thumbnail */}
        <div className="ant-card-cover">
          <div className="w-full flex justify-center">
            <img 
              src={course.thumbnail} 
              alt="Course thumbnail" 
              className="p-0 sm:p-3 pb-1 rounded-lg w-full h-auto sm:h-48 md:h-48 lg:h-48 object-contain"
              onError={(e) => {
                e.currentTarget.src = '/default-thumbnail.jpg';
              }}
            />
          </div>
        </div>
        
        {/* Course Features */}
        <div className="ant-card-body" style={{ padding: 0 }}>
          <div>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="h-auto min-h-12 bg-[#F8FAFC] flex items-center py-3 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-gray-200 last:border-b-0"
              >
                {feature.icon}
                <p className="text-sm sm:text-base ml-2 sm:ml-3 text-[#080404] font-medium font-roboto overflow-hidden text-ellipsis">
                  {feature.text}
                </p>
              </div>
            ))}
            
            {/* Pricing */}
            <div className="flex flex-wrap items-center h-auto min-h-12 py-3 px-4 sm:px-6 md:px-8 lg:px-10 gap-2 sm:gap-4 bg-white">
              <p className="text-xl sm:text-2xl font-medium text-gray-900">
                Rs.{price}
              </p>
              {strikePrice > price && (
                <p className="text-base sm:text-lg font-medium text-[#0F172A] line-through opacity-20">
                  Rs.{strikePrice}
                </p>
              )}

              {course.is_free && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  FREE
                </span>
              )}
            </div>
            
            {/* Buy Now Button */}
            <div className="flex justify-center items-center my-4 px-4 sm:px-6">
              <Button 
                type="primary" 
                className="!bg-purple-600 w-full max-w-80 h-10 sm:h-12 text-sm sm:text-base font-normal text-white rounded-lg border-0"
              >
                {course.is_free ? 'Enroll for Free' : 'Buy now'}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Info Card */}
      {/* <Card title="Course Details" className="shadow-lg">
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium text-gray-900">{course.total_video_length} hours</span>
          </div>
          <div className="flex justify-between">
            <span>Language:</span>
            <span className="font-medium text-gray-900">{course.language || 'English'}</span>
          </div>
          <div className="flex justify-between">
            <span>Students:</span>
            <span className="font-medium text-gray-900">{course.total_enrolled_students}</span>
          </div>
          <div className="flex justify-between">
            <span>Access:</span>
            <span className="font-medium text-gray-900">Lifetime</span>
          </div>
        </div>
      </Card> */}

      {/* Certificate Card */}
      {/* <Card className="shadow-lg border-l-4 border-blue-500">
        <div className="text-center">
          <div className="text-2xl mb-2">📜</div>
          <h4 className="font-semibold text-gray-900 mb-2">Certificate of Completion</h4>
          <p className="text-gray-600 text-sm">
            Get a certificate after completing the course to showcase your skills.
          </p>
        </div>
      </Card> */}

      {/* Support Card */}
      {/* <Card className="shadow-lg border-l-4 border-green-500">
        <div className="text-center">
          <div className="text-2xl mb-2">💬</div>
          <h4 className="font-semibold text-gray-900 mb-2">Instructor Support</h4>
          <p className="text-gray-600 text-sm">
            Get help directly from the instructor through Q&A section.
          </p>
        </div>
      </Card> */}
    </div>
  );
};

export default CourseSidebar;