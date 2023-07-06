//提交订单完成界面
import React from 'react';
import { View } from 'react-native';
import VerticalComponent from '../components/VerticalComponent';
class SubmitOrderView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <VerticalComponent />
      </View>
    );
  }
}
export default SubmitOrderView;