/* eslint-disable  linebreak-style */
/* eslint-disable  indent */
import React from 'react';
import { useSelector } from 'react-redux';
import Questions from './Questions';
import UserNameInput from './UserNameInput'; 
import { LoadingPage } from './LoadingPage';


const StartScreen = () => {
  const loading = useSelector((store) => store.questions.loading);
  const question = useSelector((store) => store.questions.username); //with usernme we go to qestions body
  
 //passing/grabbing  props
return (
<section>
  <div>
    {loading ? <LoadingPage /> : question === '' ? <UserNameInput /> : <Questions question={question}/>}</div>;  { /* take question as a prop from start to question component */ }
</section>
)}


export default StartScreen;
