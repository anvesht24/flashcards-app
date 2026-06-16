import { useState } from 'react'
import './App.css'

const cards = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", difficulty: "easy" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", difficulty: "easy" },
  { question: "What is a variable?", answer: "A container that stores a value", difficulty: "easy" },
  { question: "What does API stand for?", answer: "Application Programming Interface", difficulty: "medium" },
  { question: "What is a function?", answer: "A reusable block of code that performs a task", difficulty: "easy" },
  { question: "What is React?", answer: "A JavaScript library for building user interfaces", difficulty: "medium" },
  { question: "What is useState?", answer: "A React hook that lets you add state to a component", difficulty: "medium" },
  { question: "What is Git?", answer: "A version control system to track code changes", difficulty: "easy" },
  { question: "What is a loop?", answer: "Code that repeats itself until a condition is met", difficulty: "easy" },
  { question: "What does DOM stand for?", answer: "Document Object Model", difficulty: "medium" },
]

const App = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(!flipped)
  }

  const handleNext = () => {
    setFlipped(false)
    let random = Math.floor(Math.random() * cards.length)
    setCurrentCard(random)
  }

  return (
    <div className="App">
      <h1>💻 CS Trivia Flashcards</h1>
      <p>Test your computer science knowledge!</p>
      <p>Number of cards: {cards.length}</p>

      <div className={`card ${cards[currentCard].difficulty}`} onClick={handleFlip}>
        <p>{flipped ? cards[currentCard].answer : cards[currentCard].question}</p>
      </div>

      <button onClick={handleNext}>Next ➡️</button>
    </div>
  )
}

export default App