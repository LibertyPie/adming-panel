import { React, Component } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import BreadCrumb from "../components/BreadCrumb";
import CategoryCard from "../components/Home/CategoryCard";
import Category from "../components/Modals/CategoryModal";
import Subcategories from "../components/Modals/Subcategories";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { getCategories } from "../actions/categoryActions";

class Categories extends Component {
  state = {
    subCat: false,
    selectedCat: null,
    selectedCatName: null,
    categories: [],
  };

  // Toggle right side pannel for sub category
  openSubcat = (cat, catName) => {
    const that = this;
    this.setState({
      subCat: false,
    });
    setTimeout((params) => {
      that.setState({
        subCat: true,
        selectedCat: cat,
        selectedCatName: catName,
      });
    }, 5);
  };

  closeSubCat = () => {
    this.setState({
      subCat: false,
    });
  };

  async componentDidMount() {
    await this.props.getCategories(this.props.contract);
  }

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
                {this.props.list.map((cat, id) => (
                  <>
                    {cat && (
                      <div
                        className={
                          this.state.subCat ? "col-sm-12" : "col-lg-4 col-sm-12"
                        }
                      >
                        <CategoryCard
                          openSubcat={this.openSubcat}
                          cat={cat}
                          id={id}
                        />
                      </div>
                    )}
                  </>
                ))}

                {/* Loading card */}
                {this.props.loading && (
                  <div className="col-lg-4 col-md-12">
                    {/* Card for the category */}
                    <div className="card-1 text-center">
                      <img src="/images/loading.gif" alt="" />
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
              <Subcategories
                close={this.closeSubCat}
                catName={this.state.selectedCatName}
                catId={this.state.selectedCat}
              />
              <div className="sub-panel-mask"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { contract } = state.common;
  const { list, loading, error } = state.categoryList;

  return { contract, list, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (contract) => dispatch(getCategories(contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
