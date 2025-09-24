'use client';

import React, { useEffect, useState } from 'react';
import { Spin, Alert } from 'antd';
import { useParams } from 'next/navigation';
import { Course, CourseApiResponse, OtherCoursesApiResponse } from '../../types/course';
import CoursePage from '../../components/CoursePage';


export default function Home() {
  const [courseData, setCourseData] = useState<Course | null>(null);
  const [otherCourses, setOtherCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams<{ course: string }>();
  const courseSlug = params?.course as string;

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        setError(null);
        debugger;
        console.log('Fetching course data...');
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/courses/course/public/${courseSlug?courseSlug:process.env.DEFAULT_COURSE}`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          }
        );

        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const apiResponse: CourseApiResponse = await response.json();
        console.log('API Response:', apiResponse);
        
        if (apiResponse.data) {
          setCourseData(apiResponse.data);
        } else {
          throw new Error(apiResponse.message || 'No course data found');
        }
      } catch (err) {
        console.error('Error fetching course data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch course data');
      } finally {
        setLoading(false);
      }
    };

    const fetchOtherCourses = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/courses/course/public`,
        {
          method: 'GET',
        }
      );
      const apiResponse: OtherCoursesApiResponse = await response.json();
      console.log('API Response:', apiResponse);
      if (apiResponse.data) {
        setOtherCourses(apiResponse.data?.docs?.filter((course) => course.slug !== courseSlug) ?? []);
      }
    };

    
    fetchCourseData();
    fetchOtherCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Spin size="large" />
          <p className="mt-4 text-gray-600">Loading course data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <Alert
            message="Error Loading Course"
            description={
              <div>
                <p>{error}</p>
                <p className="mt-2 text-sm">
                  Please check the console for more details.
                </p>
              </div>
            }
            type="error"
            showIcon
          />
          <button
            onClick={() => window.location.reload()}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Alert
          message="No Course Data"
          description="The course data could not be loaded."
          type="warning"
          showIcon
        />
      </div>
    );
  }

  return <CoursePage course={courseData} otherCourses={otherCourses}/>;
}