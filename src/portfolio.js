/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suryaveer Singh",
  title: "Hi all, I'm Suryaveer",
  subTitle: emoji(
    "A Robotics Engineer 🤖 building autonomous systems — designing full-stack autonomy frameworks with ROS2, robust navigation and localization stacks (Nav2, EKF, SLAM), perception pipelines and machine learning, all backed by years of scalable backend and software-engineering experience in Python, C++ and Java."
  ),
  resumeLink: "/Suryaveer_Singh_Resume.pdf", // Served from public/. Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suryaveer01",
  linkedin: "https://www.linkedin.com/in/suryaveer01/",
  // gmail: "suryaveer01@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/suryaveer01",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ROBOTICS ENGINEER BUILDING REAL-WORLD AUTONOMOUS SYSTEMS",
  skills: [
    emoji(
      "⚡ Architect full-stack robot autonomy frameworks with ROS2 and composable nodes"
    ),
    emoji(
      "⚡ Build navigation, localization and SLAM stacks (Nav2, EKF, sensor fusion)"
    ),
    emoji(
      "⚡ Develop perception pipelines with depth cameras, visual fiducials and computer vision"
    ),
    emoji(
      "⚡ Train and fine-tune Machine Learning and Reinforcement Learning models"
    ),
    emoji("⚡ Engineer robust, scalable backends and event-driven systems")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ROS / ROS2",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C / C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "SQL / Postgres",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo",
      logo: require("./assets/images/UB_Primary_SUNY_Small.png"),
      subHeader:
        "Master of Science in Engineering Science Focus in Artificial Intelligence and Robotics",
      duration: "August 2022 - December 2023",
      desc: "Took courses about Machine Learning, Robotics, Deep Learning, Analysis of Algorithms ...",
      descBullets: [
        "Member of Center for Unified Biometrics and Sensors (CUBS) team.",
        "Developed and deployed a cross-platform mobile application for contactless fingerprint enrollment and verification on top of Ridge Detection ML model."
      ]
    },
    {
      schoolName: "SRM Institute of Science and Technology",
      logo: require("./assets/images/SRM_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2012 - May 2016",
      desc: "Took courses about Software Engineering, Data Structures and Algorithms, Database Management ...",
      descBullets: [
        "Developed a Hospital Finder Android application using GoogleMaps API.",
        "Developed a face feature detection application designed to distinguish between live humans and static pictures."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Robotics & Autonomy (ROS2 / Nav2)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Perception & Computer Vision",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning / Reinforcement Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend & Distributed Systems",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Robotics Engineer",
      company: "Setton Farms",
      companylogo: require("./assets/images/settonFarmsLogo.jpeg"),
      date: "May 2024 – Present",
      desc: "Building full-stack robot autonomy for agricultural and warehouse operations.",
      descBullets: [
        "Architected a full-stack autonomy framework for industrial electric forklifts using ROS2 and a system of composable nodes to optimize CPU utilization and reduce inter-process communication latency",
        "Engineered a high-precision navigation stack with Nav2, integrating Extended Kalman Filters (EKF) to fuse visual and wheel odometry for robust localization in dynamic warehouse environments",
        "Developed an advanced perception-actuation pipeline using ZED depth cameras and AprilTag visual fiducials to achieve sub-centimeter accuracy during autonomous pallet engagement",
        "Designed a hybrid computer vision workflow leveraging synthetic data generation (SDG) and real-world datasets to train robust neural networks for multi-class bin detection across varying illumination",
        "Optimized robotic manipulation by synchronizing high-level motion planners with low-level PLC motor controllers for deterministic, smooth velocity ramps on heavy-load operations",
        "Contributed to the development of an articulated UGV, utilizing ROS for sensor fusion and navigation",
        "Developed a robotic manipulator with object detection to perform efficient pick-and-place operations"
      ]
    },
    {
      role: "Software Engineer",
      company: "Unisys",
      companylogo: require("./assets/images/Unisys_logo.png"),
      date: "Jan 2016 – June 2022",
      desc: "Built secure, large-scale enterprise systems.",
      descBullets: [
        "Engineered 2 migration utilities for 300 million records, implementing event-driven architecture with WebMQ",
        "Developed an on-premises passenger facilitation solution at airports with identity verification using iris/face",
        "Created a secure Remote Working Kit on Azure Cloud Services for robust authentication and streamlined software distribution, enhancing remote work safety",
        "Awarded the Tarek Award – Technology Excellence Award for project delivery"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "ROBOTICS, MOTION PLANNING AND MACHINE LEARNING PROJECTS I'VE BUILT",
  projects: [
    {
      projectName: "Motion Planning & Autonomy",
      projectDesc:
        "RRT path planning on image maps with OpenCV; an autonomous Evader-Mapper performing simultaneous SLAM and obstacle avoidance on an F1TENTH platform using LIDAR; PID and Pure-Pursuit controls achieving >90% path-following accuracy; and Stereo Visual Odometry from the vehicle's camera feed for reliable tracking. (Python, PyTorch, ROS, OpenCV)"
      // footerLink can be added later once repos/demos are public
    },
    {
      projectName: "Machine Learning / Reinforcement Learning",
      projectDesc:
        "Trained agents with Stable-Baselines3 (DQN, PPO, DDPG, SAC) across OpenAI Gym environments; used PPO to train a consistent walker in the Walker2D MuJoCo environment; and built high-accuracy CNN classifiers plus a custom-dataset Ultralytics YOLOv8 object detector for robotic applications. (Python, Stable-Baselines3, PyTorch, Deep Learning)",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/suryaveer01/ReinforcementLearning"
        }
      ]
    },
    {
      projectName: "Environmental Audio Classifier",
      projectDesc:
        "Environmental sound classification on the UrbanSound8K and ESC-50 datasets, using Mel-spectrogram and MFCC feature extraction with a ResNet-34 model. (Python, Deep Learning)",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/suryaveer01/AudioClassifier"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am open for full-time opportunities. Feel free to contact me for any work or suggestions.",
  number: "+1-716 295 3000",
  email_address: "suryaveer01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
