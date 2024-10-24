import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const [course] = useState({
    id,
    title: 'React Fundamentals',
    instructor: 'John Doe',
    description: 'Learn the fundamentals of React including components, props, state, and more.',
    level: 'Beginner',
    duration: '6 hours',
    enrolled: 1234,
    image: 'https://placehold.co/600x400',
    modules: [
      {
        id: 1,
        title: 'Introduction to React',
        lessons: [
          { id: 1, title: 'What is React?', duration: '15 min', completed: true },
          { id: 2, title: 'Setting up your environment', duration: '20 min', completed: true },
          { id: 3, title: 'Creating your first component', duration: '25 min', completed: false }
        ]
      },
      {
        id: 2,
        title: 'React Components',
        lessons: [
          { id: 4, title: 'Component Props', duration: '30 min', completed: false },
          { id: 5, title: 'State Management', duration: '35 min', completed: false },
          { id: 6, title: 'Lifecycle Methods', duration: '25 min', completed: false }
        ]
      }
    ]
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-gray-600 mt-2">by {course.instructor}</p>
          
          <div className="mt-4 flex space-x-4 text-sm text-gray-600">
            <span>{course.level}</span>
            <span>{course.duration}</span>
            <span>{course.enrolled.toLocaleString()} students</span>
          </div>
          
          <p className="mt-4 text-gray-700">{course.description}</p>
          
          <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Start Learning
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Course Content</h2>
        <div className="space-y-4">
          {course.modules.map(module => (
            <div key={module.id} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
              <div className="space-y-2">
                {module.lessons.map(lesson => (
                  <div 
                    key={lesson.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <div className="flex items-center space-x-2">
                      {lesson.completed ? (
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                      )}
                      <span>{lesson.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;