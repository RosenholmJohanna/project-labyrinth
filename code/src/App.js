import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questions from 'reducers/questions';
import StartScreen from 'components/StartScreen';


export const App = () => {
  const reducer = combineReducers({
    questions: questions.reducer
  });
  const store = configureStore({ reducer });
  // const store = configureStore(combineReducers({
  //   quotes: quotes.reducer
  // }));

  return (
    <Provider store={store}>
    <StartScreen />
    </Provider>
  )
}
