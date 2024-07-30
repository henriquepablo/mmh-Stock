/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box, SafeAreaView} from '@gluestack-ui/themed';
import AppRoutes from './src/routes/Approutes';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0F111D"/>
      <GluestackUIProvider config={config}>
        <Box height="$full">
          <AppRoutes />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
