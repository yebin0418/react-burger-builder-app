import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout extends Component
{
  state = {
    showSideDrawer: true;
  }

  sideDrawerClosedHandler = ()=> {
    this.setState({showSideDrawer: false});
  }
  render () {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open = {this.state.showSideDrawer}
          closed = {this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
              {props.children}
        </main>
      </Aux>
    )
  }

}

export default layout;
