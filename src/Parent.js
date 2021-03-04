import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Child1UL from "./Child1-UL";
import Child2Form from "./Child2-form"
import "./Parent.css"

class Parent extends Component {
  state = {
    wishList: [
      {
        id: uuidv4(),
        wish: "get baller job",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        isPriority: false,
      },
      {
        id: uuidv4(),
        wish: "win lottery",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        isPriority: false,
      },
      {
        id: uuidv4(),
        wish: "retire early",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        isPriority: false,
      },
    ],
    inputWish: "",
  };

  submitWish = (event) => {
    event.preventDefault();

    let newWishArray = [
        ...this.state.wishList, 
        { id: uuidv4(), wish: this.state.inputWish, isDone: false, isEditToggle: false, },
    ];

    this.setState({
        wishList: newWishArray,
        inputWish: "",
    });
  };;

  handleOnChange = (event) => {
    this.setState({
      inputWish: event.target.value,
    });
  };

  deleteByID = (id) => {
    let filteredWishList = this.state.wishList.filter((item) => {
      if (item.id !== id) {
        item.isButtonToggle = false;
        return item;
      }
    });

     this.setState({
       wishList: filteredWishList,
     });

  }

  handleIsDone = (id) => {
    let updatedWishListArray = this.state.wishList.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
      return item;
    })
    this.setState({
      wishList: updatedWishListArray,
    });
  }


  editToggle = (id) => {
    let toggledWishList = this.state.wishList.map(item => {
      if(item.id === id) {
        item.isEditToggle = !item.isEditToggle
      }

      if (item.id !== id) {
        item.isButtonToggle = !item.isButtonToggle;
      }


      return item;
    })

    this.setState({
      wishList: toggledWishList,
    })
  }

  editUpdateWish = (id, newWishItem) => {
    let updatedWishItem = this.state.wishList.map((item) => {
      if (item.id === id) {
        item.wish = newWishItem;
      }
      return item;
    })

    this.setState({
      wishList: updatedWishItem,
    });
  };




  render() {
    return (
      <div className="parent-container">
        <Child2Form
          submitWish={this.submitWish}
          handleOnChange={this.handleOnChange}
          inputWishItem={this.state.inputWish}
        />

        <Child1UL
          wishList={this.state.wishList}
          deleteByID={this.deleteByID}
          handleIsDone={this.handleIsDone}
          editToggle={this.editToggle}
          editUpdateWish={this.editUpdateWish}
          priority={this.priority}
        />
      </div>
    );
  }
}

export default Parent;
