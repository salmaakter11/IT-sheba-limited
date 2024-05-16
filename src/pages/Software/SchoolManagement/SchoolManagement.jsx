import React from "react";
import { Helmet } from "react-helmet";
import OrderFrom from "../AccountingSoftware/OrderFrom";
import SchoolManagementPackege from "./SchoolManagementPackege";
import SchoolSoftInfo from "./SchoolSoftInfo";

const SchoolManagement = () => {
    return (
        <>
            <div className="main">
            <Helmet>
                    <title> School Management</title>
                </Helmet>
              <SchoolSoftInfo/>

               <SchoolManagementPackege/>
                <OrderFrom/>

            </div>

        </>
    )
}
export default SchoolManagement;