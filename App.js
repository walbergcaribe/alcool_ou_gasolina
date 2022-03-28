import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

const App = () => {

  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const valorGasolina = parseFloat(gasolina);
    const valorCalculado = valorGasolina * 0.7;

    if (valorCalculado > alcool) {
      setResultado('ÁLCOOL');
    } else {
      setResultado('GASOLINA');
    }
  }

  return (

    <ImageBackground
      style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
      source={{ uri: 'https://s3-sa-east-1.amazonaws.com/ibpt.impostometro/Noticia/182f66f8-dc2f-4c00-9f99-709283fd850f.jpg' }}>

      <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Álcool ou Gasolina</Text>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        Saiba qual a melhor opção de abastecimento para o seu veículo
      </Text>

      <TextInput placeholder='Valor Gasolina' keyboardType='numeric'
        style={{ backgroundColor: 'white', width: '90%', marginVertical: 10 }}
        onChangeText={(value) => setGasolina(value)} />

      <TextInput placeholder='Valor Álcool' keyboardType='numeric'
        style={{ backgroundColor: 'white', width: '90%', marginVertical: 10 }}
        onChangeText={(value) => setAlcool(value)} />

      <TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}
          onPress={calcular} >Calcular</Text>
      </TouchableOpacity>

      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        É melhor você abastecer com:
      </Text>
      <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{resultado}</Text>

    </ImageBackground>

  );
};

export default App;