import React from 'react';
import { Course } from '../types/course';
import CourseHeader from './CourseHeader';
import CourseContent from './CourseContent';
import CourseInstructor from './CourseInstructor';
import CourseSidebar from './CourseSidebar';
import Footer from './Footer';
import Header from './Header';
import SimilarCourses from './SimilarCourses';

interface CoursePageProps {
  course: Course;
  otherCourses: Course[];
}

const CoursePage: React.FC<CoursePageProps> = ({ course, otherCourses }) => {
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>No course data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header (simplified) */}
    \<Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">  
            <CourseContent course={course} />
            <SimilarCourses courses={otherCourses}/>
            
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>

      {/* Footer */}
        <Footer />
    </div>
  );
};

export default CoursePage;