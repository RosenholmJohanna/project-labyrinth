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
import { useSelector } from 'react-redux';
import Questions from './Questions';
import UserNameInput from './UserNameInput'; 
import { LoadingPage } from './LoadingPage';



const StartScreen = () => {
  const loading = useSelector((store) => store.questions.loading);
  const newUser = useSelector((store) => store.questions.username); //with usernme empty we go to qestions body
  
//passing/grabbing  props
 return (
  <section>
    <div>
     {loading ? <LoadingPage /> : (newUser === '' ? <UserNameInput /> : <Questions />)}{ /* take question as a prop from start to question component */ }
    </div>   
  </section>
 )
}


export default StartScreen;


