// Mock data for the portfolio website
export const personalInfo = {
  name: "Moksha Sai Kandimalla",
title: "AI/ML Enthusiast & Front End Developer",
tagline: "Pursuing M.Tech in AI and building smart, real-world web solutions"
,
  email: "mokshasai2003@gmail.com",
  phone: "+917995892194",
  location: "India",
  resumeUrl: "/MokshaSai_Google_Software_Engineer_Intern.pdf", // This will be replaced with actual resume
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mokshasai-kandimalla-780845261/",
    github: "https://github.com/Mokshasai0108",
    email: "mailto:mokshasai2003@gmail.com"
  }
};

export const aboutInfo = {
  description: "I'm an AI/ML Engineer and Full Stack Developer currently pursuing my Master's in Artificial Intelligence at Thapar Institute of Engineering and Technology. I enjoy building intelligent systems and web applications that solve real-world problems. My skills range from machine learning to full-stack development, and I focus on creating practical, user-friendly solutions.",
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
    image: "https://cwatch.comodo.com/images-new/ddos-proxy-protection.png?w=800&h=400&fit=crop",
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
    image: "https://engineersplanet.com/wp-content/uploads/2024/04/Mood-Detection-scaled.jpg",
    githubUrl: "https://github.com/Mokshasai0108/Music-Recommendation-System",
    liveUrl: null,
    status: "completed"
  },
  {
  id: 3,
  title: "Gitam Vehicle Parking Slot Reservation System",
  category: "Web",
  description: "A React-based smart parking management system that automates vehicle check-in/check-out, monitors real-time slot availability, calculates parking duration and fees, and ensures security through alerts for unauthorized activities.",
  techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
  features: [
    "Automated check-in and check-out flow using QR-based ticketing",
    "Real-time slot availability monitoring dashboard",
    "Dynamic fee and change calculation based on parking duration",
    "Admin interface for staff to manage parking slots and transactions",
    "Security alerts for detecting unauthorized parking activity"
  ],
  image: "https://www.shutterstock.com/image-vector/smart-lpr-camera-parking-system-600nw-2176015411.jpg",
  githubUrl: "https://github.com/Mokshasai0108/Gitam-Vehicle-Parking-Slot-Reservation-Application",
  liveUrl: null,
  status: "completed"
  },
  {
    id: 4,
    title: "Cinema Bazar",
    category: "Web",
    description: "A dynamic movie and TV series discovery platform built using React and TMDb API. This project offers trending content, genre-based discovery, detailed movie information, and trailer previews, all within a highly responsive UI.",
    techStack: ["React", "Material-UI", "Axios", "JavaScript", "HTML5", "CSS3", "TMDb API",],
    features: [
    "Trending movies and TV shows fetched via TMDb API",
    "Search functionality with dynamic query results",
    "Genre-based content filtering for movies and series",
    "Detailed movie cards with cast info, plot, and trailers",
    "Responsive design using Material-UI and Bootstrap",
    "Error handling, loading states, and API caching with debounce"
  ],
    image: "https://thumbs.dreamstime.com/b/queue-cinema-men-woman-near-hall-visitors-discuss-movies-series-cultural-rest-leisure-people-waiting-premiere-linear-328532150.jpg",
    githubUrl: "https://github.com/Mokshasai0108/cinema-bazar",
    liveUrl: null,
    status: "completed"
  },
  {
  "id": 5,
  "title": "E-Farming",
  "category": "Web",
  "description": "A modern React-based web application bridging farmers and consumers, featuring an e-commerce marketplace, seed catalog, blog resources, and role-based dashboards.",
  "techStack": ["React", "JavaScript", "API Integration", "MySQL", "Node.js/Express"],
  "features": [
    "Farmer-to-consumer e-commerce platform",
    "Real-time product listing and order tracking",
    "Seed purchasing with detailed info",
    "Interactive blogs and training modules",
    "Role-based dashboards (Farmer, Buyer, Admin)",
    "Responsive design with cross-browser compatibility"
  ],
  "image": "https://img.freepik.com/free-vector/flat-greenhouse-with-farmer-people-smart-device-automation-watering-plants_88138-1282.jpg?semt=ais_hybrid&w=740",
  "githubUrl": "https://drive.google.com/drive/folders/1MbKOepnhCJAJOOWKVnRsviuOsDQAVP4g?usp=sharing  ",
  "liveUrl": null,
  "status": "completed"
  },
  {
  id: 6,
  title: "Voice-Activated Virtual Assistant",
  category: "AI/ML",
  description: "A browser-based voice-activated assistant capable of recognizing voice commands, executing tasks like opening web apps, searching the web, and responding contextually with speech synthesis.",
  techStack: ["JavaScript", "Web Speech API", "Speech Recognition", "Speech Synthesis", "HTML5", "CSS3"],
  features: [
    "Voice command activation using microphone input",
    "Speech synthesis (Text-to-Speech) for contextual replies",
    "Task automation: Open Google, YouTube, Wikipedia, and more",
    "Dynamic time and date responses",
    "Browser-based, no backend required"
  ],
  image: "https://cdn.punchng.com/wp-content/uploads/2023/06/01052259/virtual-assistants.png", // Replace with actual screenshot if available
  githubUrl: "https://github.com/Mokshasai0108/MY-PROJECTS/tree/main/Jarvis",
  liveUrl: null,
  status: "completed"
}

];

export const contactInfo = {
  formspreeUrl: "https://formspree.io/f/xvgwgwqb", // Replace with your actual Formspree URL
  email: "mokshasai2003@gmail.com",
  phone: "+917995892194",
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
  { id: "Web", name: "Web Development" }
];