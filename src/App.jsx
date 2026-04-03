import { useState } from 'react';
import './App.css';
import { questions, projects, fallbackProject } from './data/projects';

// Icons as basic pure SVGs
const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function App() {
  const [currentStep, setCurrentStep] = useState('landing'); // landing, quiz, result
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [matchedProject, setMatchedProject] = useState(null);

  // Restart sequence
  const handleReset = () => {
    setCurrentStep('landing');
    setCurrentQuestionIdx(0);
    setAnswers({});
    setMatchedProject(null);
  };

  const handleStart = () => {
    setCurrentStep('quiz');
  };

  const handleAnswerSelect = (option) => {
    const question = questions[currentQuestionIdx];
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      findProject(newAnswers);
    }
  };

  const findProject = (userAnswers) => {
    // 1. Filter by Domain exactly
    let possibleMatches = projects.filter(p => p.domain === userAnswers.domain);
    
    // 2. Filter by Level exactly
    let levelMatches = possibleMatches.filter(p => p.level === userAnswers.level);
    if (levelMatches.length > 0) possibleMatches = levelMatches;

    // 3. Filter by Time exactly
    let timeMatches = possibleMatches.filter(p => p.time === userAnswers.time);
    if (timeMatches.length > 0) possibleMatches = timeMatches;
    
    // 4. Randomly pick one of the best matches
    if (possibleMatches.length > 0) {
      const idx = Math.floor(Math.random() * possibleMatches.length);
      setMatchedProject(possibleMatches[idx]);
    } else {
      setMatchedProject(fallbackProject);
    }
    
    setCurrentStep('result');
  };

  return (
    <div className="app-container">
      <nav className="navbar fade-in-up">
        <div className="logo" onClick={handleReset}>
          <SparkleIcon /> IdeaGen
        </div>
      </nav>

      <main className="main-content">
        {currentStep === 'landing' && <LandingView onStart={handleStart} />}
        {currentStep === 'quiz' && (
          <QuizView 
            question={questions[currentQuestionIdx]} 
            onSelect={handleAnswerSelect}
            totalQuestions={questions.length}
            currentIndex={currentQuestionIdx}
          />
        )}
        {currentStep === 'result' && matchedProject && (
          <ResultView project={matchedProject} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

function LandingView({ onStart }) {
  return (
    <div className="landing-view fade-in-up">
      <h1 className="hero-title">
        Discover <br/><span className="text-gradient">Your Next Project</span>
      </h1>
      <p className="hero-subtitle">
        Break out of tutorial hell. Answer a few short questions and we’ll give you a curated, fully detailed project roadmap designed specifically for your skill level.
      </p>
      <button className="btn-primary start-btn delay-200" onClick={onStart}>
        Start Generator
      </button>
    </div>
  );
}

function QuizView({ question, onSelect, totalQuestions, currentIndex }) {
  return (
    <div key={question.id} className="quiz-view fade-in-up">
      <div className="quiz-header">
        <div className="question-counter">Question {currentIndex + 1} of {totalQuestions}</div>
        <h2 className="question-title">{question.title}</h2>
      </div>
      <div className="options-container fade-in-up delay-100">
        {question.options.map((opt, i) => (
          <button 
            key={i} 
            className="option-btn" 
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultView({ project, onReset }) {
  const [expandedStep, setExpandedStep] = useState(null);

  return (
    <div className="result-view">
      <button className="back-btn" onClick={onReset}>← Start Over</button>
      
      <div className="glass-panel project-card">
        <div className="badge-row fade-in-up">
          <span className="badge domain">{project.domain}</span>
          <span className="badge level">{project.level}</span>
          <span className="badge time">{project.time}</span>
        </div>
        <h1 className="project-title fade-in-up delay-100">{project.title}</h1>
        <p className="project-desc fade-in-up delay-200">{project.description}</p>
        
        <div className="tech-stack fade-in-up delay-300">
          {project.techStack.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
        </div>
      </div>

      <div className="roadmap-container fade-in-up delay-300">
        <h2 className="roadmap-title">Implementation Roadmap</h2>
        <div className="steps">
          {project.steps.map((step, i) => {
            const isExpanded = expandedStep === i;
            return (
              <div key={i} className="step-card">
                <div className="step-header">
                  <div className="step-number">0{i + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-desc">{step.description}</p>
                
                <div className="hint-section">
                  <button 
                    className="toggle-hint" 
                    onClick={() => setExpandedStep(isExpanded ? null : i)}
                  >
                    {isExpanded ? 'Hide Hint' : 'Show Hint'}
                  </button>
                  {isExpanded && (
                    <div className="hint-box">
                      <p>{step.hint}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
