import * as Types from "../constants";

const loadProfessionsDone = professions => ({
  type: Types.LOAD_PROFESSIONS_DONE,
  professions
});

export const loadProfessions = () =>
  (dispatch, getState) => {
    fetch("/professions")
      .then(res => res.json())
      .then(professions => dispatch(loadProfessionsDone(professions)));
  };