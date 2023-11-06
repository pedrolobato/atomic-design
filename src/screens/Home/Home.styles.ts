import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

export const Container = styled.ScrollView`
  flex: 1;
  background-color: black;
`;

export const Background = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  padding-horizontal: 40px;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const Logo = styled.View`
  height: 40px;
  width: 25px;
  border-radius: 100px;
  background-color: #580bdc;
`;

export const ProfilePic = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const MiddleContent = styled.View`
  padding: 30px;
`;

export const WelcomeText = styled.Text`
  font-size: 36px;
  color: white;
  font-weight: 300;
`;
export const UserNameText = styled.Text`
  font-size: 36px;
  color: white;
  font-weight: bold;
`;

export const SearchButton = styled.Pressable`
  height: 60px;
  background-color: #131313;
  border-radius: 100px;
  border-color: #262626;
  border-width: 0.5px;
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchLabel = styled.Text`
  color: white;
  text-align: center;
  margin-left: 8px;
`;

export const ListHeader = styled.View`
  padding-horizontal: 30px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const MyDevicesText = styled.Text`
  font-size: 20px;
  color: white;
`;

export const Button = styled.Pressable``;

export const SeeAllText = styled.Text`
  font-size: 14px;
  color: gray;
`;

export const List = styled.View`
  margin-top: 8px;
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 50px;
`;

export const Card = styled.View<{ active?: boolean }>`
  border-radius: 30px;
  background-color: ${(props) => (props.active ? "#580bdc" : "#131313")};
  width: ${width / 2 - 28}px;
  height: 200px;
  margin: 4px;
  padding: 16px;
  justify-content: space-between;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CardTitle = styled.Text`
  font-size: 16px;
  color: white;
  width: ${width / 4.5}px;
  font-weight: 500;
`;
export const CardIcon = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.15);
  justify-content: center;
  align-items: center;
`;
export const CardFooter = styled.View``;
export const CardNumberDevices = styled.Text`
  font-size: 36px;
  color: white;
  font-weight: bold;
`;
export const CardLabelDevices = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: 300;
`;
