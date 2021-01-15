import { Component } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import BreadCrumb from "../components/BreadCrumb";
import CategoryCard from "../components/Home/CategoryCard";
import Category from "../components/Modals/CategoryModal";
import Subcategories from "../components/Modals/Subcategories";
import Sidebar from "../components/Sidebar";

class Categories extends Component {
  state = {
    subCat: false,
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };

  // Toggle right side pannel for sub category
  toggleSubcat = () => {
    this.setState({
      subCat: !this.state.subCat,
    });
  };

  render() {
    return (
      <div className="outterPadding">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-5">
            <Sidebar />
          </div>
          {/* Change the layout in case side panel is active */}
          <div
            className={
              this.state.subCat
                ? "col-lg-4 col-md-6 col-sm-12 col-xs-12"
                : "col-lg-9 col-md-6 col-sm-12 col-xs-12"
            }
          >
            <div className="p20px">
              {/* Breadcrumbs */}
              <BreadCrumb currentPage="Category" />
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
                {this.state.categories.map((id) => (
                  <div
                    className={
                      this.state.subCat ? "col-sm-12" : "col-lg-4 col-sm-12"
                    }
                  >
                    <CategoryCard toggleCat={this.toggleSubcat} />
                  </div>
                ))}

                {/* Loading card */}
                {this.props.loading && (
                  <div className="col-lg-4 col-md-12">
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

          {/* Subcategory panel */}
          {this.state.subCat && (
            <div className="col-md-4">
              <Subcategories close={this.toggleSubcat} />
              <div className="sub-panel-mask"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Categories;
