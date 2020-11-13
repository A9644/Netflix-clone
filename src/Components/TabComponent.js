import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Tabdoor from "./TabNav/Tabdoor";
import Tabdevice from "./TabNav/Tabdevice";
import Tabprices from "./TabNav/Tabprices";
import Tabcontent1 from "./Tabcontent1";
import Tabcontent2 from "./Tabcontent2";
import "..//..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Maincss/TabsNav.css";
import Tabcontent3 from "./Tabcontent3";

function TabComponent() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row">
        <div className="col-12">
          <Tabs>
            <TabList className="d-flex justify-content-around flex-md-row flex-column align-items-center pt-3 list-unstyled justify-content-between">
              <Tab>
                <Tabdoor />
                <p className="tabtext">
                  <strong>No commitment</strong>
                </p>
              </Tab>
              <Tab>
                <Tabdevice />
                <p style={{ marginTop: "-5.333rem" }} className="tabtext">
                  <strong>watch Anywhere</strong>
                </p>
              </Tab>
              <Tab>
                <Tabprices />
                <p className="tabtext">
                  <strong>Pick your price</strong>
                </p>
              </Tab>
            </TabList>

            <TabPanel>
              <Tabcontent1 />
            </TabPanel>
            <TabPanel>
              <Tabcontent2 />
            </TabPanel>
            <TabPanel>
              <Tabcontent3 />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export default TabComponent;
