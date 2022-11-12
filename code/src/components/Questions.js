/* eslint-disable  linebreak-style */
/* eslint-disable  indent */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion } from 'reducers/questions';
//import  StartScreen  from './StartScreen';
import styled from 'styled-components'

const UserNameText=styled.p`
color: white;
`

const Wrapper =styled.section`
color: white;
`


const Questions = () => { 
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.questions.username);
  const description = useSelector((store) => store.questions.description)
  //const firstQuestion = useSelector((store) => store.questions.description) // map through actions [] to get histort of previous moves;
 //const question = useSelector((store)=> store.questions.question); 
  //const question = question.question
  

  const onButtonClick = (direction) => {
   dispatch(nextQuestion(direction));
  }
  return (
  <Wrapper>
    <UserNameText>
      Okay,{userName}, find the right path. Good Luck!
    </UserNameText>
        <button
          type="button"
          onClick={() => onButtonClick(userName)}> //with this the fetch console log same as in fetch 1
        </button>
  </Wrapper>
)}
 

export default Questions;



{ /*

 <UserNameText>
    Okay <strong>{userName}</strong> Good Luck!
    </UserNameText>
<p>First description</p>
<p>{firstQuestion}</p> 

  <>
    { actions.map((action) => (
      <> key={actions.description}
        <p>{action.description}</p>
          <button 
           onClick={() => dispatch(nextQuestion(action.direction))}>{action.direction}
          </button>
          </>
        ))            
    }        
  </>
*/ }
 