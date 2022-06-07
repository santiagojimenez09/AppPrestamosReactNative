import React from "react";
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props){

    const {capital, intereses, meses, total, errorMessage} = props;

    return (
       
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.tittle}>RESUMEN</Text>
                    <DataResult tittle="Cantidad soliciitada:" value={`${capital} $`}/>
                    <DataResult tittle="Cantidad soliciitada:" value={capital}/>
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>

        </View>

    );

}

function DataResult(){
    const {tittle, value} = props;

    return(
        <View style={styles.value}>
            <Text>{tittle}</Text>
            <Text>{value}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    
    content:{
        marginHorizontal: 40,

    },

    error:{
        textAlign: 'center',
        color: '#f00',
        fontSize: 20,
        fontWeight: 'bold',
    },

    boxResult:{
        padding: 30,

    },

    tittle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },

    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,

    }
})

