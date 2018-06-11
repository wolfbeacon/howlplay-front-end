import {push} from 'react-router-redux';
import { DEFAULT_API_URL } from '../../configurations';
import axios from 'axios/index';

const MAIN_URL = DEFAULT_API_URL + "/quizzes/";

export function toggleNavbar() {
    return {
        type: 'TOGGLE_NAVBAR',
    }
}

export function setQuizToken(token) {
    return dispatch => {
      axios.get(MAIN_URL + token).then((data) => {
        if (data.data.length === 0) {
          dispatch({
            type: 'BAD_QUIZ_TOKEN'
          });
        } else {
          dispatch({
            type: 'SET_QUIZ_TOKEN',
            payload: token
          });
          dispatch(push('#/dashboard'));
          window.location.reload();
        }
      }, (err) => {
        dispatch({
          type: 'MISSING_QUIZ_TOKEN'
        });
      });
    }
}
