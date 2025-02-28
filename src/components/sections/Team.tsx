import React from 'react';
import { Twitter, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Nikita Xing',
      role: 'HR Manager',
      image: '/images/team-3.jpg'
    },
    {
      name: 'Leslie Alexander',
      role: 'CO-Founder',
     image: '/images/team-1.jpg'
    },
    {
      name: 'Wade Warren',
      role: 'UI Designer',
      image: '/images/team-2.jpg'
    },
    {
      name: 'Guy Hawkins',
      role: 'Product Designer',
      image: '/images/team-4.jpg'
    },
    {
      name: 'Ronald Richards',
      role: 'Customer Support',
      image: '/images/team-5.jpg'
    }
  ];

  return (
    <div className='bg-white dark:bg-gray-900'>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Introduction Card */}
        <div className="rounded-lg bg-indigo-600 p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our fantastic team</h2>
            <p className="mb-8">These people work on making our product best.</p>
          </div>
          <button className="bg-white text-indigo-600 rounded-full py-2 px-6 font-medium w-fit hover:bg-gray-100 transition-colors">
            Join the team
          </button>
        </div>

        {/* Team Member Cards */}
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-64 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              <div className="flex space-x-2">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TeamSection;