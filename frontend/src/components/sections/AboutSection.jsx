import React from 'react';
import { Card, CardContent } from '../ui/card';
import { aboutInfo } from '../../data/mock';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutInfo.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Focus Areas</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Machine Learning</li>
                  <li>• Full Stack Development</li>
                  <li>• Computer Vision</li>
                  <li>• Natural Language Processing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Interests</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• AI Research</li>
                  <li>• Web Technologies</li>
                  <li>• Data Science</li>
                  <li>• System Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            
            {aboutInfo.education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        {edu.cgpa && (
                          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                            CGPA: {edu.cgpa}
                          </div>
                        )}
                        {edu.current && (
                          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                            Current
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;