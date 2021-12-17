import { login as log } from "../../services/loginService";

export const login = (email, password) => async (dispatch) => {
  try {
    const data= await log(email, password);
    console.log("check", JSON.stringify(data.data));
    dispatch({ type: "SET_USER_DATA", payload: data.data.token });

    return true;
  } catch (error) {
    dispatch({
      type: "SHOW_ALERT",
      payload: { type: 'error', msg: 'SOMETHING_WENT_WRONG' },
    });

    return false;
  }
};
