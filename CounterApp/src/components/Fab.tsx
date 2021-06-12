import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

function Fab(props: Props) {
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: 'salmon'}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default Fab;
