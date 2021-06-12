import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  containerCalculator: {
    paddingHorizontal: 12,
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  textResult: {
    color: 'white',
    fontSize: 60,
    alignSelf: 'flex-end',
  },
  textResultSmall: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
