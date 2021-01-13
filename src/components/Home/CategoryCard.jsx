import { Component } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import CategoryModal from "../Modals/CategoryModal";

class CategoryCard extends Component {
  state = {};
  render() {
    return (
      <div className="card-1">
        <span className="sm">0 Sucategories</span>
        <div className="top-right">
          <CategoryModal>
            <span className="link">
              <AiFillEdit />
            </span>
          </CategoryModal>
          <a href="" className="ml20px">
            <AiFillDelete />
          </a>
        </div>
        <br />
        <br />
        <div className="clear"></div>
        <div className="img">
          <img
            src="https://img.icons8.com/officel/2x/bank-building.png"
            alt=""
          />
          <span>Bank with a long name</span>
        </div>
        <br />
        <span className="link block" onClick={this.props.toggleCat}>
          Add Subcategories
        </span>
      </div>
    );
  }
}

export default CategoryCard;
