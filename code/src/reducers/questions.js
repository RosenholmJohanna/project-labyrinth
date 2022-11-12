/* eslint-disable  linebreak-style */
/* eslint-disable  indent */

import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {
    username: '',  
    question: '', 
    direction: '',
    description: '',
    history: []
    
  },
  reducers: {
    setUserName: (store, action) => { 
      store.username = action.payload;
    },
   setQuestion: (store, action) => { 
    store.question = action.payload; 
    },

    setDirection: (store, action) => {
      store.direction = action.payload
    },    

    setDescription: (store, action) => { 
      store.description = action.payload; 
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  }
});
export default questions;

export const generateQuestion = () => {
  return (dispatch, getState) => {
    dispatch(questions.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ 
      username: getState().questions.username ,  //getState().questions.userName
    })
    })
      .then(res => res.json())
      .then ((json) => { 
        console.log('fetch start works', (json))
      dispatch(questions.actions.setQuestion())
      //dispatch(questions.actions.setUserName(json)) //if dispatch then fetch 2(action) doesn't work - screaming for direction i request body
      
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(questions.actions.setLoading(false)))
  }
}; 
      //.then((question) => {dispatch =>(questions.actions.setQuestion(question))
       //dispatch(questions.actions.setDescription(questions.description)); //(json)

      export const nextQuestion = ( direction ) => {  //
        return (dispatch, getState) => {
          fetch('https://labyrinth.technigo.io/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({
              username: getState().questions.username, 
              direction
            }),
          })
          .then(res => res.json())
          .then((data) => {
           
            console.log('fetch ACTION works', (data))
          })
          .catch((error) => console.log(error))
          .finally(() => dispatch(questions.actions.setLoading(false)))
        }
      };

      
      