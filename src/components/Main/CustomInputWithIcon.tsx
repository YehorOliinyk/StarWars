import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';

interface IProps {
  placeholder: string;
  value: string;
  onChangeText: (e: string) => void;
}

export const CustomInputWithIcon = ({ placeholder, value, onChangeText }: IProps) => {
  return (
    <View style={styles.inputContainer}>
      <SearchIcon style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        spellCheck={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 15,
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
