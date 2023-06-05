import React, { useState } from 'react';
import './Style.css'
import { IOSSwitch } from '@mui/icons-material';
import { FormControlLabel, Typography } from '@mui/material';
import MappingTab from './MappingTab';

const AddRoleTab = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };

    return (
        <div className='switch'>

            <div className='tabs'>
                <Typography style={{height: "60px"}}>Dashboard</Typography>
                <Typography style={{height: "60px"}}>Analytics</Typography>
                <Typography style={{height: "60px"}}>Reports</Typography>
                <Typography style={{height: "60px"}}>Watchlist</Typography>
                <Typography style={{height: "60px"}}>Customer Configuration</Typography>
                <Typography style={{height: "60px"}}>Site Configuration</Typography>
                <Typography style={{height: "60px"}}>Equipment Configuration</Typography>
                <Typography style={{height: "60px"}}>Equipment Category</Typography>
                <Typography style={{height: "60px"}}>Equipment Type</Typography>
                <Typography style={{height: "60px"}}>Master Upload</Typography>
                <Typography style={{height: "60px"}}>Ticket Management</Typography>
                <Typography style={{height: "60px"}}>Create Ticket</Typography>
                <Typography style={{height: "60px"}}>Historic Upload</Typography>
                <Typography style={{height: "60px"}}>User Configuration</Typography>
                <Typography style={{height: "60px"}}>Role Configuration</Typography>
                <Typography style={{height: "60px"}}>Data Collection</Typography>
                <Typography style={{height: "60px"}}>Customer & Site Overview</Typography>
                <Typography style={{height: "60px"}}>Documentation</Typography>
            </div>
            <div className='permission'>
                <button
                    className={`switch-button ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button1 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button2 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button3 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button4 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button5 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button6 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button7 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button8 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button9 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button10 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button11 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
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

                    className={`switch-button16 ${isEnabled ? 'enabled' : 'disabled'}`}
                    onClick={toggleSwitch}
                >
                    {isEnabled ? 'Enabled' : 'Disabled'}
                </button>
                <br />
                <button

                    className={`switch-button17 ${isEnabled ? 'enabled' : 'disabled'}`}
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

<div>
    <MappingTab />
</div>


        </div>

    );
};

export default AddRoleTab;