import React from "react";
import { connect } from "react-redux";
import { getRestaurant, refineRestaurantSearch } from "../../action/index";

import "./Main.css";

class Main extends React.Component {
// showNoCityError is to show the no city found statement only when user type in the 
// input box

  showNoCityError = false;

  submit = () => {

    this.props.getRestaurant(this.textInput.value, true);
  };
//this submit function will work when user type a particular cuisine
  onRefineSubmit = (event) => {
    console.log(event.keycode);
    if (event.keyCode === 13) {
      this.props.refineRestaurantSearch(
        this.refineInput.value,
        this.props.searchedRestaurantList
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div className="main-header">
          <div className="main-text">
            <h1>Search Restaurant</h1>
          </div>

          {this.props.searchedRestaurantList <= 0 && (
            <div className="search-text">{"Please type name of the city"}</div>
          )}
        <div id="input-box">
        <input
            aria-describedby="search-city"
            aria-label="label-search"
            onChange={this.submit}
            type="text"
            placeholder="Enter city"
            ref={(ref) => {
              this.textInput = ref;
            }}
          />
        </div>


          <div className="rest-list">
            {(
              <p>
                total results found: {this.props.searchedRestaurantList.length}
              </p>
            ) &&
              this.props.searchedRestaurantList.length > 0 &&
              this.props.searchedRestaurantList.map((value, index) => (
                <div key={index} className="items">
                  
                  <p>{value.name}</p>
                  <p>Address:{value.address}</p>
                  <p>Cuisine: {value.cuisine}</p>
                 
                </div>
              ))}
          </div>

          <br />
          {this.props.searchedRestaurantList.length > 0 && (
            <p>
              total results found: {this.props.searchedRestaurantList.length}
              <br />
            </p>
          )}
          {this.props.showNoCityError &&
            this.props.searchedRestaurantList.length === 0 &&
            "no city to show"}

          <br />
          {this.props.searchedRestaurantList.length > 0 && (
            <div>{"what kind of cuisine would you like?"}</div>
          )}
          {this.props.searchedRestaurantList.length > 0 && (
            <>
              <input
                aria-describedby="search-cuisine"
                onKeyUp={(event) => this.onRefineSubmit(event)}
                type="text"
                ref={(ref) => (this.refineInput = ref)}
              />

              <button 
              onClick={this.onRefineSubmit}
              aria-label="label-button"
              >Cuisine Restaurants
              </button>
              {this.props.refinedCuisineList.length > 0 &&
                this.props.refinedCuisineList.map((value, index) => (
                  <div key={index}>
                    <div>{value.name}</div>
                    <div>{value.address}</div>
                    <div>{value.cuisine}</div>
                  </div>
                ))}
              <p>total results found: {this.props.refinedCuisineList.length}</p>
            </>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  searchedRestaurantList: state.searchedRestaurantList,
  refinedCuisineList: state.refinedCuisineList,
  showNoCityError: state.showNoError
});

const mapDispatchToProps = { getRestaurant, refineRestaurantSearch };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
