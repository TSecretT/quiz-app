import React from "react";
import "./App.css";

var questions = [
	{
		text: "5+5",
		answer : "10",
		multipleType: false
	},
	{
		text:"100+50",
		answer: "150",
		multipleType: false
	},
	{
		text: "6*4",
		answer: "24",
		multipleType: false
	},
	{
		text: "18/9",
		answer : "2",
		multipleType: false
	},
	{
		text: "Capital of Kazakhstan:",
		choices: ["Nur-Sultan", "Almaty", "Shymkent"],
		answer: "Nur-Sultan",
		multipleType: true
	},
	{
		text: "This page is build on:",
		choices: ["Swift", "React", "Lego"],
		answer: "React",
		multipleType: true
	},
]

function App() {
	const [text, setText] = React.useState("");
	const [question, setQuestion] = React.useState({});
	
	function getRandomQuestion(){
		setQuestion(questions[Math.floor(Math.random() * questions.length)])
	}

	React.useEffect(() => {
		getRandomQuestion();
	}, [])
	

	return (
		<div>
			<div>{question.text}</div>
			{question.multipleType? (
				<>
				<p>Choices:</p>
				{question.choices.map((choice, i) => {return <p>{i+1}) {choice}</p>})}
				</>
			): null}
			<input
				value={text}
				onChange={(event) => {
				setText(event.target.value);
				}}
			>
			</input>
			<button
				onClick={() => {setText("")}}
			>
				Reset
			</button>
			<button
				onClick={() => {
				if(text===question.answer){
					alert("Correct!")
				} else {
					alert("Inorrect!")
				}
				getRandomQuestion();
				setText("")
				}}
			>
				Submit
			</button>
		</div>
	);
}

export default App;