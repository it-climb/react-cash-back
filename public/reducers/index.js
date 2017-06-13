import {combineReducers} from "redux";
import User from "./user";
import Professions from "./professions";

export default combineReducers({
  user: User,
  professions: Professions,
})