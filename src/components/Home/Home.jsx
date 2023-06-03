import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AnalysticCard from "../Analystic/AnalysticCard";
import ChartComponent from "../ChartComponent/ChartComponent";
export default function Home() {
  
  return (
    <div className="container" >
      <h5 className="my-4">Dashboard</h5>
      {/* Row for Dashboard cart */}
      <div className="row">
        {/* for total order */}
        <AnalysticCard to="/" number="15000" text="Total Orders" icon={<i className="fa-solid fa-chart-line fs-3 totalDashLogo1"></i>                      } />
        {/* for total customer */}
        <AnalysticCard to="/" number="15000" text="Total Customer" icon={<i class="fa-solid fa-user fs-3 totalDashLogo1"></i> } />
        {/* for all Merchant  */}
        <AnalysticCard to="/" number="15000" text="Total Merchant" icon={<i class="fa-solid fa-house-user fs-3 totalDashLogo1"></i> } />
        {/* for all Commission  */}
        <AnalysticCard to="/" number="15000" text="Total Commiss"  icon={<i class="fa-solid fa-dollar-sign fs-3  totalDashLogo1"></i> }/>
      </div>

    {/* chart component */}
     <ChartComponent/>


      {/* row for dashboard overview table */}
      <div className=" mt-5 ">
        <div className="row ">
          <div className="col-md-7 my-2 rounded p-3 bg-white">
            <div className="">
              <h6 class="reportview">
                <i class="fa-solid fa-share-nodes me-3"></i>
                report overview...
              </h6>{" "}
            </div>
            <div>
              <table className="table  container">
                <thead>
                  <ul
                    className="nav bg-light   nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link   active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Users
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link  "
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Restuarant
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link "
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        last 10 order
                      </button>
                    </li>
                  </ul>
                </thead>
                <tbody className="tab-content " id="pills-tabContent">
                  <tr
                    className="tab-pane fade  show active tableRow"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabindex="0"
                  >
                    {/* hna 7ooot l map bta3 l user */}
                    <td className="  w-100">total user</td>
                    <td className="">525152</td>
                  </tr>

                  <tr
                    className="tab-pane fade tableRow"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabindex="0"
                  >
                    {/* hna 7ooot l map bta3 l restuarant */}

                    <td className="  w-100">total restuarant</td>
                    <td>18220</td>
                  </tr>
                  {/* hna 7ooot l map bta3 l order */}

                  <tr
                    className="tab-pane fade "
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabindex="0"
                  >
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Rest ID</th>
                          <th scope="col">Rest Name</th>
                          <th scope="col">Address</th>
                          <th scope="col">Order#</th>
                          <th scope="col">Total Price</th>
                          <th scope="col">Order At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="tableRow">
                          <th scope="row">1</th>
                          <td>pizzabar</td>
                          <td>zagazig</td>
                          <td>ORD1954</td>
                          <td>2555$</td>
                          <td> 25 Apr, 23 01:04 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* row for dashboard Order Statistics table */}
          <div className="col-md-5  ">
            <div className="ms-md-auto my-2 rounded p-3 bg-white">
              <div>
                <h6 class="reportview ps-3">
                  <i class="fa-solid fa-chart-line me-3"></i>
                  Order Statistics...
                </h6>{" "}
              </div>
              <div className="ms-3 rounded bg-white">
                <table class="table  ">
                  <thead
                    class="nav bg-light ps-3 nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <tr>
                      <th scope="col">
                        <button
                          class="nav-link active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          Today
                        </button>
                      </th>
                      <th scope="col">
                        <button
                          class="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Week
                        </button>
                      </th>
                      <th scope="col">
                        <button
                          class="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Month
                        </button>
                      </th>
                      <th scope="col">
                        <button
                          class="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Year
                        </button>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="tab-content" id="v-pills-tabContent">
                    {/* table row for today */}
                    <tr
                      class="tab-pane fade show active mt-3 "
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                      tabindex="0"
                    >
                      <tr className="d-flex justify-content-between tableRow">
                        <th className="" scope="row">
                          friday 26may
                        </th>
                      </tr>
                      <tr className="d-flex justify-content-between tableRow">
                        <td>today</td>
                        <td>25</td>
                      </tr>
                    </tr>
                    {/* table row for week */}

                    <tr
                      class="tab-pane fade mt-3"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                      tabindex="0"
                    >
                      <tr className="d-flex justify-content-between tableRow ">
                        <th className=" " scope="row">
                          Week
                        </th>
                      </tr>
                      <tr className="d-flex justify-content-between tableRow">
                        <td>Orders Week</td>
                        <td>205545</td>
                      </tr>
                    </tr>
                    {/* table row for month */}

                    <tr
                      class="tab-pane fade mt-3"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                      tabindex="0"
                    >
                      <tr className="d-flex justify-content-between tableRow ">
                        <th className=" " scope="row">
                          may
                        </th>
                      </tr>
                      <tr className="d-flex justify-content-between tableRow">
                        <td>Orders month</td>
                        <td>205545</td>
                      </tr>
                    </tr>

                    {/* table row for year */}

                    <tr
                      class="tab-pane fade mt-3"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                      tabindex="0"
                    >
                      <tr className="d-flex justify-content-between tableRow ">
                        <th className=" " scope="row">
                          2023
                        </th>
                      </tr>
                      <tr className="d-flex justify-content-between tableRow">
                        <td>Orders year</td>
                        <td>205</td>
                      </tr>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}
