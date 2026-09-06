export const personalInfo = {
  name: "Harsh Yadav",
  role: "Computer Science & Engineering Student",
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Lovely Professional University",
  location: "India",
  email: "harshyadav26082007@gmail.com",
  github: "https://github.com/Pappu-Lala",
  linkedin: "https://www.linkedin.com/in/harsh-yadav-254305294/",
  bio: "Aspiring Computer Science & Engineering student at Lovely Professional University with a strong foundation in C++, Python, and IoT systems. Passionate about building robust software, microcontroller automation, and problem-solving through technology.",
  tagline: "Building software solutions from microcontroller IoT systems to modern web applications.",
};

export const skillsData = {
  programmingLanguages: [
    { name: "C++", category: "Language", highlight: "Core & Systems", level: "Proficient" },
    { name: "Python", category: "Language", highlight: "Scripting & Automation", level: "Proficient" },
    { name: "C", category: "Language", highlight: "Foundational & Systems", level: "Proficient" },
  ],
  toolsAndPlatforms: [
    { name: "Git", category: "Version Control", highlight: "Code Tracking & Collaboration" },
    { name: "GitHub", category: "Platform", highlight: "Repositories & Open Source" },
    { name: "VS Code", category: "Development Environment", highlight: "Primary Code Editor" },
  ]
};

export const projectsData = [
  {
    id: "smart-aquarium",
    title: "Smart Aquarium",
    category: "IoT & Embedded Systems",
    featured: true,
    description: "An automated IoT-based Smart Aquarium system built using ESP32 to monitor water quality and automate routine aquarium care with real-time sensor alerts.",
    bulletPoints: [
      "Developed an IoT-based Smart Aquarium system using ESP32.",
      "Integrated a pH sensor for real-time water-quality monitoring and automated condition alerts.",
      "Implemented servo motor automation using ESP32Servo for an automatic fish-feeding mechanism.",
      "Designed breadboard-based hardware circuits integrating sensors, buzzer alerts, and a relay-controlled water pump."
    ],
    techStack: [
      "Python",
      "ESP32",
      "Arduino IDE",
      "C++",
      "ESP32Servo",
      "pH Sensor",
      "Servo Motor",
      "Relay",
      "IoT"
    ],
    githubUrl: "https://github.com/Pappu-Lala", // Placeholder - Replace with your project repo link
    isPlaceholderLink: true,
    placeholderNote: "Add your repository URL in src/data/portfolioData.js"
  },
  {
    id: "home-services",
    title: "On-Demand Home Services Web App",
    category: "Web Application / Hackathon",
    featured: true,
    description: "A comprehensive web-based platform allowing users to seamlessly browse and book essential household services with an intuitive booking pipeline.",
    bulletPoints: [
      "Developed a web-based platform where users can browse and book household services such as home cleaning, mopping, dishwashing, and laundry.",
      "Designed a simple service-booking workflow for service discovery, selection, and order placement.",
      "Developed and presented the project as part of a hackathon team."
    ],
    techStack: [
      "Web Development",
      "Frontend",
      "Service Workflow",
      "Hackathon Team"
    ],
    servicesIncluded: [
      "Home Cleaning",
      "Mopping",
      "Dishwashing",
      "Laundry"
    ],
    githubUrl: "https://github.com/Pappu-Lala", // Placeholder - Replace with your project repo link
    isPlaceholderLink: true,
    placeholderNote: "Add your repository URL in src/data/portfolioData.js"
  }
];

export const certificatesData = [
  {
    id: "infosys-c",
    title: "Programming in C",
    issuer: "Infosys Springboard",
    type: "Programming & Systems",
    badgeColor: "border-sky-500/40 text-sky-400 bg-sky-500/10",
  },
  {
    id: "infosys-python",
    title: "Programming Fundamentals Using Python",
    issuer: "Infosys Springboard",
    type: "Programming & Scripting",
    badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
  },
  {
    id: "hackerrank-python",
    title: "Python",
    issuer: "HackerRank",
    type: "Skill Assessment",
    badgeColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
  },
  {
    id: "hackerrank-sql",
    title: "SQL",
    issuer: "HackerRank",
    type: "Database Querying",
    badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
  }
];

export const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech, Computer Science and Engineering",
    score: "CGPA: 8.14",
    status: "Current Degree",
    highlight: "Focusing on core computer science, systems programming, and algorithms."
  },
  {
    institution: "Ryan International School",
    degree: "Intermediate with PCM (Physics, Chemistry, Mathematics)",
    score: "Percentage: 73.42%",
    status: "Completed",
    highlight: "Senior secondary education with a rigorous focus on science and analytical mathematics."
  },
  {
    institution: "Matriculation",
    degree: "Secondary School Examination",
    score: "Score: 84.63%",
    status: "Completed",
    highlight: "Strong foundational academic performance across science and mathematics."
  }
];
