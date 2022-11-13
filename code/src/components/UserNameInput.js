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
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import questions, { generateQuestion, nextQuestion } from 'reducers/questions';
import styled from 'styled-components'

const Welcome=styled.h3`
//color: white;
`

const Button=styled.button`
font-family: Arial, Helvetica, sans-serif;
background: #050;
//color: white;
border-radius: 5px;
margin: 2%;
padding: 1%;
border-style: none; 
`

const Label=styled.label`
//font-family: Arial, Helvetica, sans-serif;
//color: transparent;
border-radius: 5px;
margin: 2%;
padding: 1%;
border-style: none; 
`

const UserNameInput = () => {
  const [UserNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch(); //useDespatch to acess dispatchfunction in reducer-store

  const onFormSubmit = (event) => { 
    event.preventDefault();
    dispatch(questions.actions.setUserName(UserNameInputValue))
    dispatch(generateQuestion()); //  On submit the genereteQuestion will display/start the game
  };

  return (
    <>
    <Welcome> Welcome to the labyrint</Welcome>
    <form onSubmit={(e) => onFormSubmit(e)}>
       <Label htmlFor="user-input"> 
         <input
          id="user-input"
          type="text" 
          required
          onChange={(e) => setUserNameInputValue(e.target.value)} 
           />
         </Label>
      <Button type="submit" onClick={onFormSubmit} > Start labyrinth</Button>
   </form>
   </>
    )
}

export default UserNameInput;