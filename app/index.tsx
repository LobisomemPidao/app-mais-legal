import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState(''); //USESTATE DO NOME
    const altura = Number(name);
    const [nome, setNome] = useState('');
    const peso = Number(nome);
    const imc = peso / (altura*altura);
    return (
        <View style={styles.body}>
            <TextInput placeholder="Digite seu nome"
            onChangeText={setName}/>
            <TextInput placeholder="Digite estilo musical"
            onChangeText={setNome}/>
            <Text style={styles.title}>
             {name}
            </Text>
            <Text>
            {nome}<br/>
            </Text>
            <Text>
            {imc}
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