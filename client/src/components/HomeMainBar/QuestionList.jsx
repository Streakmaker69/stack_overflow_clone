import React from 'react';

import QuestionAll from './QuestionAll';

const QuestionList = ({questionList}) => {
  return (
    <>
        {
            questionList.map((question) => (
                <QuestionAll question={question} key={question._id} />
            ))
        }
    </>
  )
}

export default QuestionList