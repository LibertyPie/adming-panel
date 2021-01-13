import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  AiOutlineClose,
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
} from "react-icons/ai";
import EditSubcategory from "./EditSubcategory";

class Subcategories extends Component {
  state = {
    show: true,
    subCat: ["UPI", "Net Banking", "IMPS"],
  };
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
          {this.state.subCat.map((subcat) => (
            <tr>
              <td width="60%">{subcat}</td>
              <td>
                <EditSubcategory>
                  <AiFillEdit />
                </EditSubcategory>
              </td>
              <td>
                <AiFillDelete />
              </td>
              <td>
                <AiOutlineCheck />
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

export default Subcategories;
