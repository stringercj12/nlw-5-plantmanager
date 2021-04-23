import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import colors from '../../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';

// import { Container } from './styles';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <StackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        },
      }}
    >
      <StackRoutes.Screen
        name="welcome"
        component={Welcome}
      />
      
      <StackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />

      <StackRoutes.Screen
        name="Confirmation"
        component={Confirmation}
      />

      <StackRoutes.Screen
        name="PlantSelect"
        component={PlantSelect}
      />

      <StackRoutes.Screen
        name="PlantSave"
        component={PlantSave}
      />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;