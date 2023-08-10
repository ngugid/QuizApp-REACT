import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
    {
			questionText: 'What does CSS stand for?',
			answerOptions: [
				{ answerText: 'Computer Style Sheets', isCorrect: false },
				{ answerText: 'Cascading Style Sheets', isCorrect: true },
				{ answerText: 'Creative Style Sheets', isCorrect: false },
				{ answerText: 'Colour Style Sheets', isCorrect: false },
			],
		},
    {
			questionText: 'Where in an HTML document is the correct place to refer to an external style sheet?',
			answerOptions: [
				{ answerText: 'In the <body> section', isCorrect: false },
				{ answerText: 'At the end of the document', isCorrect: false },
				{ answerText: "You can't refer to an external style sheet", isCorrect: false },
				{ answerText: 'In the <head> section', isCorrect: true },
			],
		},
    {
			questionText: 'What is the capital of Kenya?',
			answerOptions: [
				{ answerText: 'Nairobi', isCorrect: true },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
    {
			questionText: 'What town is known as `The City of Champions`?',
			answerOptions: [
				{ answerText: 'Nakuru', isCorrect: false },
				{ answerText: 'Eldoret', isCorrect: true },
				{ answerText: 'Iten', isCorrect: false },
				{ answerText: 'Kingston', isCorrect: false },
			],
		},
    {
			questionText: 'How many cities does Kenya have?',
			answerOptions: [
				{ answerText: 'Three', isCorrect: false },
				{ answerText: 'Two', isCorrect: false },
				{ answerText: 'Four', isCorrect: true },
				{ answerText: 'One', isCorrect: false },
			],
		},
    {
			questionText: 'How do you insert a comment in a CSS file?',
			answerOptions: [
				{ answerText: '/* this is a comment */', isCorrect: true },
				{ answerText: '// this is a comment //', isCorrect: false },
				{ answerText: '// this is a comment', isCorrect: false },
				{ answerText: '#this is a comment', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(9);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <div>
          <button onClick={()=> restartGame()}>Return to start</button>
          </div>
          
      	</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>

              
						))}
					</div>
				</>
			)}
		</div>
	);
}