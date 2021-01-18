import { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import {
  createNewSubcategory,
  getSingleSubcategory,
  getSubcategoryList,
  updateSubcategory,
} from "../../actions/subcategoryActions";

class EditSubcategory extends Component {
  state = { show: false };

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    if (this.props.subcatId) {
      this.props.getSingleSubcategory(this.props.subcatId, this.props.contract);

      this.setState({
        name: this.props.subcategory_name,
      });
    }
  }

  saveSubCategory = async () => {
    if (this.props.subcatId) {
      this.props.updateSubcategory(
        this.props.subcatId,
        this.state.name,
        this.props.category_id,
        this.props.contract
      );
    } else {
      this.props.createNewSubcategory(
        this.state.name,
        this.props.category_id,
        this.props.contract
      );
    }

    if (!this.props.error) {
      await this.props.getSubcategoryList(
        this.props.category_id,
        this.props.contract
      );
    }
  };

  render() {
    return (
      <span>
        <span onClick={this.toggleModal}>{this.props.children}</span>
        <Modal
          show={this.state.show}
          onHide={this.toggleModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="subCat"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="subcatForm">
              <div className="name">
                <input type="text" placeholder="Subategory Name" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="link" onClick={this.toggleModal}>
              Save
            </div>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  const { contract } = state.common;
  const { id, cat_id, subcategory_name, loading, error } = state.subcategory;

  return {
    contract,
    id,
    cat_id,
    subcategory_name,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSubcategoryList: (id, contract) =>
      dispatch(getSubcategoryList(id, contract)),
    getSingleCategory: (id, contract) =>
      dispatch(getSingleSubcategory(id, contract)),
    createNewCategory: (name, contract) =>
      dispatch(createNewSubcategory(name, contract)),
    updateCategory: (id, name, contract) =>
      dispatch(updateSubcategory(id, name, contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSubcategory);
