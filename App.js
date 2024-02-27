import {useState, useEffect} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const request = async (callback) =>{
  const response = await fetch('https://swapi.dev/api/people/');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {

  const [registros, setRegistros] = useState([]);

  useEffect(()=>{
    request(setRegistros);
  },[])

  return (
    <View style={styles.container}>
      <Text>API do Star Wars</Text>
      <FlatList
      data={registros}
      renderItem={({item}) =>
      <View style={styles.itens}>
    <Text>Nome: {item.name}{'\n'}</Text>
    <Text>Cor dos Olhos: {item.eye_color}</Text>
    </View>
    }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itens:{
    backgroundColor: '#a50800',
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 25,
    color: '#fff'
  },
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    marginVertical: 30
  }
});
