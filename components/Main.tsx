import React from 'react'
import Home from './Home'
import Courses from './Courses'

interface Props {
  active: string;
}

const Main = ({ active }: Props) => {
  console.log('active', active);
  switch (active) {
    case 'Home':
      return <Home />;
    case 'Courses':
      return <Courses />;
    default:
      return null;
  }
};

export default Main;
