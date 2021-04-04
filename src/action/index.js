import restaurants from "../api/restaurantList.json";

const ADD_RESTAURANT_LIST = (repos) => {
  return { type: "ADD_RESTAURANT_LIST", repos };
};


export const getRestaurant = (location, showNoCityError) => async (
  dispatch
) => {
  let restaurantByLocation;
  showNoCityError = true;
  const restaurantList = restaurants.restaurantList;
  for (let index = 0; index < restaurantList.length; index++) {
    const element = restaurantList[index];
    restaurantByLocation = element[location];
    if (restaurantByLocation !== undefined) break;
  }
  if (restaurantByLocation === undefined) restaurantByLocation = [];
  setTimeout(() => {
    dispatch(
      ADD_RESTAURANT_LIST({
        restaurantByLocation: restaurantByLocation,
        refinedCuisineList: [],
        showNoCityError: showNoCityError
      })
    );
  }, 500);
};

export const refineRestaurantSearch = (cuisineName, searchedRestaurantList) => (
  dispatch
) => {
  let refinedCuisineList = [];
  searchedRestaurantList.forEach((element) => {
    let cuisineFound = false;
    for (let i = 0; i <= element.cuisine.length; i++) {
      const value = element.cuisine[i];
      if (value === cuisineName) {
        cuisineFound = true;
        break;
      }
    }
    if (cuisineFound) {
      refinedCuisineList.push(element);
    }
    if (refinedCuisineList === undefined) refinedCuisineList = [];
  });
  dispatch(
    ADD_RESTAURANT_LIST({
      restaurantByLocation: searchedRestaurantList,
      refinedCuisineList: refinedCuisineList,
      showNoCityError: true
    })
  );
};
