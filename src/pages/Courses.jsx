import { useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const [courses] = useState([
    {
      id: 1,
      title: 'React Fundamentals',
      instructor: 'John Doe',
      level: 'Beginner',
      duration: '6 hours',
      enrolled: 1234,
      image: 'https://placehold.co/600x400'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      level: 'Advanced',
      duration: '8 hours',
      enrolled: 892,
      image: 'https://placehold.co/600x400'
    },
    {
      id: 3,
      title: 'Web Design Basics',
      instructor: 'Mike Johnson',
      level: 'Beginner',
      duration: '4 hours',
      enrolled: 2156,
      image: 'https://placehold.co/600x400'
    }
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Available Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link 
            key={course.id}
            to={`/courses/${course.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-1">by {course.instructor}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <span>{course.enrolled.toLocaleString()} students enrolled</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;