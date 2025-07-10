// Mock data for the portfolio website
export const personalInfo = {
  name: "Moksha Sai Kandimalla",
  title: "AI/ML Engineer & Full Stack Developer",
  tagline: "Building intelligent systems and scalable web solutions",
  email: "mokshasai2003@gmail.com",
  phone: "+91 7095892194",
  location: "India",
  resumeUrl: "/resume.pdf", // This will be replaced with actual resume
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mokshasai-kandimalla-780845261/",
    github: "https://github.com/Mokshasai0108",
    email: "mailto:mokshasai2003@gmail.com"
  }
};

export const aboutInfo = {
  description: "I am a passionate AI/ML Engineer and Full Stack Developer currently pursuing my Master's in Artificial Intelligence at Thapar Institute of Engineering and Technology. With hands-on experience in developing intelligent systems and scalable web applications, I specialize in creating innovative solutions that bridge the gap between cutting-edge AI research and practical implementation. My expertise spans from machine learning algorithms to full-stack web development, with a focus on creating user-centric applications that solve real-world problems.",
  education: [
    {
      institution: "Thapar Institute of Engineering and Technology",
      degree: "Master of Technology in Artificial Intelligence",
      location: "Punjab, India",
      duration: "Aug 2025 - May 2027",
      current: true
    },
    {
      institution: "Gitam University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      location: "Hyderabad, India",
      duration: "Aug 2021 - May 2025",
      cgpa: "7.67"
    }
  ]
};

export const skillsData = {
  languages: ["Python", "C", "HTML5", "CSS3", "JavaScript", "React", "SQL"],
  tools: ["Visual Studio Code", "Jupyter", "Google Colab", "Microsoft 365", "Git/GitHub"],
  mlLibraries: ["scikit-learn", "TensorFlow", "Keras", "OpenCV", "XGBoost", "LLM", "Natural Language Processing", "Computer Vision", "PCA", "PSO", "Bayesian Optimization"],
  certifications: ["IBM Data Science", "Google AI Essentials", "Google Data Analytics"]
};

export const experienceData = [
  {
    id: 1,
    company: "G-Electra Club, Gitam University",
    position: "Web Development Intern",
    location: "Hyderabad, India",
    duration: "May 2024 - Oct 2024",
    type: "Internship",
    description: "Collaborated with a cross-functional team to develop a dynamic web application for G-Electra Club using React.js, implementing responsive and interactive UI components.",
    achievements: [
      "Developed and integrated features including landing page, event calendar, FAQ section, login portal, and chat interface for project teams",
      "Designed structured user flows for admins (edit and manage members, project status) and club members (project proposals, updates, team interactions)",
      "Ensured seamless UX by implementing role-based access control and interactive components like notice boards, project management dashboards, and team directories",
      "Actively participated in Agile development cycles, contributing to sprint planning, peer code reviews, and iterative UI/UX improvements"
    ]
  },
  {
    id: 2,
    company: "Things Alive Solutions pvt Ltd",
    position: "Web Development Intern",
    location: "Bangalore, India",
    duration: "May 2024 - June 2024",
    type: "Internship",
    description: "Designed UI in Figma and implemented responsive components in React.js, integrating real-time vehicle data and collaborating with backend teams for smooth API flow.",
    achievements: [
      "Designed the UI in Figma and implemented responsive components in React.js",
      "Integrated real-time vehicle data and collaborated with backend teams for smooth API flow",
      "Conducted usability testing, improved UI, and ensured cross-browser compatibility and performance"
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Distributed Denial of Service Attack Detection",
    category: "AI/ML",
    description: "A DDoS detection model using PCA for dimensionality reduction and PSO for feature selection, optimized with Random Forest classifier via Bayesian Optimization.",
    techStack: ["Python", "Machine Learning", "PCA", "PSO", "Random Forest", "Bayesian Optimization"],
    features: [
      "Achieved high accuracy on network traffic data",
      "Evaluated performance with ROC-AUC, confusion matrix, and precision-recall metrics using real-world data"
    ],
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/Mokshasai0108",
    liveUrl: null,
    status: "completed"
  },
  {
    id: 2,
    title: "Emotion-Based Music Recommendation System",
    category: "AI/ML",
    description: "A desktop application using OpenCV and DeepFace (CNN-based models) to detect real-time facial emotions and recommend Spotify songs based on mood.",
    techStack: ["Python", "OpenCV", "DeepFace", "CNN", "Spotify Web API", "OAuth2", "Tkinter"],
    features: [
      "Real-time facial emotion detection (happy, sad, angry)",
      "Spotify Web API integration for user authentication and playlist access",
      "Emotion-driven music recommendations with genre-based and custom playlist filtering",
      "Seamless Tkinter-based GUI with live webcam feed, emotion detection, and Spotify recommendations",
      "Latency optimized to under 1 second"
    ],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/Mokshasai0108",
    liveUrl: null,
    status: "completed"
  },
  {
    id: 3,
    title: "Real-Time Chain Snatching Detection",
    category: "AI/ML",
    description: "Advanced computer vision system for detecting chain snatching incidents in real-time using machine learning algorithms.",
    techStack: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Deep Learning"],
    features: [
      "Real-time video processing and analysis",
      "Advanced object detection and tracking",
      "Alert system for suspicious activities"
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/Mokshasai0108",
    liveUrl: null,
    status: "completed"
  },
  {
    id: 4,
    title: "Cinema Bazar",
    category: "Web",
    description: "A comprehensive movie booking and management platform with user-friendly interface and backend integration.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Movie browsing and booking system",
      "User authentication and profile management",
      "Admin dashboard for theater management",
      "Real-time seat availability"
    ],
    image: "https://images.unsplash.com/photo-1489599735734-79b4169bc2d1?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/Mokshasai0108",
    liveUrl: null,
    status: "completed"
  },
  {
    id: 5,
    title: "Vehicle Condition Monitoring",
    category: "Web",
    description: "Real-time vehicle monitoring system with dashboard for tracking vehicle health and performance metrics.",
    techStack: ["React", "JavaScript", "API Integration", "Real-time Data", "Responsive Design"],
    features: [
      "Real-time vehicle data integration",
      "Performance monitoring dashboard",
      "Cross-browser compatibility",
      "Responsive design implementation"
    ],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/Mokshasai0108",
    liveUrl: null,
    status: "completed"
  },
  {
    id: 6,
    title: "Voice-Activated Assistant",
    category: "AI/ML",
    description: "An intelligent voice assistant with natural language processing capabilities and task automation.",
    techStack: ["Python", "Natural Language Processing", "Speech Recognition", "Machine Learning"],
    features: [
      "Voice command recognition",
      "Natural language processing",
      "Task automation capabilities",
      "Context-aware responses"
    ],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=400&fit=crop",
    githubUrl: "https://github.com/Mokshasai0108",
    liveUrl: null,
    status: "completed"
  }
];

export const contactInfo = {
  formspreeUrl: "https://formspree.io/f/xvgwgwqb", // This will be replaced with actual Formspree URL
  email: "mokshasai2003@gmail.com",
  phone: "+91 7095892194",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mokshasai-kandimalla-780845261/",
    github: "https://github.com/Mokshasai0108",
    email: "mailto:mokshasai2003@gmail.com"
  }
};

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "AI/ML", name: "AI/ML" },
  { id: "Web", name: "Web Development" },
  { id: "Research", name: "Research" }
];