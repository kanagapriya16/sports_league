import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import "../styles/Fixture.css"; // Import your custom styles
import FxtureMatches from './FxtureMatches';

export const Fixtures = () => {
  const [activeTab, setActiveTab] = useState('Fixtures');

  const handleTabClick = (event, tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container1">
      <Typography mt={5} fontFamily={"sans-serif"} variant='h4' color={"white"} fontWeight={800}>MATCH CENTER</Typography>
      <div>
        <Tabs 
      
          value={activeTab}
          onChange={handleTabClick}
          indicatorColor="primary" // Color of the indicator line
          textColor="primary" // Text color of the tabs
          centered // Align tabs at the center
        >
          <Tab label="Fixtures" value="Fixtures" />
          <Tab label="Results" value="Results" />
        </Tabs>
        {/* Render content based on the active tab */}
        {activeTab === 'Fixtures' && <div>
            
            <FxtureMatches/>
            </div>}
        {activeTab === 'Results' && <div>Results Content</div>}
      </div>
    </div>
  );
};
