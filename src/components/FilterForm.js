import React, { Component } from 'react';

import VisibleDogs from './components/VisibleDogs';

class FilterForm extends Component {
    state = {
        filteredDogs: [],
        dogFilter = "",
    }
    
    //create a filterDogs function
    filterDogs = (dogFilter) => {
        const { dogData } = this.props;
        const filteredDogs = dogData.filter(dog => {
            const dogName = dog.name.toLowerCase();
            return dogName.includes(dogFilter.toLowerCase());
    });

    this.setState({ filteredDogs, });
    } 

    // handleChange function here to set dogFilter in state to value of event target
    //pass event target value to filterDogs function in handleChange
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value, })
        this.filterDogs(this.state.dogFilter);
    }

    // console.log("dog filter in filter form", this.state.dogFilter)
    render(){

        //map through filtered dogs and pass props to VisibleDogs component
        //show VisibleDogs under FilterForm
        const allDogs = this.props.dogData.map((dog, index) => {
            return <VisibleDogs key={index + 1} dog={dog}/>;
        });

        const filteredDogs = this.state.filteredDogs.map((dog, index) => {
            return <VisibleDogs key={index + 1} dog={dog}/>;
        });

        return (
            <div>
                <label htmlFor="filter">Filter by Dog: </label>
                <input type="text" id="filter"
                    name="dogFilter"
                    value={this.state.dogFilter}
                    // add onchange event listener
                    onChange={this.handleChange}
                />
                {this.state.filteredDogs.length
                    ? filteredDogs
                    : allDogs
                }
            </div>
        );
    }
}

export default FilterForm;