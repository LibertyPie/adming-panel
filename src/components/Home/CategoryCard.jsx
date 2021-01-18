import { Component } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteCategory } from "../../actions/categoryActions";
import CategoryModal from "../Modals/CategoryModal";
import { connect } from "react-redux";

class CategoryCard extends Component {
  state = {};

  deleteCategory = async () => {
    await this.props.deleteCategory(this.props.id, this.props.contract);
  };
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
          <span className="ml20px" onClick={this.deleteCategory}>
            <AiFillDelete />
          </span>
        </div>
        <br />
        <br />j<div className="clear"></div>
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

const mapStateToProps = (state) => {
  const { contract } = state.common;
  const { errorDelete, loadingDelete } = state.category;

  return { contract, errorDelete, loadingDelete };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCategory: (id, contract) => dispatch(deleteCategory(id, contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
