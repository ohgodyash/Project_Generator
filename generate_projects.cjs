const fs = require('fs');
const path = require('path');

const domains = [
  'Web Frontend', 'Web Backend', 'Full Stack Web', 'iOS Development', 'macOS Development', 
  'Android Development', 'Cross-Platform Mobile', 'Game Dev (Unity)', 'Game Dev (Unreal)', 
  'Game Dev (Godot)', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 
  'Data Engineering', 'Data Science', 'Data Analytics', 'DevOps & CI/CD', 'Cloud Infrastructure',
  'Cybersecurity', 'Blockchain & Web3', 'Embedded Systems', 'IoT', 'Robotics', 'Quantum Computing'
];

const levels = ['Beginner', 'Intermediate', 'Advanced'];
const times = ['A weekend', '1-2 weeks', 'A whole month'];

const actions = ['Build', 'Develop', 'Create', 'Design', 'Engineer', 'Simulate', 'Analyze', 'Deploy'];
const targets = ['a Dashboard', 'an API', 'an Engine', 'a Tracker', 'a visualizer', 'a CLI tool', 'a mobile client', 'a smart contract', 'a clustering model', 'an e-commerce platform', 'a scraper', 'a recommendation system'];
const contexts = ['for small businesses', 'for gamers', 'for productivity', 'for open source developers', 'for tracking finances', 'with real-time capabilities', 'with offline-first support', 'using serverless tech', 'using pure local APIs'];

const techPools = {
  'Web': ['React', 'Vue', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Vite', 'TypeScript', 'GraphQL'],
  'iOS': ['Swift', 'SwiftUI', 'CoreData', 'Combine', 'ARKit', 'URLSession'],
  'macOS': ['Swift', 'AppKit', 'SwiftUI', 'CloudKit'],
  'Android': ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Coroutines'],
  'Game': ['C#', 'C++', 'GDScript', 'Unity', 'Unreal', 'Godot', 'Blender'],
  'Data': ['Python', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Jupyter', 'SQL', 'NumPy'],
  'DevOps': ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'GCP', 'Ansible'],
  'Cybersecurity': ['Python', 'Bash', 'Kali Tools', 'Wireshark', 'Metasploit', 'Nmap'],
  'Blockchain': ['Solidity', 'Hardhat', 'Rust', 'Ethers.js', 'Web3.js', 'IPFS'],
  'Embedded': ['C', 'C++', 'Arduino', 'Raspberry Pi', 'FreeRTOS', 'MicroPython'],
  'Quantum': ['Qiskit', 'Python', 'Cirq']
};

function getTechPool(domain) {
  for (const key of Object.keys(techPools)) {
    if (domain.includes(key)) return techPools[key];
  }
  return techPools['Data']; // default fallback
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const projects = [];

// Generate exactly 25 projects per domain
let idCounter = 1;
domains.forEach(domain => {
  for (let i = 0; i < 25; i++) {
    const level = randomItem(levels);
    const time = randomItem(times);
    
    const action = randomItem(actions);
    const target = randomItem(targets);
    const context = randomItem(contexts);
    
    // Extracted single word for target for dynamic text
    const targetSubject = target.split(' ')[1] || 'application';
    
    const title = `${domain.split(' ')[0]} ${targetSubject} - V${i+1}`;
    const description = `${action} ${target} ${context}. This project explores best practices in the ${domain} ecosystem suitable for ${level} developers trying to complete something in ${time}. You will implement everything from scratch and deploy a production-ready application.`;
    
    const pool = getTechPool(domain);
    // Pick 3 to 5 random tech
    const techCount = Math.floor(Math.random() * 3) + 3;
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const selectedTech = shuffledPool.slice(0, techCount);
    
    projects.push({
      id: `proj-${idCounter++}`,
      title,
      domain,
      level,
      time,
      description,
      techStack: selectedTech,
      steps: [
        {
          title: "Step 1: Requirements Analysis & Planning",
          description: `Define exactly what the ${targetSubject} will do. Write down user stories, feature lists, and the minimum viable product (MVP) scope.`,
          hint: "Keep the scope extremely tight. If you plan for too many features, you will never finish. Focus strictly on the core mechanic first."
        },
        {
          title: "Step 2: Environment Setup & Tooling",
          description: `Install the necessary software. Initialize the repository, configure linters, and set up your ${domain} basic project template using ${selectedTech[0]}.`,
          hint: `Look up the official CLI generation tool or starter template for ${selectedTech[0]} to ensure you are using current best practices.`
        },
        {
          title: "Step 3: Architecture & Data Modeling",
          description: `Plan out how data flows through the application. If needed, design the database schema, API contracts, or core data structures.`,
          hint: "Grab a pen and paper. Sketching out how objects relate to one another is much faster than rewriting code later."
        },
        {
          title: "Step 4: Prototyping the Core Logic",
          description: "Write the ugliest code possible just to prove that the core mechanic works. Do not worry about design or edge cases.",
          hint: "Hardcode dummy data everywhere. The goal is to see data flow from point A to point B."
        },
        {
          title: "Step 5: Fleshing out the Main Components",
          description: `Start structuring the application using ${selectedTech[1] || 'your core framework'}. Break the ugly code down into reusable functions or components.`,
          hint: "Adhere to the Single Responsibility Principle. A function or component should do exactly one thing."
        },
        {
          title: "Step 6: Integrating State Management & Logic",
          description: `Hook up the real data or complex logic to the structured components. Ensure state updates properly across the abstract layers.`,
          hint: "Console.log is your friend here. If state isn't updating correctly, ensure you aren't mutating objects directly in memory."
        },
        {
          title: "Step 7: Handling Errors & Edge Cases",
          description: "Think about everything that could possibly go wrong. Empty states, network failures, bad user input, etc.",
          hint: "Wrap risky operations in try/catch blocks and always display meaningful fallback UI to the user."
        },
        {
          title: "Step 8: UI Polish & Aesthetics",
          description: "Now that the app functions perfectly, make it look professional. Apply a cohesive color scheme, typography, and layout spacing.",
          hint: "Less is more. Use plenty of whitespace and stick to a maximum of two primary font families."
        },
        {
          title: "Step 9: Code Optimization & Refactoring",
          description: "Clean up your codebase. Remove unused variables, extract complex logic into helper files, and write inline documentation.",
          hint: "Ask yourself: 'If someone else read this code in 6 months, would they understand what it does?'"
        },
        {
          title: "Step 10: Final Testing & Deployment",
          description: "Run final manual tests and deploy your project to a public repository or hosting provider to share with the world.",
          hint: "Write a high-quality README.md that includes a description, tech stack, and screenshots of your final product!"
        }
      ]
    });
  }
});

const fileContent = `
export const questions = [
  {
    id: 'domain',
    title: 'What domain interests you most?',
    options: ${JSON.stringify(domains)}
  },
  {
    id: 'level',
    title: 'What is your current experience level?',
    options: ${JSON.stringify(levels)}
  },
  {
    id: 'time',
    title: 'How much time do you want to invest?',
    options: ${JSON.stringify(times)}
  }
];

export const projects = ${JSON.stringify(projects, null, 2)};

export const fallbackProject = {
  id: 'fallback',
  title: 'Exploratory App',
  domain: 'General',
  level: 'Beginner',
  time: 'A weekend',
  description: 'Write a simple, robust application just to get your hands dirty.',
  techStack: ['Node.js', 'Python'],
  steps: []
};
`;

const outputPath = path.join(__dirname, 'src', 'data', 'projects.js');
fs.writeFileSync(outputPath, fileContent);
console.log('Successfully generated 625 deep projects to', outputPath);
