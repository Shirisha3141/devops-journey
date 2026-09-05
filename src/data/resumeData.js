export const resumeData = {
  personal: {
    name: "SHIRISHA MANDHA",
    title: "Full Stack & DevSecOps Engineer | CSE(IT) Undergrad",
    location: "Hyderabad, India",
    phone: "+91 9515540087",
    email: "mandhashirisha90@gmail.com",
    github: "https://github.com/Shirisha3141",
    linkedin: "https://www.linkedin.com/in/mandhashirisha",
    cgpa: "9.0",
    degree: "B.Tech - CSE(IT)",
    institution: "Sreenidhi Institute of Science and Technology, Ghatkesar",
    duration: "2023 – 2027",
    summary: "Detail-oriented Computer Science undergraduate with a strong foundation in programming, Data Structures & Algorithms, and web development. Skilled in Java, JavaScript, React.js, Node.js, Express.js, MongoDB, HTML, CSS, SQL, REST APIs, Git, and basic cloud technologies (AWS). Hands-on experience through internships and academic projects, with a passion for building scalable applications, solving real-world problems, and continuously learning new technologies."
  },

  skills: {
    programming: [
      { name: "Python", category: "Programming" },
      { name: "Java", category: "Programming" },
      { name: "C", category: "Programming" },
      { name: "JavaScript", category: "Programming" }
    ],
    webDevelopment: [
      { name: "React.js", category: "Web Dev" },
      { name: "Node.js", category: "Web Dev" },
      { name: "Express.js", category: "Web Dev" },
      { name: "MongoDB", category: "Web Dev" },
      { name: "HTML5", category: "Web Dev" },
      { name: "CSS3", category: "Web Dev" },
      { name: "JavaScript", category: "Web Dev" },
      { name: "Responsive Web Design", category: "Web Dev" },
      { name: "MERN Stack", category: "Web Dev" },
      { name: "SQL / MySQL", category: "Web Dev" }
    ],
    cloudDevOpsSecurity: [
      { name: "AWS", category: "Cloud & DevOps" },
      { name: "CI/CD Workflows", category: "Cloud & DevOps" },
      { name: "Docker", category: "Cloud & DevOps" },
      { name: "Terraform", category: "Cloud & DevOps" },
      { name: "DevSecOps", category: "Cloud & DevOps" },
      { name: "Bandit SAST", category: "Cloud & DevOps" },
      { name: "Cloud Security", category: "Cloud & DevOps" },
      { name: "Secure CI/CD", category: "Cloud & DevOps" }
    ],
    tools: [
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
      { name: "VS Code", category: "Tools" },
      { name: "Postman", category: "Tools" },
      { name: "MS Office", category: "Tools" },
      { name: "Canva", category: "Tools" }
    ],
    coreConcepts: [
      { name: "Data Structures & Algorithms (DSA)", category: "Core Concepts" },
      { name: "SQL", category: "Core Concepts" },
      { name: "Object Oriented Programming (OOP)", category: "Core Concepts" },
      { name: "DBMS", category: "Core Concepts" },
      { name: "Operating Systems", category: "Core Concepts" },
      { name: "Basics of Machine Learning", category: "Core Concepts" }
    ],
    softSkills: [
      "Team Collaboration",
      "Communication",
      "Leadership",
      "Adaptability",
      "Time Management"
    ]
  },

  projects: [
    {
      id: "cartify-ai",
      title: "CartifyAI - AI-Based Personalized Shopping System",
      subtitle: "AI & Conversational E-Commerce Recommendation Platform",
      category: "AI & Web Development",
      description: "Developed an AI-driven recommendation engine using user behavior analysis, delivering 100+ personalized product suggestions. Implemented NLP-based conversational search, improving search efficiency by 30% and enhancing overall user experience.",
      highlights: [
        "Delivered 100+ personalized product suggestions using user behavior analysis",
        "Implemented NLP-based conversational search, boosting search efficiency by 30%",
        "Enhanced overall user experience through responsive interface and intelligent search"
      ],
      technologies: ["Python", "AI Recommendation", "NLP", "User Behavior Analytics", "Web Tech"],
      metrics: [
        { label: "Product Suggestions", value: "100+" },
        { label: "Search Efficiency", value: "+30%" }
      ],
      github: null,
      featured: true
    },
    {
      id: "devsecops-pipeline",
      title: "DevSecOps Security Pipeline",
      subtitle: "AWS Cloud-Native CI/CD Pipeline with Automated SAST Security",
      category: "Cloud & DevSecOps",
      description: "Built a cloud-native DevSecOps pipeline using AWS CodePipeline, CodeBuild, Terraform, Docker, and Django with automated Bandit SAST scanning to detect vulnerabilities and secure CI/CD workflows.",
      highlights: [
        "Awarded 3rd Prize in College Project Expo for automated cloud security",
        "Integrated AWS CodePipeline, CodeBuild, Terraform & Docker for cloud-native deployment",
        "Configured Bandit SAST automated static analysis scanning to detect code vulnerabilities"
      ],
      technologies: ["AWS CodePipeline", "AWS CodeBuild", "Terraform", "Docker", "Python", "Django", "Bandit SAST", "GitHub Actions"],
      award: "3rd Prize - College Project Expo",
      metrics: [
        { label: "SAST Security", value: "Automated" },
        { label: "Infrastructure", value: "Terraform IaC" }
      ],
      github: null,
      featured: true
    },
    {
      id: "campus-connect",
      title: "Campus Connect",
      subtitle: "Full-Stack MERN Event Management Platform",
      category: "Full Stack (MERN)",
      description: "Developed a MERN Stack campus event management application with JWT-based authentication, Role-Based Access Control (RBAC), and responsive React dashboards integrated with a Node.js/Express backend. Built 20+ RESTful APIs for authentication, event management, registrations, approvals, and user profiles using MongoDB.",
      highlights: [
        "Built 20+ RESTful APIs for authentication, events, registrations, and approvals",
        "Implemented JWT-based authentication and Role-Based Access Control (RBAC)",
        "Designed responsive React dashboards integrated seamlessly with Node.js/Express backend",
        "Recognized with Merit Certificate for outstanding performance in DevOps & Full Stack"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "JWT", "REST APIs", "Postman", "GitHub"],
      award: "Merit Certificate Awarded",
      metrics: [
        { label: "RESTful APIs", value: "20+" },
        { label: "Security", value: "JWT & RBAC" }
      ],
      github: null,
      featured: true
    },
    {
      id: "avl-tree",
      title: "AVLTree - DSA Implementation",
      subtitle: "Self-Balancing Binary Search Tree Data Structure",
      category: "Data Structures & Algorithms",
      description: "Implemented AVL Tree in Java with self-balancing rotations (LL, RR, LR, RL), achieving O(log n) performance for operations and improving efficiency over traditional BST.",
      highlights: [
        "Implemented complete self-balancing rotations: Left-Left (LL), Right-Right (RR), Left-Right (LR), Right-Left (RL)",
        "Guaranteed O(log n) time complexity for insertion, deletion, and search operations",
        "Demonstrates solid grasp of core Computer Science Data Structures & Algorithms"
      ],
      technologies: ["Java", "JavaScript", "Data Structures & Algorithms"],
      github: "https://github.com/Shirisha3141/AVLTree",
      metrics: [
        { label: "Time Complexity", value: "O(log n)" },
        { label: "Rotations", value: "LL, RR, LR, RL" }
      ],
      featured: true
    }
  ],

  experience: [
    {
      id: "rag-chatbot-intern",
      organization: "Internship Project",
      role: "Intern / Project Developer",
      project: "RAG Chatbot",
      duration: "December 2025",
      type: "Internship Experience",
      highlights: [
        "Implemented Role-Based Access Control (RBAC) into the RAG Chatbot architecture",
        "Improved application security through secure user authorization and permission management",
        "Ensured safe data access control based on user roles"
      ],
      skills: ["RBAC", "User Authorization", "Permission Management", "Application Security"]
    }
  ],

  education: [
    {
      degree: "B.Tech - CSE(IT)",
      field: "Computer Science & Engineering (Information Technology)",
      institution: "Sreenidhi Institute of Science and Technology, Ghatkesar",
      duration: "2023 – 2027",
      cgpa: "9.0",
      status: "Undergraduate (Current)",
      highlights: [
        "Consistently maintained a high academic standard with a 9.0 CGPA",
        "Specializing in Computer Science & Information Technology",
        "Active leader and member in technical & student activity clubs"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-devops-fullstack",
      title: "Merit Certificate in DevOps and Full Stack Development",
      issuedFor: "Outstanding Performance in Campus Connect",
      type: "Merit Certification",
      details: "Awarded Merit Certificate in DevOps and Full Stack Development (Campus Connect) for outstanding performance."
    }
  ],

  achievements: [
    {
      id: "achieve-project-expo",
      title: "3rd Prize in College Project Expo",
      category: "Competition / Hackathon",
      description: "Achieved 3rd Prize in the college Project Expo for building an automated DevSecOps Security Pipeline using AWS."
    },
    {
      id: "achieve-extracurricular",
      title: "Student Leadership & Organization Contribution",
      category: "Positions of Responsibility",
      description: "Actively contributed as a member of SDC, Bachpan Prayas, CSAC at SNIST and participated in technical events, workshops, and hackathons while gaining experience in organization and team collaboration."
    }
  ]
};
