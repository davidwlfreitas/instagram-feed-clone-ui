// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Animated, Image, ImageBackground } from 'react-native';

export default class LazyImage extends Component {
  state = {
    opacity: new Animated.Value(0),
    loaded: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 500);
  }
  render() {
    const animationStyles = {
      width: '100%',
      aspectRatio: this.props.aspectRatio,
    };

    function handleAnimate(opacity) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }

    return (
      <ImageBackground
        style={[animationStyles]}
        source={this.props.smallSource}
        resizeMode="contain"
        blurRadius={2}
      >
        {this.state.loaded && (
          <Image
            style={[animationStyles]}
            source={this.props.source}
            resizeMode="contain"
            onLoadEnd={handleAnimate(this.state.opacity)}
          />
        )}
      </ImageBackground>
    );
  }
}
