import React from "react";
import { connect } from "react-redux";
import { getRestaurant, refineRestaurantSearch } from "../../action/index";

import "./Main.css";

class Main extends React.Component {
  // showNoCityError is to show the no city found statement only when user type in the 
  // input box
  
    showNoCityError = false;
  
    submit = () => {
  
      this.props.getRestaurant(this.textInput.value.toLowerCase(), true);
    };
  //this submit function will work when user type a particular cuisine
    onRefineSubmit = (event) => {

        this.props.refineRestaurantSearch(
          this.refineInput.value,
          this.props.searchedRestaurantList
        );
    };
  
    render() {
      return (
        <div className="container">
          <div className="main-header">
            <div className="main-text">
              <h1>Search Restaurant</h1>
            </div>

          <div id="input-box">
          <input
              aria-describedby="search-city"
              aria-label="label-search"
              onChange={this.submit}
              type="text"
              placeholder="Find restaurant in your city"
              
              ref={(ref) => {
                this.textInput = ref;
              }}
            />
          </div>
  
            <div className= {this.props.showNoCityError && this.props.searchedRestaurantList.length !== 0 ?  'rest-list' : null}>
  
            {this.props.showNoCityError &&
              this.props.searchedRestaurantList.length === 0 &&
              "Please enter city name for info"
            }
  
              
              {this.props.searchedRestaurantList.length > 0 && (
                <p>
                   Total results found: {this.props.searchedRestaurantList.length}
                  <br />
                </p>
              )}
  
              {(
                <p>
                  Total results found: {this.props.searchedRestaurantList.length}
                </p>
              ) &&
                this.props.searchedRestaurantList.length > 0 &&
                this.props.searchedRestaurantList.map((value, index) => (
                  <div key={index} className="items">
                    
                    <div className='para-top'>
                      <p className='para1'>{value.name}</p>
                      <p className='para2'>{value.address}</p>
                    </div>
                    <p className='para3'>Cuisine: {value.cuisine}</p>
                    <p className='para3'>Rating: {value.rating}</p>
                   
                  </div>
                ))}
            </div>
  
            <br />
  
          
            <br />
            {this.props.searchedRestaurantList.length > 0 && (
              <div className='para-kinds'>{"What kind of cuisine would you like?"}</div>
            )}
            {this.props.searchedRestaurantList.length > 0 && (
              <>
                <input
                placeholder="Search for cuisine type"
                  aria-describedby="search-cuisine"
                  onChange={this.onRefineSubmit}
                  type="text"
                  ref={(ref) => (this.refineInput = ref)}
                />
  
                {this.props.refinedCuisineList.length > 0 &&
                  this.props.refinedCuisineList.map((value, index) => (
                      <div key={index} className='info-cuisine'>
                        <p>Total results found: {this.props.refinedCuisineList.length}</p>
                        <div className='each-cuisine'>
                          <div className='cuisine-top'>
                            <div className="cuisine-name">{value.name}</div>
                            <div className="cuisine-address">{value.address}</div>
                          </div>
                        </div>
                      </div>
                   
                  ))}
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
