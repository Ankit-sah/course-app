'use client';

import React from 'react';
import { Card, Row, Col } from 'antd';
import { Course } from '../types/course';
import Link from 'next/link';
import Image from 'next/image';

const { Meta } = Card;

interface SimilarCoursesProps {
  courses?: Course[];
}

const SimilarCourses: React.FC<SimilarCoursesProps> = ({ courses = [] }) => {


  const coursesToShow = courses.length > 0 ? courses : [];

  return (
    <div style={{ padding: '48px 0', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#262626', marginBottom: '32px' }}>
          Similar Courses
        </h2>

        <Row gutter={[24, 24]}> 
          {coursesToShow.map((course) => (
            <Col xs={24} sm={12} lg={12} xl={8} key={course.id}>
              <div style={{ height: '100%' }}>
                <Link href={`/courses/${course.slug}`} style={{display:'block', height: '100%'}}>
                  <Card
                    hoverable
                    style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                    cover={
                      <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#f0f0f0' }}>
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                        />
                      </div>
                    }
                    actions={[
                      <div key="price" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#262626' }}>
                          Rs.{course.price}
                        </div>
                        <div style={{ fontSize: '14px', color: '#8c8c8c' }}>
                          {course.total_enrolled_students} Enrolled
                        </div>
                      </div>
                    ]}
                  >
                    <Meta
                      title={
                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#262626', lineHeight: '1.4' }}>
                          {course.title}
                        </div>
                      }
                      description={
                        <div className='line-clamp-4' style={{ color: '#595959', lineHeight: '1.5', minHeight: '96px' }} 
                        dangerouslySetInnerHTML={{ __html: course.description }}>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SimilarCourses;

