

//the restaurant reducer will take state and dispatch the action
const restaurantReducer = (
    state = {
      searchedRestaurantList: [],
      refinedCuisineList: [],
      showNoError: false
    },
    action
  ) => {
    switch (action.type) {
      case "ADD_RESTAURANT_LIST":
        return {
          searchedRestaurantList: action.repos.restaurantByLocation,
          refinedCuisineList: action.repos.refinedCuisineList,
          showNoError: action.repos.showNoCityError
        };
      default:
        return state;
    }
  };
  
  export default restaurantReducer;
  