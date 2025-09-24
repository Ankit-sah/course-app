import React from 'react';
import { Card, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface Instructor {
  id: string;
  name: string;
  image: string;
  holding_degree: string;
  intro: string;
}

interface CourseInstructorProps {
  instructor: Instructor;
}

const CourseInstructor: React.FC<CourseInstructorProps> = ({ instructor }) => {
  return (
    <Card title="Instructor" className="shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-24 h-24 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/default-avatar.jpg';
              e.currentTarget.className = 'w-24 h-24 rounded-full object-cover bg-gray-200 flex items-center justify-center';
              e.currentTarget.innerHTML = '<UserOutlined className="text-2xl text-gray-400" />';
            }}
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
          {instructor.holding_degree && (
            <p className="text-gray-600 mb-2">{instructor.holding_degree}</p>
          )}
          <p className="text-gray-600 mb-4">
            {instructor.intro || 'Experienced instructor with a passion for teaching and sharing knowledge.'}
          </p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Rate disabled defaultValue={4.5} className="text-sm" />
              <span className="text-gray-700 font-medium">4.5 Instructor Rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">15+</p>
              <p className="text-gray-600 text-sm">Reviews</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{instructor.name.includes('Teacher') ? '1000+' : '500+'}</p>
              <p className="text-gray-600 text-sm">Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">5+</p>
              <p className="text-gray-600 text-sm">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseInstructor;