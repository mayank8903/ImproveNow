import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/checkout", token);
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values) => {
  return { type: "submit_survey" };
};
