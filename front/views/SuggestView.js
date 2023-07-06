//投诉与建议界面
import React from 'react';
import { View } from 'react-native';
import SuggestHistoryComponent from '../components/SuggestHistoryComponent';
import SuggestMainComponent from '../components/SuggestMainComponent';

const SuggestView = () => {
  return (
    <View style={{ flex: 1 }}>
      <SuggestHistoryComponent />
      <SuggestMainComponent  />
    </View>
  );
};

export default SuggestView;