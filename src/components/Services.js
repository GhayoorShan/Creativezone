import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <>
      <div className="services ">
        <div className="services-heading ">
          <p className="text-center bottom ">SERVICES</p>
        </div>
        <div class="row d-flex justify-content-center py-3 ">
          <div class="col-sm-4 ">
            <div class="card shadow my-3 p-3">
              <div class="card-body">
                {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
                <h5 class="card-title">BUSINESS SETUP</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content.
                </p>
                <a
                  href="#"
                  class="btn btn-sm rounded-pill button-default__color "
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4  ">
            <div class="card shadow my-3  p-3 ">
              <div class="card-body">
                {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
                <h5 class="card-title">BANKING</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content.
                </p>
                <a
                  href="#"
                  class="btn btn-sm rounded-pill button-default__color "
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4 ">
            <div class="card shadow my-3 p-3 ">
              <div class="card-body">
                {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
                <h5 class="card-title">INSURANCE</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content.
                </p>
                <a
                  href="#"
                  class="btn  btn-sm  rounded-pill button-default__color "
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
