'use client';

import React from 'react';
import { Avatar, Collapse, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Course } from '../types/course';

const { Panel } = Collapse;

interface CourseContentProps {
  course: Course;
}

const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
  console.log(course);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderDescription = () => (
    <div className="space-y-6" id="description">
      <div>
        <h3 className="text-xl font-semibold mb-4">Course Description</h3>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: course.description }}
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Certification</h3>
        <p className="text-gray-700 leading-relaxed">
          At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous
          learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates
          your expertise but also opens doors to new opportunities in your chosen field.
        </p>
      </div>
    </div>
  );

  const renderInstructor = () => (
    <div className="space-y-6" id="instructor">
      <h3 className="text-xl font-semibold mb-4">Instructor</h3>
      <div className="flex items-start space-x-4">
        <Avatar
          size={64}
          src={course.teacher.image}
          icon={<UserOutlined />}
          className="flex-shrink-0"
        />
        <div>
          <h4 className="text-lg font-medium">{course.teacher.name}</h4>
          <p className="text-gray-600 mb-2">{course.teacher.holding_degree || 'Degree'}</p>
          <p className="text-gray-700 leading-relaxed">
            {course.teacher.intro || 'This interactive e-learning Class will introduce you to the subject matter in a comprehensive and engaging way.'}
          </p>
        </div>
      </div>
    </div>
  );

  const renderSyllabus = () => (
    <div className="space-y-6" id="syllabus">
      <h3 className="text-xl font-semibold mb-4">Syllabus</h3>
      <Collapse className="bg-white">
        {course.chapters.map((chapter) => (
          <Panel
            header={
              <div className="flex justify-between items-center w-full">
                <span className="font-medium">{chapter.chapter_name}</span>
                <span className="text-sm text-gray-500">
                  {chapter.lessons.length} Lessons {chapter.total_length} hour
                </span>
              </div>
            }
            key={chapter.id}>
            <div className="space-y-2">
              {chapter.lessons.map((lesson) => (
                <div key={lesson.id} className="space-x-2 p-2 hover:bg-gray-50 rounded">
                  <div className='flex space-x-2'>
                    <span className="text-gray-800 font-medium">{lesson.lesson_name}</span>
                    {lesson.is_free && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Free</span>
                    )}
                  </div>
                  {
                    lesson.description && (
                      <p className='text-gray-600 mt-1 text-sm'>
                        {lesson.description}
                      </p>
                    )
                  }
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </div>
  )

  return (
    <div className="bg-white">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {course.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {course.short_description}
        </p>
      </div>

      <div className="flex flex-row justify-start gap-2 md:gap-4 lg:gap-6 w-full overflow-x-auto">
         <Button onClick={() => scrollToId('description')}>Description</Button>
         <Button onClick={() => scrollToId('instructor')}>Instructor</Button>
         <Button onClick={() => scrollToId('syllabus')}>Syllabus</Button>
      </div>
      {renderDescription()}
      {renderInstructor()}
      {renderSyllabus()}
    </div>
  );
};

export default CourseContent;

