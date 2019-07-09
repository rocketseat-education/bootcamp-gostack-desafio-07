import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      // initialRouteName: 'Cart',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
