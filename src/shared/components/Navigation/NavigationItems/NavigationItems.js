import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul>
      <NavigationItem link="/">Dashboard Home</NavigationItem>
      <NavigationItem link="/user1/projects">Projects</NavigationItem>
      <NavigationItem link="/developers">Developer Team</NavigationItem>
      <NavigationItem link="/my-issues">Issues</NavigationItem>
    </ul>
  )
};

export default NavigationItems;