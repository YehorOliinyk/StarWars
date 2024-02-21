import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SFlex } from '../../components/Styled/SFlex';
import { SText } from '../../components/Styled/SText';
import { Colors, screenWidth } from '../../utils/styles';
import { useDispatch } from 'react-redux';
import { CustomInputWithIcon } from '../../components/Main/CustomInputWithIcon';
import axios from 'axios';
import { IHeroItem } from '../../utils/models';
import BlackHeart from '../../assets/icons/blackHeart.svg';
import EmptyHeart from '../../assets/icons/emptyHeart.svg';
import FilledHeart from '../../assets/icons/filledHeart.svg';
import LeftIcon from '../../assets/icons/leftArrow.svg';
import RightIcon from '../../assets/icons/rightArrow.svg';
import { useAppSelector } from '../../hooks/useStore';
import { addFemale, removeFemale, resetFemale } from '../../redux/female/femaleSlice';
import { addMale, removeMale, resetMale } from '../../redux/male/maleSlice';
import { addOthers, removeOthers, resetOthers } from '../../redux/others/othersSlice';
import { useNavigation } from '@react-navigation/native';
import { ScreenEnum } from '../../utils/types';

export const MainScreen = () => {
  const {
    female: { female },
    male: { male },
    others: { others },
  } = useAppSelector(state => state);
  const dispatch = useDispatch();
  const [heroName, setHeroName] = useState('');
  const [heroList, setHeroList] = useState<Array<IHeroItem>>([]);
  const [nextPage, setNextPage] = useState<string>('');
  const [previousPage, setPreviousPage] = useState<string>('');
  const all = [...female, ...male, ...others];
  const { navigate } = useNavigation();

  const genderCounters = [
    {
      amount: female.length,
      name: 'Female Fans',
      id: '0',
    },
    {
      amount: male.length,
      name: 'Male Fans',
      id: '1',
    },
    {
      amount: others.length,
      name: 'Others',
      id: '2',
    },
  ];

  const fetchData = async (url: string) => {
    try {
      const res = await axios.get(url);
      const { results, next, previous } = res.data;
      setNextPage(next);
      setPreviousPage(previous);
      setHeroList(results);
    } catch (error) {
      setHeroList([]);
      console.log(error);
    }
  };

  const getHeroes = async () => {
    await fetchData('https://swapi.dev/api/people?page=1');
  };

  const changePage = async (type: string) => {
    const url = type === 'next' ? nextPage : previousPage;
    await fetchData(url);
  };

  const search = async (name: string) => {
    setHeroName(name);
    try {
      const res = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
      const heroes = res.data.results;
      setHeroList(heroes);
    } catch (error) {
      setHeroList([]);
      console.log(error);
    }
  };

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleHeart = (item: IHeroItem) => {
    switch (item.gender) {
      case 'female':
        return female.includes(item) ? dispatch(removeFemale(item)) : dispatch(addFemale(item));
      case 'male':
        return male.includes(item) ? dispatch(removeMale(item)) : dispatch(addMale(item));
      case 'n/a':
        return others.includes(item) ? dispatch(removeOthers(item)) : dispatch(addOthers(item));
    }
  };

  const clearFans = () => {
    dispatch(resetFemale());
    dispatch(resetMale());
    dispatch(resetOthers());
  };

  return (
    <View style={styles.container}>
      <SFlex marginTop={16} justifyContent="space-between" marginBottom={16}>
        <SText fontSize={20}>Fans</SText>
        <TouchableOpacity style={styles.clear} activeOpacity={0.5} onPress={() => clearFans()}>
          <SText color={Colors.red}>CLEAR FANS</SText>
        </TouchableOpacity>
      </SFlex>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.counters}>
          {genderCounters.map(item => (
            <View style={styles.amount} key={item.id}>
              <SText fontSize={18}>{String(item.amount)}</SText>
              <SText>{item.name}</SText>
            </View>
          ))}
        </View>
        <View style={styles.arrows}>
          <TouchableOpacity
            activeOpacity={1}
            disabled={previousPage === null}
            onPress={() => changePage('previous')}
          >
            <LeftIcon opacity={previousPage === null ? 0.5 : 1} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            disabled={nextPage === null}
            onPress={() => changePage('next')}
          >
            <RightIcon opacity={nextPage === null ? 0.5 : 1} />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <CustomInputWithIcon
            value={heroName}
            placeholder="Search"
            onChangeText={e => search(e)}
          />
        </View>
        <View style={styles.heroes}>
          <View style={styles.header}>
            <BlackHeart width={20} height={20} />
            <SText marginStart={10} width={screenWidth / 3}>
              Name
            </SText>
            <SText width={screenWidth / 3}>Birth Year</SText>
            <SText width={screenWidth / 3}>Gender</SText>
          </View>
          {heroList.map(item => (
            <SFlex key={item.name}>
              <TouchableOpacity onPress={() => toggleHeart(item)}>
                {all.includes(item) ?
                  <FilledHeart width={20} height={20} />
                  : <EmptyHeart width={20} height={20} />}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.hero}
                onPress={() => navigate(ScreenEnum.Hero, { hero: item })}
              >
                <SText width={screenWidth / 3.2} marginStart={10}>
                  {item.name}
                </SText>
                <SText width={screenWidth / 3.2} marginStart={10}>
                  {item.birth_year}
                </SText>
                <SText width={screenWidth / 3.2} marginStart={10}>
                  {item.gender}
                </SText>
              </TouchableOpacity>
            </SFlex>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.grey,
  },
  clear: {
    borderColor: Colors.red,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  amount: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    width: screenWidth / 3.5,
    marginBottom: 10,
  },
  input: {
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  arrows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  heroes: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  hero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  separator: {
    backgroundColor: Colors.grey,
    height: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
});
