import React from "react";
import { Helmet } from "react-helmet";
import Lawsoftinfo from "./Lawsoftinfo";
import LawSoftDemo from "./LawSoftDemo";
import OrderFrom from "../AccountingSoftware/OrderFrom";

const LawFarm = () => {
    return (
        <>
            <div className="main">
            <Helmet>
                    <title>LawFarm Software</title>
                </Helmet>
                <Lawsoftinfo />

                <LawSoftDemo />

                <OrderFrom />

            </div>

        </>
    )
}
export default LawFarm;