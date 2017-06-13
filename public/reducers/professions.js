import * as Types from "../constants";

const defaultState = [
  {
    name: "",
    profession: "",
    professionId: 0
  },
];

export default (state = [], { type, ...action }) => {
  switch (type) {
    case Types.LOAD_PROFESSIONS_DONE:
      console.log('reducer professions:', action.professions);
      return action.professions;
    default:
      return state;
  }
};