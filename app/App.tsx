import React, { useEffect, useState } from 'react';
import Navigator from './src/Navigation/Navigator';
import CustomSafeAreaView from './src/components/CustomSafeAreaView';

export default function App() {

  return (
    <CustomSafeAreaView>
      <Navigator />
    </CustomSafeAreaView>
  );
}
