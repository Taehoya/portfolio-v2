const experience = [
  {
    id: "priceline",
    job_title: "Software Developer Co-op",
    company: "Priceline",
    date: "January 2022 ~ April 2022",
    description: [
      `Developed a tool to retrieve and pull data from the company’s new service using Go, MySQL, and gRPC, which allows a team to measure the exact impact of whether it results in potential missing data and duplicates.`,
      "Created a new Service layer on top of the internal deployment tool using the Gin framework, allowing teams to have event-driven deploys and reducing 30% of steps in the process.",
      "Made numerous enhancements and bug fixes when migrating software from On-premises to Cloud Engine, updating the source code to be supported by Google Kubernetes Engine, and improving logging and error handling.",
      "Created a Slack bot to notify the stand-up meeting order and automated the bot in Google Kubernetes Engine.",
    ],
    location: "Winnipeg, MB",
    technologies: ["Go", "MySQL", "REST APIs"],
    cover_image: "",
  },
  {
    id: "pollard",
    job_title: "Application Developer",
    company: "Pollard Banknote Limited",
    date: "May 2021 ~ August 2021",
    description: [
      `Spearheaded 3 different kinds of lottery games with PHP, SQL, JavaScript, Phaser framework and Cocos2d framework
    and deployed the games to production.`,
      "Created a website template for second-chance lottery game by using HTML, CSS, and JavaScript and provided a live demo to team members.",
      "Improved process efficiency by implementing a CSV report file generator code about the gameplay data from Lottery Company.",
    ],
    location: "Winnipeg, MB",
    technologies: ["JavaScript", "PHP", "MySQL", "Phaser"],
    cover_image: "",
  },
  {
    id: "UofM",
    job_title: "Teaching Assistant | Grader/Marker",
    company: "University of Manitoba",
    date: "May 2021 ~ Present",
    description: [
      "Preparing and conducting lab sessions about the course material: Python, Programming Practices, Java.",
      `Provide specific and meaningful feedback to students about their assignments and tests to lead them, enhancing their
    learning and enabling students to master concepts of the curriculum.`,
    ],
    location: "Winnipeg, MB",
    technologies: ["C", "Shell", "Python", "Java"],
    cover_image: "",
  },
];

export default experience;
