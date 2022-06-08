import React from "react";
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props){

    const {capital, intereses, meses, total, nombre, errorMessage} = props;

    return (
       
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.tittle}>RESUMEN</Text>
                    <DataResult tittle="Nombre del cliente:" value={`${nombre}`}/>
                    <DataResult tittle="Cantidad soliciitada:" value={`$ ${capital}`}/>
                    <DataResult tittle="Intereses:" value={`${intereses} %`}/>
                    <DataResult tittle="Cantidad soliciitada:" value={`${meses} meses`}/>
                    <DataResult tittle="Cuota mensual:" value={`$ ${total.monthyFee}`}/>
                    <DataResult tittle="Valor total a pagar:" value={`$ ${total.totalPayable}`}/>
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>

        </View>

    );

}

function DataResult(props){
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

