const { SET_LOADING, SET_DISPLAY_LAYOUT } = require('../actions/layout');

const initialState = {
  loading: false,
  header: true,
  footer: true,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    case SET_DISPLAY_LAYOUT:
      return { ...state, ...payload };

    default:
      return { ...state };
  }
};

export default reducer;
