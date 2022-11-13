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
import { createSlice } from '@reduxjs/toolkit';

//export const API_START = 'https://labyrinth.technigo.io/start'

//export const API_ACTION = 'https://labyrinth.technigo.io/action'

{ /* question: '', 
description: '',
direction: '', 
setQuestion: (store, action) => { 
    store.question = action.payload; 
    console.log(store.question)
    },

    setDirection: (store, action) => {
      store.direction = action.payload
      console.log(store.direction)
    },    

    setDescription: (store, action) => { 
      store.description = action.payload; 
      console.log(store.description)
    },

*/ }


const questions = createSlice({
  name: 'questions',
  initialState: {
    
    currentstage: '',
    description: '',
    username: '',  //can't reoad if null --> stuck on question page
    history: []
  },
 

  reducers: {
//cordinates
    setCurrentStage: (store, action) => { 
      store.currentstage = action.payload;
      console.log(store.currentstage)
      console.log(auth);
    },

    
    setUserName: (store, action) => { 
      store.username = action.payload;
      console.log(store.username)
    },

    //[actions] done
    setHistory: (store, action) => {
      if (store.currentstage) {
      store.history = [...store.history, action.payload]
      // store.step = store.moves.push(action.payload) 
    }
  },

  setDescription: (store, action) => { 
    store.username = action.payload;
    console.log(store.description)
  },


    setLoading: (store, action) => {
      store.loading = action.payload;
      console.log(store.loading)
    }
  }
});
export default questions;


export const generateQuestion = () => {
  return (dispatch, getState, action) => {
    dispatch(questions.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', { 
      method: 'POST',
      headers:{ 'Content-Type' : 'application/json' }, 
      body: JSON.stringify({ 
      username: getState().questions.username,
      
    })
    })
      .then((res) => res.json())
      .then((data) => { 
      console.log('fetch start works',(data))
      return dispatch(questions.actions.setCurrentStage(data))
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(questions.actions.setLoading(false)))
  }
  
};  // dispatch(questions.actions.setQuestion())
// dispatch(questions.actions.setUserName(json)) // objects not valid - if dispatch then fetch 2(action) doesn't work - screaming for direction i request body
      //.then((question) => {dispatch =>(questions.actions.setQuestion(question))
       //dispatch(questions.actions.setDescription(questions.description)); //(json)


      //single action []
      export const nextQuestion = (action) => {  
       dispatch(questions.actions.setLoading(true)) //when gone start button fetch both url......
        return (dispatch, getState) => {
          fetch('https://labyrinth.technigo.io/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({
              username: getState().questions.username, 
              type: action.type,
              direction: action.direction
            })
          })
          .then((res) => res.json())
          .then((data) => {
            
            dispatch(questions.actions.setCurrentStage(data))
            dispatch(questions.actions.setDescription(data))
            dispatch(questions.actions.setHistory(data));
            console.log('fetch ACTION works', (data))
          })
          .catch((error) => console.log(error))
          .finally(() => dispatch(questions.actions.setLoading(false)))
        }
      };

      
      