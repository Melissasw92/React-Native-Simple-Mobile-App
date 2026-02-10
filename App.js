import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://picsum.photos/300/300',
        }}
        style={styles.albumArt}
      />

      <View style={styles.textContainer}>
        <Text style={styles.albumTitle}>C'est la Vie</Text>
        <Text style={styles.artistName}>Mustard Service</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>▶ Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🔀 Shuffle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 8,
  },

  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBotton: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    alignItems: 'center',
    marginBotton: 30,
  },

  albumTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistName: {
    color: '#fa233b',
    fontSize: 20,
    fontWeight: '500',
  },

  buttonRow: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
    //gab: 12,
  },

  button: {
    backgroundColor: '#fa233b',
    paddingVertical: 15,
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
