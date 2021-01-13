import { Component } from "react";
import { AiFillEdit, AiFillDelete, AiFillFolderAdd } from "react-icons/ai";
import Layout from "../components/Layout";
import Category from "../components/Modals/Category";
import Subcategories from "../components/Modals/Subcategories";
import Sidebar from "../components/Sidebar";

class Home extends Component {
  state = {
    subCat: false,
  };

  toggleSubcat = () => {
    this.setState({
      subCat: !this.state.subCat,
    });
  };

  render() {
    return (
      <div>
        <Layout page="Category">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Sidebar />
            </div>
            <div className={this.state.subCat ? "col-md-4" : "col-md-8"}>
              <div className="p20px">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Category
                    </li>
                  </ol>
                </nav>
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
                {/* Heading End */}

                {/* Main Page Content / Listing of categories */}
                <div className="row w100p ml0 mr0">
                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
                    </div>
                    {/* Card Ends */}
                  </div>

                  <div className={this.state.subCat ? "col-md-12" : "col-md-4"}>
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
                      <span className="link block" onClick={this.toggleSubcat}>
                        Add Subcategories
                      </span>
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
              </div>
            </div>
            {this.state.subCat && (
              <div className="col-md-4">
                <Subcategories close={this.toggleSubcat} />
              </div>
            )}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;
