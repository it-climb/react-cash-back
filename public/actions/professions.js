import * as Types from "../constants";
import {inputUser} from './user';

const loadProfessionsDone = professions => ({
  type: Types.LOAD_PROFESSIONS_DONE,
  professions
});

export const loadProfessions = () =>
  (dispatch, getState) => {
    fetch("/professions")
      .then(res => res.json())
      .then(professions => {
        dispatch(inputUser({professionId: professions[0].professionId}));
        return dispatch(loadProfessionsDone(professions));
      })
  };