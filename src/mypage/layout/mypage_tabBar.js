import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { withRouter } from 'react-router';
import MyPagePlanView from '../Views/MyPagePlanView';
import MyPageGroupView from '../Views/MyPageGroupView';
import MyPageScrapView from '../Views/MyPageScrapView';
import MyPageInfoView from '../Views/MyPageInfoView';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

  function MyPage_MenuBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="일정" {...a11yProps(1)}/>
        <Tab label="그룹" {...a11yProps(2)}/>
        <Tab label="스크랩" {...a11yProps(3)}/>
        <Tab label="내정보"{...a11yProps(4)}/>
      </Tabs>
    </Box>

    <TabPanel value={value} index={0}>
        <MyPagePlanView/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <MyPageGroupView/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <MyPageScrapView/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <MyPageInfoView/> 
      </TabPanel>
    </Box>
  );
}

export default withRouter(MyPage_MenuBar);