import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { experienceData } from '../../data/mock';
import { MapPin, Calendar, Building2, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional journey building scalable solutions and innovative applications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'
                }`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg">
                          <Building2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {experience.position}
                              </h3>
                              <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                                {experience.company}
                              </p>
                            </div>
                            <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                              {experience.type}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{experience.duration}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {experience.description}
                          </p>
                          
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Looking forward to contributing to innovative projects and growing with a dynamic team
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2">
                Full-time Opportunities
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2">
                Remote Work
              </Badge>
              <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2">
                Tech Leadership
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;