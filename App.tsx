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
import Item from './src/pages/Item';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar />
      <GluestackUIProvider config={config}>
        <Box height="$full" bgColor="#0F111D">
          <Item />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
