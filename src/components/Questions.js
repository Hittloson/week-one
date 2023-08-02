import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Questions() {
  const [questions, setQuestions] = useState([
    { question: "Hi Am Looking For A Product But Can't Find It Listed On Your Website, Where Is It?", answer: "Reference site about Lorem Ipsum,\ngiving information on its origins,\nas well as a random Lipsum generator.", isExpanded: false },
    { question: "How Can I Cancel My Order?", answer: "Reference site about Lorem Ipsum,\ngiving information on its origins,\nas well as a random Lipsum generator.", isExpanded: false },
    { question: "My Order Arrived Damaged", answer: "Reference site about Lorem Ipsum,\ngiving information on its origins,\nas well as a random Lipsum generator.", isExpanded: false },
    { question: "How Do I Change My Address?", answer: "Reference site about Lorem Ipsum,\ngiving information on its origins,\nas well as a random Lipsum generator.", isExpanded: false }
  ]);

  const toggleQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isExpanded = !newQuestions[index].isExpanded;
    setQuestions(newQuestions);
  };

  return (
    <>
    <div className='FAQ'>
      <div>
        <h1>FAQs Frequently Asked Questions</h1>
        <p>Reference site about Lorem Ipsum, 
        giving information on its origins, 
        as well as a random Lipsum generator.</p>
      </div> 
      <div className='question-answer'>
        {questions.map((q, index) => (
            <div className={`FAQ-content ${q.isExpanded ? '' : 'hidden'}`} key={index}>
            <div className='icons'>
              <FontAwesomeIcon icon={q.isExpanded ? faX : faPlus} onClick={() => toggleQuestion(index)} />
            </div>
            <h1>{q.question}</h1>
            <p style={{ display: q.isExpanded ? 'block' : 'none' }}>{q.answer}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
            <h1>Hello</h1>
    </div>
    </>
   
  );
  
}

export default Questions;