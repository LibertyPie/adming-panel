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
  state = { show: false, name: "" };

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  async componentDidMount() {
    if (this.props.subcatId) {
      let subcategory = await this.props.getSingleSubcategory(
        this.props.subcatId,
        this.props.contract
      );

      this.setState({
        name: subcategory[0],
      });
    }
  }

  saveSubCategory = async () => {
    if (this.props.subcatId) {
      await this.props.updateSubcategory(
        this.props.subcatId,
        this.state.name,
        this.props.category_id,
        this.props.account,
        this.props.contract
      );
    } else {
      await this.props.createNewSubcategory(
        this.state.name,
        this.props.category_id,
        this.props.account,
        this.props.contract
      );
    }

    await this.props.getSubcategoryList(
      this.props.category_id,
      this.props.contract
    );

    if (this.state.show) {
      this.toggleModal();
    }
  };

  updateName = (event) => {
    this.setState({
      name: event.target.value,
    });
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
                <input
                  type="text"
                  placeholder="Subategory Name"
                  onChange={this.updateName}
                  value={this.state.name}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {!this.props.loading ? (
              <div className="link" onClick={this.saveSubCategory}>
                Save
              </div>
            ) : (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  const { contract, account } = state.common;
  const { id, cat_id, subcategory_name, loading, error } = state.subcategory;

  return {
    contract,
    account,
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
    getSingleSubcategory: (id, contract) =>
      dispatch(getSingleSubcategory(id, contract)),
    createNewSubcategory: (name, cat_id, account, contract) =>
      dispatch(createNewSubcategory(name, cat_id, account, contract)),
    updateSubcategory: (cat_id, name, id, account, contract) =>
      dispatch(updateSubcategory(cat_id, name, id, account, contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSubcategory);
