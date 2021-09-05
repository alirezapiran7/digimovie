import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const metrics = {


  statusBar: Platform.OS === 'ios' ? 40 : 30,

  horizontalLineHeight: 1,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  navBarHeight: Platform.OS === 'ios' ? 64 : 54,

  borderWidth: 0.4,
  bw1: 1,
  bw2: 2,

  r1: 4,
  r2: 8,
  r3: 12,
  r4: 16,
  r5: 20,

  p1: 4,
  p2: 8,
  p3: 12,
  p4: 16,
  p5: 20,

  m1: 4,
  m2: 8,
  m3: 12,
  m4: 16,
  m5: 20,

  f1: 12,
  f2: 14,
  f3: 16,
  f4: 18,
  f5: 20,

  i1: 15,
  i2: 20,
  i3: 25,
  i4: 30,
  i5: 35,

};

export default metrics;