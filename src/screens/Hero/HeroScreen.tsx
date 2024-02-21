import React from 'react';
import { SText } from '../../components/Styled/SText';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenEnum, StackParamList } from '../../utils/types';
import { Colors } from '../../utils/styles';
import LeftIcon from '../../assets/icons/leftArrow.svg';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<StackParamList, ScreenEnum.Hero>;


export const HeroScreen = ({ route }: Props) => {
  const { hero } = route.params;
  const { goBack } = useNavigation();

  const profile = [
    { tittle: 'Name', value: hero.name },
    { tittle: 'Height', value: hero.height },
    { tittle: 'Mass', value: hero.mass },
    { tittle: 'Birth Year', value: hero.birth_year },
    { tittle: 'Gender', value: hero.gender },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.backBtn}>
        <LeftIcon/>
      </TouchableOpacity>
      <FlatList
        data={profile}
        keyExtractor={item => item.tittle}
        renderItem={({ item }) =>
          <View style={styles.infoItem}>
            <SText>{item.tittle}</SText>
            <SText>{item.value}</SText>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    flexGrow: 1,
  },
  backBtn: {
    marginTop: 20,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});
