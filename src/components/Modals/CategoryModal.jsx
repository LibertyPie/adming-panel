import { Modal } from "react-bootstrap";
import { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { connect } from "react-redux";
import {
  createNewCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
} from "../../actions/categoryActions";

class CategoryModal extends Component {
  state = {
    show: false,
    name: "",
  };

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  async componentDidMount() {
    if (this.props.categoryId) {
      let name = await this.props.getSingleCategory(
        this.props.categoryId,
        this.props.contract
      );

      this.setState({
        name: name,
      });
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  saveCategory = async () => {
    if (this.props.categoryId) {
      await this.props.updateCategory(
        this.props.categoryId,
        this.state.name,
        this.props.account,
        this.props.contract
      );
    } else {
      await this.props.createNewCategory(
        this.state.name,
        this.props.account,
        this.props.contract
      );
    }

    await this.props.getCategories(this.props.contract);

    if (this.state.show) {
      this.toggleModal();
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
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="catForm">
              <div className="name">
                <input
                  type="text"
                  placeholder="Category Name"
                  value={this.state.name}
                  onChange={this.updateName}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {!this.props.loading ? (
              <div className="link" onClick={this.saveCategory}>
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
  const { id, category_name, loading, error } = state.category;

  return { contract, account, id, category_name, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleCategory: (id, contract) =>
      dispatch(getSingleCategory(id, contract)),
    createNewCategory: (name, addr, contract) =>
      dispatch(createNewCategory(name, addr, contract)),
    updateCategory: (id, name, addr, contract) =>
      dispatch(updateCategory(id, name, addr, contract)),
    getCategories: (contract) => dispatch(getCategories(contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
