import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(this.moveToNextSlide, 3000); // 每3秒切换一张图片
  };

  stopCarousel = () => {
    clearInterval(this.carouselInterval);
  };

  moveToNextSlide = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const nextIndex = (currentIndex + 1) % images.length;
    this.setState({ currentIndex: nextIndex });
    this.scrollView.scrollTo({ x: nextIndex * 300, animated: true }); // 水平滚动到下一张图片
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <ScrollView
        ref={ref => (this.scrollView = ref)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScrollBeginDrag={this.stopCarousel} // 停止自动切换图片
        onScrollEndDrag={this.startCarousel} // 开始自动切换图片
      >
        {images.map((image, index) => (
          <View key={index}>
            <Image source={image} style={{ width: 300, height: 200 }} />
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Carousel;
