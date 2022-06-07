import React from 'react';
import { useState, useEffect } from 'react';
import {StyleSheet, View, Text, SafeAreaView, Button} from 'react-native';
import Form from './src/componets/Form';
import Footer from './src/componets/Footer';
import ResultCalculation from './src/componets/ResultCalculation';
import colors from './src/utils/colors';

export default function App(){
  
  const [capital, setCapital] = useState(null);
  const [intereses, setIntereses] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMenssage] = useState('');

  useEffect(()=>{
    if(capital && intereses && meses){
      calculate();
    }else{
      reset();
    }
  }, [capital,intereses,meses])

  const calculate = () =>{
      if(!capital){
        setErrorMenssage("Ingresa el valor a solicitar");
      }else if(!intereses){
        setErrorMenssage("Ingresa los intereses");
      }else if(!meses){
        setErrorMenssage("Ingresa el numero de meses");
      }else{
        const i = intereses / 100;
        const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
        setTotal({
          monthyFee: fee.toFixed(2).replace('.',','),
          totalPayable: (fee * meses).toFixed(2).replace('.',',')
        })
      }
  };

  const reset = () => {
    setErrorMenssage("");
    setTotal(null);
  }
  

    return(
      <>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.background}/>
          <Text style={styles.tittleApp}>Simulador de prestamos</Text>
          <Form 
            setCapital={setCapital} 
            setIntereses={setIntereses} 
            setMeses={setMeses}
          />
        </SafeAreaView>

        <ResultCalculation 
        capital={capital}
        intereses={intereses}
        meses={meses}
        total={total}
        errorMessage={errorMessage}
        />

        <Footer calculate={calculate}/>
      </>
    );

}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: "center",
  },

  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  tittleApp:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
})
