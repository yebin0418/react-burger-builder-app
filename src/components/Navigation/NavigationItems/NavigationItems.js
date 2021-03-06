import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from'./NavigationItem';

const navigationItems = () => (
  <ul className = {classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Check out</NavigationItem>
  </ul>

);

export default navigationItems;
