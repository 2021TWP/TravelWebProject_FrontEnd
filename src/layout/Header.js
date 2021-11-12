import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AccountStore from '../Authentication/Stores/AccountStore';

function Header(props) {
  const { sections, title } = props;
  const handleLogoutSubmit = AccountStore.handleLogoutSubmit;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
        </IconButton>
        {sessionStorage['Authorization']
          ?<div style={{textAlign:'right'}}>환영합니다 {sessionStorage['name']}({sessionStorage['username']})님/<Button size="small" onClick={()=>handleLogoutSubmit()}>Sign out</Button></div>
          :<div><Button size="small" onClick={()=>window.location.href='/authentication/login/'}>
            Sign in
          </Button> &nbsp;
          <Button size="small" onClick={()=>window.location.href='/authentication/signup/'}>
            Join
          </Button> </div>}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;