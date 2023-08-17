import { LinearGradient } from "expo-linear-gradient";

import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { list, user } from "../../utils/data";

import Search from "../../assets/svg/search.svg";

export function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["rgba(0,0,255,0.2)", "black", "black"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
          style={styles.background}
        />

        <View style={styles.header}>
          <View style={styles.logo} />
          <Image source={user.profile} style={styles.profile} />
        </View>

        <View style={styles.middle}>
          <Text style={styles.welcome}>Bem vindo</Text>
          <Text style={styles.username}>{user.name}</Text>

          <TouchableHighlight>
            <View style={styles.search}>
              <Search />
              <Text style={styles.searchLabel}>Buscar Dispositivo</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.contentHeader}>
          <Text style={styles.myDevices}>Meus Dispositivos</Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver Todos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {list.map((item, index) => (
            <View
              key={index}
              style={[styles.card, item.active ? styles.cardHighlight : null]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.descriptionRoom}>{item.description}</Text>
                <View style={styles.iconRoom}>{item.icon}</View>
              </View>
              <View>
                <Text style={styles.numberDevices}>{item.devices}</Text>
                <Text style={styles.devices}>Dispositivos</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
