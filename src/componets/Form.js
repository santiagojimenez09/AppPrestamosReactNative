import React from "react";
import {StyleSheet, TextInput, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import colors from "../utils/colors";

export default function Form(props){
    const {setCapital, setIntereses, setMeses, setNombre} = props;

    return(
        <View style={styles.viewForm}>
            <View styles={styles.viewInput}>
                <TextInput 
                    placeholder="Valor solicitado"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput 
                    placeholder="Intereses %"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={(e) => setIntereses(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese su nombre"
                    style={styles.input}
                    onChange={(e) => setNombre(e.nativeEvent.text)}
                />
            </View>
            <Picker 
                style={pickerSelectStyles.input} 
                onValueChange={(itemValue) => setMeses(itemValue)}
            >    

                <Picker.Item label="Seleccione numero de meses" value="null"/>
                <Picker.Item label="3 Meses" value="3"/>
                <Picker.Item label="6 Meses" value="6"/>
                <Picker.Item label="12 Meses" value="12"/>
                <Picker.Item label="24 Meses" value="24"/>
            </Picker>
        </View>
    );
}


const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 240,
        justifyContent: 'center',
    },

    viewInput: {
        flexDirection: 'row',
        
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '100%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },

    inputPercentage: {
        width: '100%',
        marginLeft: -5,
    }
})

const pickerSelectStyles = StyleSheet.create({
    input:{
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: 'green',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    }
})