import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { skillsData } from '../../data/mock';
import { Code, Wrench, Brain, Award } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: skillsData.languages,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: skillsData.tools,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI/ML Libraries",
      icon: <Brain className="w-6 h-6" />,
      skills: skillsData.mlLibraries,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Certifications",
      icon: <Award className="w-6 h-6" />,
      skills: skillsData.certifications,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently exploring advanced AI/ML techniques, cloud technologies, and modern web frameworks
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2">
                Deep Learning
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2">
                Cloud Computing
              </Badge>
              <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2">
                DevOps
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;