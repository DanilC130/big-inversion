import React from 'react';

const PersonCard = props => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         age: this.props.age
    //     };

    // }

    // ageHandler = () => {
    //     this.setState({
    //         age: this.state.age + 1
    //     })
    // }
 
        return (
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
                {/* <p><button onClick={ageHandler}>Birthday Button for {props.firstName} {props.lastName}  </button></p> */}

            </div>
        )
}
export default PersonCard;
// Create a component called PersonCard that accepts the following props:

// firstName
// lastName
// age
// hairColor
// Then, display four PersonCard components that show four different people, using props.