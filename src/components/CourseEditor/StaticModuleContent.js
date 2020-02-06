import React from "react";

const StaticModuleContent = () => (
  <div class="course-editor col-md-8">
    <div class="editor-width-limiter">
      <div class="course-editor-submenu">
        <ul
          class="nav justify-content-between nav-pills wbdv-topic-pill-list"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-topic1-tab"
              data-toggle="pill"
              href="#pills-topic1"
              role="tab"
              aria-controls="pills-topic1"
              aria-selected="false"
            >
              Topic 1
            </a>
          </li>
          <li class="nav-item active">
            <a
              class="nav-link"
              id="pills-topic2-tab"
              data-toggle="pill"
              href="#pills-topic2"
              role="tab"
              aria-controls="pills-topic2"
              aria-selected="false"
            >
              Topic 2
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-topic3-tab"
              data-toggle="pill"
              href="#pills-topic3"
              role="tab"
              aria-controls="pills-topic3"
              aria-selected="false"
            >
              Topic 3
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-topic4-tab"
              data-toggle="pill"
              href="#pills-topic4"
              role="tab"
              aria-controls="pills-topic4"
              aria-selected="false"
            >
              Topic 4
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link wbdv-topic-add-btn"
              id="pills-add-tab"
              data-toggle="pill"
              href="#pills-add"
              role="tab"
              aria-controls="pills-add"
              aria-selected="false"
            >
              <i className="fa fa-plus"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-content wbdv-topic-pill" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-topic1"
          role="tabpanel"
          aria-labelledby="pills-topic1-tab"
        >
          <div class="d-flex justify-content-end">
            <button class="btn-primary bg-success mr-0">Save</button>
          </div>
          <div class="add-content widget header-widget">
            <div class="add-content-header-row row">
              <div class="col">
                <span class="widget-title">Heading widget</span>
              </div>
              <div class="col-3 text-right">
                <button class="btn-primary bg-danger">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <form class="form-medium">
              <div class="form-group">
                <input
                  class="form-control"
                  id="headingText"
                  placeholder="Heading text"
                />
              </div>
              <div class="form-group">
                <select id="headingType" class="form-control">
                  <option value="Heading 1">Heading 1</option>
                  <option value="Heading 2">Heading 2</option>
                  <option value="Heading 3">Heading 3</option>
                  <option value="Heading 4">Heading 4</option>
                  <option value="Heading 5">Heading 5</option>
                  <option value="Heading 6">Heading 6</option>
                </select>
              </div>
            </form>
            <div class="preview-content">
              <span class="preview-title">Preview</span>
              <h1>Heading text</h1>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-topic2"
          role="tabpanel"
          aria-labelledby="pills-topic2-tab"
        >
          <h2>Aliquip ex ea commodo consequat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="pills-topic3"
          role="tabpanel"
          aria-labelledby="pills-topic3-tab"
        >
          <h2>Lorem ex amet commodo consequat</h2>
          <p>
            Consectetur ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="pills-topic4"
          role="tabpanel"
          aria-labelledby="pills-topic4-tab"
        >
          <h2>Commodo exercitation</h2>
          <p>
            Adipiscing ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="pills-add"
          role="tabpanel"
          aria-labelledby="pills-add-tab"
        >
          <div class="d-flex justify-content-end">
            <button class="btn-primary bg-success mr-0">Save</button>
          </div>
          <div class="add-content">
            <div class="add-content-header-row row">
              <div class="col">
                <h2>New Topic</h2>
              </div>
              <div class="col-3 text-right">
                <button class="btn-primary bg-danger">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <form class="form-medium">
              <div class="form-group">
                <input
                  class="form-control"
                  id="titleText"
                  placeholder="Title text"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="bodyText"
                  placeholder="Body text"
                >
                  Lorem ipsum dolorem...
                </textarea>
              </div>
            </form>
            <div class="preview-content">
              <span class="preview-title">Preview</span>
              <h1>Title text</h1>
              <p>Lorem ipsum dolorem...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StaticModuleContent;
