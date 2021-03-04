import React, { Component } from 'react'
import PropTypes from "prop-types";
import Button from "./common/Button"


export class Child1UL extends Component {

  state = {
    toggleInput: "",
    disabledButton: false,
  };
  handleToggleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({
      toggleInput: event.target.value,
    });
  };
  handleToggleButton = (id, itemWish) => {
    this.setState({
      toggleInput: itemWish,
    });
    this.props.editToggle(id);

    this.props.editUpdateWish(id, this.state.toggleInput);
  };

  makePriority = (id) => {
    console.log(118);
  // let priority = this.state.wishList.map((item) => {
  //   if (item.id === id) {
  //     priority === !isPriority
  //   }
  //   return priority;
  // })
  // this.setState({
  //     wishList: priority,
  // })
}


  render() {
    return (
      <ul>
        {this.props.wishList.map((item) => {
          let strikeThroughClass = `${item.isDone ? "strike-through-isDone" : ""}`;
  
          return (
            <React.Fragment key={item.id}>
              {item.isEditToggle ? (
                <input name="toggleInput" 
                onChange={this.handleToggleOnChange} 
                value={this.state.toggleInput} 
                style={{ marginRight: 10}} />
              ) : (
                <li className={strikeThroughClass}>{item.wish}</li>
              )}
  
            <Button
            propsButtonToggle={item.isButtonToggle}
            propsClassName={"btn btn-success button-style"}
            propsName={item.isEditToggle ? "Submit" : "Edit"}
            propsOnClick={() => this.handleToggleButton(item.id, item.wish)}
  
            />
  
             <Button
             propsButtonToggle={item.isButtonToggle}
             propsClassName={"btn btn-warning button-style"}
             propsOnClick={() => this.props.handleIsDone(item.id)}
             propsName={"Done"}
             />
  
            <Button
            propsButtonToggle={item.isButtonToggle}
             propsClassName={"btn btn-danger button-style"}
             propsOnClick={() => this.props.deleteByID(item.id)}
             propsName={"Delete"}
             />

            <label for="priority"> Make Priority </label>
            <input propsOnClick={this.makePriority(item.id)} name="makepriority" id="priority" type="checkbox"></input>
            
             
             
              <br />


            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}


Child1UL.propTypes = {
  wishList: PropTypes.array.isRequired,
      deleteByID: PropTypes.func.isRequired,
      handleIsDone: PropTypes.func.isRequired,
}

export default Child1UL;
