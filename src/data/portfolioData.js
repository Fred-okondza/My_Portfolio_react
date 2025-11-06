/**
 * PORTFOLIO DATA
 * 
 * ⚠️ IMPORTANT: EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
 * 
 * This file contains all the personal information, projects, skills,
 * and experience data for your portfolio. Simply replace the placeholder
 * content with your own information.
 * 
 * All components read from this centralized data file, making it easy
 * to update your portfolio without touching the component code.
 */

const portfolioData = {
  // ============================================
  // PERSONAL INFORMATION
  // ============================================
  personal: {
    name: "Fred Okondza",
    title: "Data Scientist",
    tagline: "Problem Solver | Tech Enthusiast | Full Stack Developer| Lifelong Learner",
    description: "I love discovering stories hidden in data and turning them into meaningful solutions. Passionate about using data science to make a difference.",
    
    // Contact information
    email: "fred.okondza@aims-cameroon.org",
    phone: "+237 658 49 90 40",
    location: "Yaounde, Cameroon",
    status: "Open to opportunities",
    
    // 🆕 CV/Resume link - Put your CV in public/cv.pdf OR use a GitHub link
    cvLink: "/cv.pdf",  // Change to your CV path or GitHub raw link
    
    // Profile image (add your photo to public folder)
    // Example: "/profile.jpg" if you add profile.jpg to public folder
    profileImage: null,  // Set to null to use placeholder
    
    // 🆕 Social media links - UPDATE THESE WITH YOUR REAL LINKS
    social: {
      github: "//https://github.com/Fred-okondza",        
      linkedin: "https://www.linkedin.com/in/fred-okondza-752ba4353/",  
      twitter: "https://twitter.com/yourusername"        // Optional
    }
  },

  // ============================================
  // ABOUT SECTION
  // ============================================
  about: {
    paragraphs: [
      
      `I am passionate about data science, machine learning, and predictive analytics. 
    To me, data is not just a series of numbers — it tells stories, uncovers trends, and provides insights that can truly transform our understanding of the world. 
    My goal? To transform data into concrete, actionable solutions.
    Through machine learning models, predictive analyses, and optimizations, I strive to develop innovative approaches to solve complex challenges and provide real value.
    Curious and determined, I believe in knowledge sharing and collaboration as key drivers of progress.
    If, like me, you're passionate about the potential of data and its impact on the future, you're in the right place!`
      
      
    ]
  },

  // ============================================
  // SKILLS SECTION
  // ============================================
  skills: {
    // Each category contains skills with proficiency levels (0-100)
    categories: [
      {
        name: "Frontend Development",
        skills: [
          { name: "HTML5 / CSS3", level: 90 },
          { name: "JavaScript / TypeScript", level: 70 },
          { name: "React.js / Next.js", level: 75 },
          { name: "Vue.js", level: 20 }
        ]
      },
      {
        name: "Backend Development",
        skills: [
          { name: "Node.js / Express", level: 85 },
          { name: "Python / Django", level: 80 },
          { name: "RESTful APIs", level: 75 },
          { name: "GraphQL", level: 75 }
        ]
      },
      {
        name: "Database & Tools",
        skills: [
          { name: "SQL", level: 85 },
          { name: "PostgreSQL / MySQL", level: 60 },
          { name: "Git / GitHub", level: 72 },
          { name: "Docker", level: 25 }
        ]
      },
      {
        name: "Other Skills",
        skills: [
          { name: "Pandas/NumPy,", level: 75 },
          { name: "TensorFlow/PyTorch", level: 75 },
          { name: "R", level: 70 },
          { name: "Cloud (AWS, Azure)", level: 20 }
        ]
      }
    ]
  },

  // ============================================
// PROJECTS SECTION
// ============================================
projects: [
  {
    id: 1,
    title: "Bank Transactions Analysis",
    description: `This project analyzes bank transaction data to identify patterns and detect fraud.
    Using techniques like Linear Regression, Random Forest, and others, the goal is to flag suspicious
    activities, classify transaction types, and predict future trends — helping improve security and
    optimize banking processes.`,
    image: "🏦",
    tags: ["R", "Machine Learning", "Fraud Detection"],
    demoLink: null,
    githubLink: "https://github.com/Fred-okondza/my-website/blob/main/BANK_TRANSACTION.Rmd",
    featured: true
  },
  {
    id: 2,
    title: "Financial Fraud Detection: Machine Learning for Transaction Analysis",
    description: `This project utilizes machine learning algorithms such as Clustering for Fraud Detection,
    Support Vector Machines (SVM), and DBSCAN to analyze financial transaction data. The objective is to
    detect and classify fraudulent activities, enhancing fraud prevention and improving transaction security
    for financial institutions.`,
    image: "💳",
    tags: ["Python", "SVM", "DBSCAN", "Clustering"],
    demoLink: null,
    githubLink: "https://github.com/Fred-okondza/my-website/blob/main/Bank.ipynb",
    featured: true
  },
  {
    id: 3,
    title: "Customer Churn Prediction and Retention Strategy",
    description: `This project involved developing a predictive model to identify customers at risk of churn.
    Using machine learning, I analyzed customer behavior to forecast churn and designed targeted retention
    strategies to improve customer loyalty and reduce turnover.`,
    image: "📊",
    tags: ["Python", "Machine Learning", "Churn Prediction"],
    demoLink: null,
    githubLink: "https://github.com/Fred-okondza/my-website/blob/main/Telco_model.ipynb",
    featured: true
  },
  {
    id: 4,
    title: "Data Science Job Analysis",
    description: `This project analyzes job listings in the data science field to identify key trends and insights.
    It examines required skills, qualifications, and experience along with salary ranges and job locations.
    By studying these factors, the project highlights the most in-demand skills and how the job market is evolving.`,
    image: "💼",
    tags: ["Python", "Data Analysis", "Job Market"],
    demoLink: null,
    githubLink: "https://github.com/Fred-okondza/my-website/blob/main/data_science.ipynb",
    featured: true
  },
  {
  id: 5,
  title: "Visualization Dashboards & Automated Report Generation from DHIS2",
  description: `Designed and implemented interactive dashboards and automated reporting tools for DHIS2, enabling public health professionals to monitor key indicators, identify trends, and generate reports efficiently. Developed a modular report generator and implemented role-based access controls to filter data according to the health system hierarchy.`,
  image: "📊",
  tags: ["React.js", "Node.js", "DHIS2 API", "Data Visualization", "Reporting"],
  demoLink: null,
  githubLink: "https://github.com/Fred-okondza/my-website",
  featured: true
}


],

// ============================================
// EXPERIENCE SECTION
// ============================================
experience: [
  {
    id: 1,
    position: "Telecommunications Intern",
    company: "CongoTelecom",
    location: "Republic of Congo",
    startDate: "04 2024",
    endDate: "07 2024",
    current: false,
    responsibilities: [
      "Installed fiber optic lines to provide high-speed broadband connectivity to customers",
      "Managed line transfers to relocate customer connections while maintaining service continuity",
      "Diagnosed and resolved technical issues to minimize downtime and enhance service quality",
      "Performed practical training in installation, maintenance, line transfers, and FTTH troubleshooting"
    ]
  },
  {
    id: 2,
    position: "Telecommunications Intern",
    company: "MTN CG",
    location: "Republic of Congo",
    startDate: "01 2022",
    endDate: "12 2023",
    current: false,
    responsibilities: [
      "Assisted in installation, maintenance, and optimization of telecommunication infrastructure",
      "Monitored network performance, identified service disruptions, and implemented corrective measures",
      "Provided direct technical assistance to customers, troubleshooting network-related issues in real time",
      "Worked in the Network Operating Center (NOC) and on network service delivery"
    ]
  },
  {
    id: 3,
    position: "Telecommunications Intern",
    company: "Radio Diffusion Congolaise (TDC)",
    location: "Republic of Congo",
    startDate: "01 2019",
    endDate: "12 2020",
    current: false,
    responsibilities: [
      "Configured and maintained microwave links for live news broadcasting ensuring stable transmissions",
      "Managed satellite uplink systems for remote event coverage and ensured nodal signal transmission",
      "Operated direct microwave transmission systems for real-time live coverage",
      "Contributed to maintenance of the central server infrastructure, ensuring data integrity and optimal performance",
      "Gained practical experience in microwave technology and satellite uplink (Flay Way)"
    ]
  }
],


  // ============================================
// EDUCATION SECTION
// ============================================
education: [
  {
    id: 1,
    degree: "Cooperative Master’s of Science in Data Science (Ongoing)",
    institution: "African Institute for Mathematical Sciences (AIMS)",
    location: "Limbe, Cameroon",
    startDate: "August 2024",
    endDate: "Present",
    description: "Ongoing master's program focused on advanced data science topics including machine learning, predictive analytics, and data-driven decision making.",
    achievements: []
  },
  {
    id: 2,
    degree: "Engineering in Electronics",
    institution: "National Advanced School of Engineering (UMNG)",
    location: "Republic of Congo",
    startDate: "2022",
    endDate: "Present",
    description: "Engineering studies in electronics covering telecommunications, circuits, and system design.",
    achievements: []
  },
  {
    id: 3,
    degree: "Bachelor’s Degree in Electronics and Telecommunications",
    institution: "National Advanced School of Engineering (UMNG)",
    location: "Republic of Congo",
    startDate: "2020",
    endDate: "2021",
    description: "Undergraduate program focused on electronics and telecommunications engineering principles and applications.",
    achievements: []
  }
],


  // ============================================
  // CONTACT SECTION
  // ============================================
  contact: {
    title: "Let's Work Together",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    
    // Contact methods
    methods: [
      {
        icon: "📧",
        title: "Email",
        value: "fred.okondza@aims-cameroon.org",
        link: "mailto:"
      },
      {
        icon: "📱",
        title: "Phone",
        value: "+237 658499040",
        link: "tel:+15551234567"
      },
      {
        icon: "📍",
        title: "Location",
        value: "Yaounde Centre, CMR",
        link: null
      }
    ]
  }
};

// Export the data to be used in components
export default portfolioData;