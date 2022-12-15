import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import QuestionList from './QuestionList';

import './HomeMainBar.css';

const HomeMainBar = () => {

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if(user === null){
      alert("Log In or Sign Up to ask a question.")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  const questionList = useSelector((state) => state.questionsReducer)


  // var questionList =[{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs", "reactjs", "mongodb"],
  //   userPosted: "streak",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "streak",
  //     answeredOn: "dec 22",
  //     userId: 2,

  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a birthday selector?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs", "reactjs", "mongodb"],
  //   userPosted: "maker",
  //   userId: 1,
  //   askedOn: "june 28",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "maker",
  //     answeredOn: "dec 20",
  //     userId: 2,

  //   }]
  // }]
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className="ask-btn">Ask Question</button>
      </div>
      <div>
        {
          questionList.data === null ? <h1>Loading ...</h1> :
          <>
            <p>{questionList.data.length} Questions </p>
            <QuestionList questionList={questionList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainBar