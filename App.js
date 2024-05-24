import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("assets\Captura de tela 2024-01-18 230324.png")} style={styles.image} />
      <Text style={styles.header}>Gabriel Lins</Text>
      <Text style={styles.subheader}>
        Análise e desenvolvimento de sistemas
      </Text>
      <Text style={styles.paragraph}>
        Me chamo Gabriel, tenho 18 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas na faculdade Senac Pernambuco, Moro em Recife-PE
      </Text>
      <Text style={styles.paragraph}>
        Tecnologias que tenho conhecimento:
      </Text>
      <Text style={styles.listItem}>
        • Libraries e Frameworks: atualmente nenhum
      </Text>
      <Text style={styles.listItem}>
        • Linguagens de programação: java
      </Text>
      <Text style={styles.listItem}>• Banco de dados: Mysql(básico)</Text>
      <Text style={styles.listItem}>• Ferramentas de Desenvolvimento: Git, GitHub.</Text>
      <Text style={styles.paragraph}>
      Atualmente estou pretendendo seguir a área como desenvolvedor back-end.
      </Text>
      <Text style={styles.paragraph}>
  
        {""}
        Meu projeto no github: {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/Deceitful1")}
        >
          github.com/emessonSilva
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Participei da Residencia Tecnólogica do Porto Digital, onde aprendi a mexer com diversos tipos de tecnologias
      </Text>
      <Text style={styles.paragraph}>• Março de 2023 até Junho de 2023</Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Graduando em Analise e desenvolvimento de sistemas
      </Text>
      <Text style={styles.paragraph}>
        Faculdade Senac 2023.1 até o momento.
      </Text>
      <Text style={styles.subheader}>Curso de Java Orientado a objetos com projetos</Text>
      <Text style={styles.paragraph}>
        Udemy 2024.1 até o momento.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
