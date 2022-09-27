import React, { useState } from "react";
// import Button from  '../../styles/ButtonStyles'
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import "./dashboard.css";
import Bankform from "./Bankform/Bankform";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return ( <
        div className = "TabStyle" >
        <
        ul className = "nav" >
        <
        TabNavItem title = "Sell airtime"
        id = "tab1"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        /> <
        TabNavItem title = "Withdraw Balance"
        id = "tab2"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        /> <
        TabNavItem title = "Manage Bank Account"
        id = "tab3"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        /> <
        TabNavItem title = "Transaction History"
        id = "tab4"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        /> < /
        ul > <
        div className = "outlet" > { /* {activeTab === "tab1" ? <Error /> : <UploadAvatar />} */ } <
        TabContent id = "tab1"
        activeTab = { activeTab } >
        <
        p > { /* <UploadAvatar /> */ } <
        h1 > Sell airtime < /h1> < /
        p > <
        /TabContent> <
        TabContent id = "tab2"
        activeTab = { activeTab } >
        <
        p > { /* <UploadAvatar /> */ } <
        h1 > Withdraw Balance Here < /h1> < /
        p > <
        /TabContent> <
        TabContent id = "tab3"
        activeTab = { activeTab } >
        <
        p > { /* <UpdateUserSetting /> */ } <
        h1 > Manage Bank Account Here < /h1> < /
        p > <
        Bankform / >
        <
        /TabContent> <
        TabContent id = "tab4"
        activeTab = { activeTab } > { /* <Error /> */ } { /* <h1>Transaction History Here</h1> */ } < /TabContent>  < /
        div > { /*< Button > Sell Airtime </Button>*/ } < /div>
    );
};
export default Tabs;