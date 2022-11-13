/* eslint-disable linebreak-style */
/* eslint-disable indent */
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
import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const LoadingPage = () => {
    const loading = useSelector((store) => store.questions.loading)
    return (
      <div>
        {loading && (
            <h1>Loading....</h1>
        )}
      </div>
    )
  }