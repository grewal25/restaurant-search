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
        // console.log(action);
        return {
          searchedRestaurantList: action.repos.restaurantByLocation,
          refinedCuisineList: action.repos.refinedCuisineList,
          showNoError: action.repos.showNoCityError
        };
  
      case "CLEAR_RESTAURANT_LIST":
        return [];
      default:
        return state;
    }
  };
  
  export default restaurantReducer;
  