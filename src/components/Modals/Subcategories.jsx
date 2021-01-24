import { Component } from "react";
import { AiOutlineClose, AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditSubcategory from "./EditSubcategory";
import { connect } from "react-redux";
import { getSubcategoryList } from "../../actions/subcategoryActions";

class Subcategories extends Component {
  state = {};

  async componentDidMount() {
    console.log(this.props.catId);
    console.log(this.props.contract);
    await this.props.getSubcategoryList(this.props.catId, this.props.contract);
  }

  render() {
    return (
      <div className="sub-panel">
        <div className="float-right link">
          <AiOutlineClose onClick={this.props.close} />
        </div>
        <h2>Bank with a long name</h2>
        <br />
        <br />
        <table className="table">
          {this.props.list
            .filter((sub) => sub.name != "")
            .map((subcat) => (
              <tr>
                <td width="60%">{subcat.name}</td>
                <td>
                  <EditSubcategory>
                    <AiFillEdit />
                  </EditSubcategory>
                </td>
                <td>
                  <AiFillDelete />
                </td>
              </tr>
            ))}
        </table>
        <EditSubcategory>
          <div className="addSubcat-btn">Add New</div>
        </EditSubcategory>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { contract } = state.common;
  const { list, loading, error } = state.subcategoryList;

  return { contract, list, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSubcategoryList: (id, contract) =>
      dispatch(getSubcategoryList(id, contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subcategories);
