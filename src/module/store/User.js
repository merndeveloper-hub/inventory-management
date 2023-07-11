const initialState = {
  signedInUser: undefined,
  users: [],
  activityUser: '',
  usersLength: 0,
  userQuery: false,
  userLoader: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SIGNED_IN_USER':
      return {
        ...state,
        signedInUser: action.payload,
      };
    case 'GET_USERS':
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
      case 'GET_USER_ACTIVITY':
        return {
          ...state,
          activityUser: action.payload,
        };
    case 'GET_USERS_UPDATE':
      return {
        ...state,
        users: [...action.payload],
      };
    case 'USERS_LENGTH':
      return {
        ...state,
        usersLength: action.payload,
      };
    case 'USER_QUERY':
      return {
        ...state,
        userQuery: action.payload,
      };
    case 'SET_USER_LOADER':
      return {
        ...state,
        userLoader: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default userReducer;
