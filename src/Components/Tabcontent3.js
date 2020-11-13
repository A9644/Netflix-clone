import React from "react";
import Contenthead from "./Contenthead";
import { Icon } from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { close } from "react-icons-kit/fa/close";
function Tabcontent3() {
  return (
    <>
      <Contenthead />
      <div className="container-fluid p-3 tab-content1">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10 d-flex justify-content-center align-items-center">
            <table class="table table-striped " style={{ color: "#ffff" }}>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Basic</th>
                  <th scope="col">Standard</th>
                  <th scope="col">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monthly Price</th>
                  <td>$9.99</td>
                  <td>$11.99</td>
                  <td>$13.99</td>
                </tr>
                <tr>
                  <th scope="row">HD Available</th>
                  <td>
                    <Icon icon={close} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Ultra HD Available</th>
                  <td>
                    <Icon icon={close} size={10} />
                  </td>
                  <td>
                    <Icon icon={close} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Screens You can watch at time</th>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>

                <tr>
                  <th scope="row">Watch on your Laptop ,TV, Mobile</th>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                </tr>

                <tr>
                  <th scope="row">Cancel Anytime</th>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                  <td>
                    <Icon icon={check} size={10} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabcontent3;
