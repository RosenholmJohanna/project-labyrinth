/* eslint-disable  linebreak-style */
/* eslint-disable  indent */
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import questions, { generateQuestion } from 'reducers/questions';
import styled from 'styled-components'

const Welcome=styled.h3`
color: white;
`

const Button=styled.button`
font-family: Arial, Helvetica, sans-serif;
background: #050;
color: white;
border-radius: 5px;
margin: 2%;
padding: 1%;
border-style: none; 
`

const Label=styled.label`
font-family: Arial, Helvetica, sans-serif;
color: transparent;
border-radius: 5px;
margin: 2%;
padding: 1%;
border-style: none; 
`

const userNameInput = () => {
  //const userName = useSelector((store) => store.questions.username);
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();

   const onFormSubmit = (event) => { 
    event.preventDefault();
    dispatch(questions.actions.setUserName(userNameInputValue))
    dispatch(generateQuestion()); // on submit should take us to Questions component and start labyrinth
  }

  return (
    <>
    <Welcome> Welcome to the labyrint</Welcome>
    <form onSubmit={(event) => onFormSubmit(event)}>
       <Label htmlFor="user-input"> 
         <input id="user-input"
         required
         type="text" onChange={(event) => setUserNameInputValue(event.target.value)} />
         </Label>
      <Button type="submit"> Start labyrinth!</Button>
   </form>
   </>
    )
}

export default userNameInput;