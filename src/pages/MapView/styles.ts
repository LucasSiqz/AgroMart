import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const StoreBanner = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  border-width: 4px;
  border-color: #fff;
`;

export const CalloutView = styled.View`
  width: 260px;
  padding: 10px;
`;

export const CalloutText = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: 16px;
`;

export const CalloutTitle = styled.Text`
  font-family: MontserratAlternates-Bold;
  font-size: 18px;
`;

export const SearchBar = styled.TextInput`
  position: absolute;
  align-self: center;
  top: ${Platform.OS === 'ios' ? 80 : 40}px;
  width: 75%;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #888888;
  font-size: 16px;
  padding: 0px 25px;
`;

export const SearchResult = styled.View`
  position: absolute;
  align-self: center;
  top: ${Platform.OS === 'ios' ? 140 : 100}px;
  width: 85%;
  max-height: 250px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #888888;
`;

export const SearchResultText = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: 16px;
  height: 40px;
  padding: 10px 0 0 15px;
  border: 1px solid #888888;
  border-radius: 10px;
`;
