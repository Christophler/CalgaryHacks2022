import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lineImage: {
    paddingLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default generalStyles;
