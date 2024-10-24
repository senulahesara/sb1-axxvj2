import { Link } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <AcademicCapIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">LMS</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/courses" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
              <AcademicCapIcon className="h-5 w-5" />
              <span>Courses</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
              <UserCircleIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;