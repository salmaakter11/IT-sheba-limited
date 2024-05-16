import React from "react";
import { Helmet } from "react-helmet";
import AccountingBanner from "./AccountingBanner";
import AccountingInfo from "./AccountingInfo";
import AccountingSupport from "./AccountingSupport";
import BestAccounting from "./BestAccounting";
import AccountingSoftwarePackage from "./AccountingSoftwarePackage";
import OrderFrom from "./OrderFrom";
const AccountingSoftware = () => {
    return (
        <>
            <div className="main">
                <Helmet>
                    <title>Accounting Software</title>
                </Helmet>
                <AccountingBanner />

                <AccountingInfo />

                <AccountingSupport />

                <BestAccounting />

                <AccountingSoftwarePackage />

                <OrderFrom />

            </div>

        </>
    )
}
export default AccountingSoftware;