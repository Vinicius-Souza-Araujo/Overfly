import * as React from 'react';
import {Image, Text ,StyleSheet, Dimensions} from 'react-native';
import { View } from 'react-native';
import topo from '../../../assets/imagemMenu.png'
import { TouchableOpacity} from 'react-native';
const largura = Dimensions.get('screen').width;


export default function MenuInicial({ navigation }){

    function cadastrar() {
        navigation.navigate("Cadastrar");
      }

      function login() {
        navigation.navigate("Login");
      }

    
    
    return(
        <View>
         <View style={estilos.box}>
        <Text style={estilos.titulo}>Overfly</Text>
        <Image source={topo}
               style={estilos.topo}
        />
        </View>
        
        <View style={estilos.boxBotao}>
        <TouchableOpacity style={estilos.botao1} onPress={login}>
            <Text style={estilos.textoBotao1}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao2} onPress={cadastrar} >
            <Text style={estilos.textoBotao2} >Sign Up</Text>
        </TouchableOpacity>

        </View>   
        </View>
    );
}

const estilos = StyleSheet.create({
    box:{
        width:'100%',
        backgroundColor:'#E1E9F4',
        borderColor: '#6FB8E5',
        borderBottomWidth:50,
        borderBottomRightRadius:200,
        borderBottomLeftRadius:200,
        
    },

    topo :{
        width:"100%",
        height: 578 / 568 * largura,
        borderColor: '#6FB8E5', 
        marginTop:50,
    },

    titulo:{
        width: "100%",
        color: "#24336D",
        fontWeight: "bold",
        fontSize: 35,
        lineHeight: 42,
        marginTop:25,
        position:'absolute',
        textAlign:'center',
        zIndex:1,
        marginTop:50,
       
    },



    boxBotao:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    botao1:{
        marginTop: 16,
        backgroundColor: "#24336D",
        paddingVertical: 16,
        borderRadius: 6,
        borderRadius:20,
        width:280,
        
        
    },

    textoBotao1:{
        color:'#FFFFFF',
        textAlign:'center',
        fontWeight:'bold',
        
    },

    botao2:{
        marginTop: 16,
        backgroundColor: "#E8E9F0",
        paddingVertical: 16,
        borderRadius: 6,
        borderRadius:20,
        width:280,
        
    },

    textoBotao2:{
        color:'#24336D',
        textAlign:'center',
        fontWeight:'bold',
    }
});