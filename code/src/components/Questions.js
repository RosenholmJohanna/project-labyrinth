/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable space-infix-ops */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable block-spacing */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion } from 'reducers/questions';
import styled from 'styled-components'


const UserNameText=styled.p`
//color: white;
`

const FirstDescription=styled.p`
//color: white;
`

const Wrapper =styled.div`
//color: white;
`
const Button =styled.button`
//color: white;
`


const Questions = () => { 
  
  const userName = useSelector((store) => store.questions.username);
  //const { description } = useSelector((store) => store.questions.description)
 //const question = useSelector((store)=> store.questions.question); 
  const description = useSelector((store) => store.questions.description )
  const dispatch = useDispatch(); 
  

  const onButtonClick = (action) => {
   dispatch(nextQuestion(action));
  }
  const currentStage = useSelector((store) => {
    return store.question.currentStage;
  })


  return (
    
  <Wrapper>
    <UserNameText>
      Okay,{userName}, find the right path. Good Luck!
    </UserNameText>
    <FirstDescription 
      title={currentStage.description}>
        {currentStage.actions.map((action) => (
          <div key ={action.description}> 
          <p>{action.description}</p>
          <Button> onClick={() => onButtonClick(action)}
          {action.direction()}
          </Button>
          </div>
        ))}
    </FirstDescription>
  </Wrapper>
  )

}
 

export default Questions;



{ /*

 <button
          type="button"
          onClick={() => onButtonClick(userName)}> button
        </button>

//with this the fetch console log same as in fetch 1  //on sumbit we do fetch request buttonclick username
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
 