import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Styles from './form.style';

export const FormScreen = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    return (
        <View style={Styles.container}>
            <Text style={{padding: 10, fontSize: 20}}>
                Titulo
            </Text>
            <TextInput
                style={Styles.textInput}
                placeholder="Nome"
                onChangeText={text1 => setText1(text1)}
                defaultValue={''}
                testID="nameField"
            />
            <TextInput
                style={Styles.textInput}
                placeholder="Sobrenome"
                onChangeText={text2 => setText2(text2)}
                defaultValue={''}
                testID="lastNameField"
            />
            <TextInput
                style={Styles.textInput}
                placeholder="Idade"
                onChangeText={text3 => setText3(text3)}
                defaultValue={''}
                testID="ageField"
            />
        </View>
    );
};
