import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { projectsData, projectCategories } from '../../data/mock';
import { Github, ExternalLink, Eye, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions combining AI/ML expertise with modern web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Filter by:</span>
          </div>
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleProjects(6);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    project.category === 'AI/ML' 
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  } text-white`}>
                    {project.category}
                  </Badge>
                </div>
                {project.status === 'completed' && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      Completed
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      +{project.techStack.length - 3} more
                    </Badge>
                  )}
                </div>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-600 dark:text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.liveUrl ? (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="flex-1"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
            >
              Load More Projects
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {projectsData.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {projectsData.filter(p => p.category === 'AI/ML').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">AI/ML Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              {projectsData.filter(p => p.category === 'Web').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Web Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;