const initialState = {
  product: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };
      break;
  }
  return state;
};
