import React, { useState } from "react";
import Counter from "./Components/Counter";
import Paragraph from "./Components/Paragraph";
import ParagraphList from "./Components/ParagraphList";
import Salary from "./Components/Salary";

const App = () => {
  let [counter, setCounter] = useState(0);

  function dicrement() {
    setCounter(counter - 1);
  }
  function increment() {
    setCounter(counter + 1);
  }

  // COUNTER

  let [paragraphs, setParagraphs] = useState([]);
  let hendleParagraph = (newObj) => {
    let newParagraph = [...paragraphs];
    newParagraph.push(newObj);
    setParagraphs(newParagraph);
  };

  // job

  const [salary, setSalary] = useState([
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80, id: 1 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40, id: 2 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60, id: 3 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55, id: 4 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44, id: 5 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22, id: 6 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70, id: 7 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33, id: 8 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16, id: 9 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28, id: 10 },
    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72, id: 11 },
  ]);

  return (
    <div>
      <Counter dicrement={dicrement} increment={increment} counter={counter} />
      <Paragraph hendleParagraph={hendleParagraph} />
      <ParagraphList paragraphs={paragraphs} />
      <Salary salary={salary} />
    </div>
  );
};

export default App;
