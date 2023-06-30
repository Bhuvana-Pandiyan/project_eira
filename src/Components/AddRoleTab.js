import React, { useState, useEffect } from 'react';
import './Style.css'
import { IOSSwitch } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

const AddRoleTab = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const prop1 = searchParams.get('prop1');
    console.log(prop1, "prop1");
    const [isEnabled, setIsEnabled] = useState(false);
    const [isDashboard, setDashboard] = useState(false);
    const [isCustomerView, setCustomerView] = useState(false);
    const [isSiteConfiguration, setSiteConfiguration] = useState(false);
    const [isTickets, setTickets] = useState(false);
    const [isNewTicket, setNewTicket] = useState(false);
    const [isEquipmentConfiguration, setEquipmentConfiguration] = useState(false);
    const [isAnalytics, setAnalytics] = useState(false);
    const [isDocumentation, setDocumentation] = useState(false);
    const [isReports, setReports] = useState(false);
    const [isUserConfiguration, setUserConfiguration] = useState(false);
    const [isCustomerConfiguration, setCustomerConfiguration] = useState(false);
    const [isStandardParameterConfiguration, setStandardParameterConfiguration] = useState(false);


    useEffect(() => {
        toggleDashboard()
        if (prop1 === "Application Tester") {
            toggleCustomerView()
            toggleSiteConfiguration()
            toggleTickets()
            toggleNewTicket()

        } else if (prop1 === "EIRA Asset Management") {
            toggleSiteConfiguration()
            toggleTickets()
            toggleEquipmentConfiguration()
            toggleNewTicket()
            toggleAnalytics()
            toggleDocumentation()
            toggleReports()
        }

        else if (prop1 === "EIRA Customer") {
            toggleSiteConfiguration()
            toggleTickets()
            toggleEquipmentConfiguration()
            toggleAnalytics()
            toggleReports()
        }
        else if (prop1 === "EIRA Ticketing") {
            toggleTickets()
            toggleNewTicket()
            toggleDocumentation()
        }

        else if (prop1 === "End Customer") {
            toggleSiteConfiguration()
            toggleEquipmentConfiguration()
            toggleAnalytics()
            toggleUserConfiguration()
        }
        else if (prop1 === "ICE Admin ") {
            toggleSiteConfiguration()
            toggleEquipmentConfiguration()
            toggleAnalytics()
            toggleUserConfiguration()
            toggleTickets()
            toggleNewTicket()
            toggleDocumentation()
            toggleReports()
            toggleCustomerView()
            toggleCustomerConfiguration()
            toggleStandardParameterConfiguration()
        }
        else if (prop1 === "Monitoring") {
            toggleSiteConfiguration()
            toggleEquipmentConfiguration()
            toggleAnalytics()
        }
        else if (prop1 === "Site Lead") {
            toggleTickets()
            toggleReports()
        }

    }, [prop1])

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };
    const toggleDashboard = () => {
        setDashboard(!isDashboard);
    };
    const toggleCustomerView = () => {
        setCustomerView(!isCustomerView);
    };
    const toggleSiteConfiguration = () => {
        setSiteConfiguration(!isSiteConfiguration);
    };
    const toggleTickets = () => {
        setTickets(!isTickets);
    };
    const toggleNewTicket = () => {
        setNewTicket(!isNewTicket);
    };
    const toggleEquipmentConfiguration = () => {
        setEquipmentConfiguration(!isEquipmentConfiguration);
    };
    const toggleAnalytics = () => {
        setAnalytics(!isAnalytics);
    };
    const toggleDocumentation = () => {
        setDocumentation(!isDocumentation);
    };
    const toggleReports = () => {
        setReports(!isReports);
    };
    const toggleUserConfiguration = () => {
        setUserConfiguration(!isUserConfiguration);
    };
    const toggleCustomerConfiguration = () => {
        setCustomerConfiguration(!isCustomerConfiguration);
    };
    const toggleStandardParameterConfiguration = () => {
        setStandardParameterConfiguration(!isStandardParameterConfiguration);
    };
    return (
        <div className='switch'>
            {/* <div className='tabs'> */}
            <div className='first-d'>
                <Typography style={{ height: "60px" }}>Dashboard</Typography>
                <Typography style={{ height: "60px" }}>CustomerView</Typography>
                <Typography style={{ height: "60px" }}>Site Configuration</Typography>
                <Typography style={{ height: "60px" }}>Tickets</Typography>
            </div>
            <div className='secn-d'>
                <Typography style={{ height: "60px" }}>Customer Configuration</Typography>
                <Typography style={{ height: "60px" }}>Analytics</Typography>
                <Typography style={{ height: "60px" }}>Documentation</Typography>
                <Typography style={{ height: "60px" }}>Reports</Typography>
            </div>
            <div className='thrd-d'>
                <Typography style={{ height: "60px" }}>Equipment Type</Typography>
                <Typography style={{ height: "60px" }}>User Cofiguration</Typography>
                <Typography style={{ height: "60px" }}>Ticket Management</Typography>
                <Typography style={{ height: "60px" }}> Watchlist </Typography>
                <Typography style={{ height: "60px" }}>Historic Upload</Typography>
            </div>
            <div className='fr-d'>
                <Typography style={{ height: "60px" }}>User Configuration</Typography>
                <Typography style={{ height: "60px" }}>Role Configuration</Typography>
                <Typography style={{ height: "60px" }}>Data Collection</Typography>
                <Typography style={{ height: "60px" }}>Equipment Category</Typography>
                <Typography style={{ height: "60px" }}>Equipment Configuration</Typography>
            </div>

            {/* </div> */}
            {/* <div className='permission'> */}
            <div className='first-dis'>

                <button
                    className={`switch-button ${isDashboard ? 'enabled' : 'disabled'}`}
                    onClick={toggleDashboard}
                >
                    {isDashboard ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button1 ${isCustomerView ? 'enabled' : 'disabled'}`}
                    onClick={toggleCustomerView}
                >
                    {isCustomerView ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button2 ${isSiteConfiguration ? 'enabled' : 'disabled'}`}
                    onClick={toggleSiteConfiguration}
                >
                    {isSiteConfiguration ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button3 ${isTickets ? 'enabled' : 'disabled'}`}
                    onClick={toggleTickets}
                >
                    {isTickets ? 'Enabled' : 'Disabled'}
                </button>
                <br />
            </div>

            <div className='sec-dis'>
                <button
                    className={`switch-button4 ${isNewTicket ? 'enabled' : 'disabled'}`}
                    onClick={toggleNewTicket}
                >
                    {isNewTicket ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button5 ${isEquipmentConfiguration ? 'enabled' : 'disabled'}`}
                    onClick={toggleEquipmentConfiguration}
                >
                    {isEquipmentConfiguration ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button6 ${isAnalytics ? 'enabled' : 'disabled'}`}
                    onClick={toggleAnalytics}
                >
                    {isAnalytics ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button7 ${isDocumentation ? 'enabled' : 'disabled'}`}
                    onClick={toggleDocumentation}
                >
                    {isDocumentation ? 'Enabled' : 'Disabled'}
                </button>
                <br />
            </div>
            <div className='thrd-dis'>
                <button
                    className={`switch-button8 ${isReports ? 'enabled' : 'disabled'}`}
                    onClick={toggleReports}
                >
                    {isReports ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button9 ${isUserConfiguration ? 'enabled' : 'disabled'}`}
                    onClick={toggleUserConfiguration}
                >
                    {isUserConfiguration ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button10 ${isCustomerConfiguration ? 'enabled' : 'disabled'}`}
                    onClick={toggleCustomerConfiguration}
                >
                    {isCustomerConfiguration ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button11 ${isStandardParameterConfiguration ? 'enabled' : 'disabled'}`}
                    onClick={toggleStandardParameterConfiguration}
                >
                    {isStandardParameterConfiguration ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button18 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
            </div>
            <div className='frth-dis'>
                <button
                    className={`switch-button12 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button13 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button14 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button15 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button
                    className={`switch-button18 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
            </div>
            {/* </div> */}
        </div >
    )
};

export default AddRoleTab;