import {
  Background,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardIcon,
  CardLabelDevices,
  CardNumberDevices,
  CardTitle,
  Container,
  Header,
  List,
  ListHeader,
  Logo,
  MiddleContent,
  MyDevicesText,
  ProfilePic,
  SearchButton,
  SearchLabel,
  SeeAllText,
  UserNameText,
  WelcomeText,
} from "./Home.styles";

import SearchIcon from "../../assets/svg/search.svg";

import { list, user } from "../../utils/data";

export function Home() {
  return (
    <Container>
      <Background
        colors={["rgba(0,0,255,0.2)", "black", "black"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      />

      <Header>
        <Logo />
        <ProfilePic source={user.profile} />
      </Header>

      <MiddleContent>
        <WelcomeText>Bem vindo</WelcomeText>
        <UserNameText>{user.name}</UserNameText>

        <SearchButton>
          <SearchIcon />
          <SearchLabel>Buscar Dispositivo</SearchLabel>
        </SearchButton>
      </MiddleContent>

      <ListHeader>
        <MyDevicesText>Meus Dispositivos</MyDevicesText>

        <Button>
          <SeeAllText>Ver Todos</SeeAllText>
        </Button>
      </ListHeader>

      <List>
        {list.map((item, index) => (
          <Card key={index} active={item.active}>
            <CardHeader>
              <CardTitle>{item.description}</CardTitle>
              <CardIcon>{item.icon}</CardIcon>
            </CardHeader>
            <CardFooter>
              <CardNumberDevices>{item.devices}</CardNumberDevices>
              <CardLabelDevices>Dispositivos</CardLabelDevices>
            </CardFooter>
          </Card>
        ))}
      </List>
    </Container>
  );
}
