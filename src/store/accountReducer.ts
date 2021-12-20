import { LOGIN } from "./actions";

export const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: {
    id: "",
    email: "",
    name: "",
    username: "",
  },
};

const accountReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN: {
      const { user } = action.payloa;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user: user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
