// src/pages/MyClasses.js
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import useCart from '../hooks/useCart';

const MyClasses = () => {
  const [courses, setCourses] = useState([]);
  const { handlePlusClick } = useCart();

  useEffect(() => {
    fetch('src/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredCourses = data.courses.filter(course => course.id >= 4 && course.id <= 6);
        setCourses(filteredCourses);
      })
      .catch((error) => console.error('Error fetching the courses:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            progress={course.progress}
            icon={course.icon}
            bgColor={course.bgColor}
            onPlusClick={handlePlusClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
