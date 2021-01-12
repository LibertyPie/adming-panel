import { Component } from "react";
import { AiFillEdit, AiFillDelete, AiFillFolderAdd } from "react-icons/ai";
import Layout from "../components/Layout";
import Category from "../components/Modals/Category";
import Subcategories from "../components/Modals/Subcategories";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout page="Category">
          <br />

          {/* Heading */}
          <div className="float-right">
            <div className="add-btn">
              <Category>
                <span className="link">
                  <AiFillFolderAdd />
                </span>
              </Category>
            </div>
          </div>
          <h3>Categories</h3>
          <br />
          {/* Heading End */}

          <Subcategories />

          {/* Main Page Content / Listing of categories */}
          <div className="row">
            <div className="col-md-4">
              {/* Card for the category */}
              <div className="card-1">
                <span className="sm">0 Sucategories</span>
                <div className="top-right">
                  <Category>
                    <span className="link">
                      <AiFillEdit />
                    </span>
                  </Category>
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
                <span className="link block">Add Subcategories</span>
              </div>
              {/* Card Ends */}
            </div>

            <div className="col-md-4">
              {/* Card for the category */}
              <div className="card-1">
                <span className="sm">0 Sucategories</span>
                <div className="top-right">
                  <Category>
                    <span className="link">
                      <AiFillEdit />
                    </span>
                  </Category>
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
                <span className="link block">Add Subcategories</span>
              </div>
              {/* Card Ends */}
            </div>

            {this.props.loading && (
              <div className="col-md-4">
                {/* Card for the category */}
                <div className="card-1 text-center">
                  <img src="https://i.stack.imgur.com/hzk6C.gif" alt="" />
                </div>
                {/* Card Ends */}
              </div>
            )}
          </div>
          {/* End of listing categories */}
        </Layout>
      </div>
    );
  }
}

export default Home;
