import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [stats] = useState({
    enrolledCourses: 3,
    completedCourses: 1,
    inProgress: 2,
    achievements: 5
  });

  const [recentCourses] = useState([
    { id: 1, title: 'React Fundamentals', progress: 75 },
    { id: 2, title: 'Advanced JavaScript', progress: 30 },
    { id: 3, title: 'Web Design Basics', progress: 100 }
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Enrolled Courses</h3>
          <p className="text-2xl font-bold text-indigo-600">{stats.enrolledCourses}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Completed</h3>
          <p className="text-2xl font-bold text-green-600">{stats.completedCourses}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">In Progress</h3>
          <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Achievements</h3>
          <p className="text-2xl font-bold text-purple-600">{stats.achievements}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Courses</h2>
        <div className="space-y-4">
          {recentCourses.map(course => (
            <div key={course.id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <Link to={`/courses/${course.id}`} className="text-lg text-indigo-600 hover:text-indigo-800">
                  {course.title}
                </Link>
                <span className="text-sm text-gray-500">{course.progress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;