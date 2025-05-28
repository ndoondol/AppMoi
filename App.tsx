import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Linking, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const theme = {
    background: darkMode ? '#0e1116' : '#f2f2f2',
    textPrimary: darkMode ? '#ffffff' : '#000000',
    textSecondary: darkMode ? '#aaaaaa' : '#333333',
    box: darkMode ? '#1e242e' : '#ffffff',
    accent: '#00BFFF',
  };

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Linking.openURL('mailto:gningngouye2001@gmail.com');
    });
  };

  const handleOpenCV = () => {
    Linking.openURL('https://drive.google.com/file/d/15M7cvuwcMka22MvhjacPK6F8VTivdNA_/view?usp=sharing'); // Remplace par ton lien réel
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      <Image
        source={require('./assets/ngouye.jpg')}
        style={styles.avatar}
      />
      <Text style={[styles.name, { color: theme.textPrimary }]}>Ngouye GNING</Text>
      <Text style={[styles.role, { color: theme.textSecondary }]}>Développeur React Native</Text>

      <View style={[styles.infoBox, { backgroundColor: theme.box }]}>
        <Text style={[styles.label, { color: theme.accent }]}>📧 Email :</Text>
        <Text style={[styles.info, { color: theme.textPrimary }]}>gningngouye2001@gmail.com</Text>

        <Text style={[styles.label, { color: theme.accent }]}>📱 Téléphone :</Text>
        <Text style={[styles.info, { color: theme.textPrimary }]}>+221 77 952 77 84</Text>

        <Text style={[styles.label, { color: theme.accent }]}>📍 Adresse :</Text>
        <Text style={[styles.info, { color: theme.textPrimary }]}>Dakar, Sénégal</Text>
      </View>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.accent }]} onPress={handlePress}>
          <Text style={styles.buttonText}>Me contacter</Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.accent, marginTop: 20 }]} onPress={handleOpenCV}>
        <Text style={styles.buttonText}>📄 Voir mon CV PDF</Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: theme.textPrimary }]}>
          {darkMode ? '🌙 Mode sombre' : '☀️ Mode clair'}
        </Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? '#00BFFF' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#00BFFF',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    marginBottom: 20,
  },
  infoBox: {
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    marginBottom: 5,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 10,
  },
  toggleText: {
    fontSize: 16,
  },
});
