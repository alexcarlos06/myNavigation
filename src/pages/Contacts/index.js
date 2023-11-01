import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default function Contacts({navigation}){
    return(
        <View>
            <View style={{marginTop:30}}>
                <Text>Nome: Alex Sousa</Text>
                <Text>Telefone: (11) 97491-5314</Text> 
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome:'Alex Carlos',
                        telefone: '(11) 97491-5314',
                        endereco: 'Rua dos bobos',
                        numero:'0',
                        profissao:'Carpinteiro',
                        email:'alexsousa@carpintaria.com.br'
                    })}
                    >Clique para mais informações</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text>Nome: Henry Sousa</Text>
                <Text>Telefone: (11) 97292-5314</Text> 
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome:'Henry Sousa',
                        telefone: '(11) 97292-5314',
                        endereco: 'Rua Jose Lira Abreu',
                        numero:'361',
                        profissao:'Engenheiro de Software',
                        email:'henrysousa@toptop.com.br'
                    })}
                    >Clique para mais informações</Text>
            </View>         
        </View>
    )
}