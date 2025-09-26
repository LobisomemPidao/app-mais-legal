import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState(''); //USESTATE DO NOME
    const [nome, setNome] = useState('');
    return (
        <View style={styles.body}>
            <TextInput placeholder="Digite seu nome"
            onChangeText={setName}/>
            <TextInput placeholder="Digite estilo musical"
            onChangeText={setNome}/>
            <Text style={styles.title}>
                EM HOMENAGEM AO FINADO {name}<br/>
                VAI TER MUITO {nome}<br/>
            </Text>
            <Text>
                VAI TER MUITO {nome}<br/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "blue",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
})