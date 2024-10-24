import { useState } from 'react';

function Profile() {
  const [profile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://placehold.co/200x200',
    bio: 'Passionate learner and software developer',
    progress: {
      coursesCompleted: 5,
      certificatesEarned: 3,
      hoursLearned: 48
    }
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <img 
            src={profile.avatar} 
            alt={profile.name}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>
        
        <p className="mt-4 text-gray-700">{profile.bio}</p>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {profile.progress.coursesCompleted}
            </div>
            <div className="text-sm text-gray-600">Courses Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {profile.progress.certificatesEarned}
            </div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {profile.progress.hoursLearned}
            </div>
            <div className="text-sm text-gray-600">Hours Learned</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={profile.name}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={profile.email}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
              defaultValue={profile.bio}
            ></textarea>
          </div>
          <button 
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;