import * as React from 'react';
import{View, StyleSheet,Image} from 'react-native';
import{ScrollView} from 'react-native';
import user from '../../../assets/User.png';
import{Text, TextInput} from 'react-native';
import{TouchableOpacity} from 'react-native';
import dados from '../../DadoLogin';
import {useState} from 'react';


export default function Cadastrar({ navigation }){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alerta, setAlerta] = useState('');

    function menuinicial() {
        navigation.navigate("MenuInicial");
      }

      function login() {
        if(email === "" || senha === ""){
            setAlerta("Preencha todos os campos!");
            
        }
        else{
        dados.push({"email":email, "senha":senha});
        navigation.navigate("Login");
    }
      }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
       
           
       <View style={estilos.boxImgPrincipal}>

       <TouchableOpacity style={estilos.botaoVoltar} onPress={menuinicial}><Text style={estilos.textoBotaoVoltar}>Voltar</Text></TouchableOpacity>

            <View style={estilos.boxImg}>
            <Image style={estilos.img} source={user} />
            </View>
        </View>
       

        <View style={estilos.boxEntrada}>
            
             <View>
            
            <Text style={estilos.titulo}>Sign Up!</Text>

           
        
            <Text style={estilos.label}>Nome:</Text>
            <TextInput
            style={estilos.entrada}
            placeholder = 'Ex: João'
            />

            <Text style={estilos.label}>Data de Nascimento:</Text>
            <TextInput 
            style={estilos.entrada}
            placeholder = 'Ex 02/07/2003'
            
            />

            <Text style={estilos.label}>CPF:</Text>
            <TextInput
            style={estilos.entrada} 
            placeholder = 'Ex: 99988877722'
            
            />

            <Text style={estilos.label}>E-mail:</Text>
            <TextInput 
            style={estilos.entrada}
            placeholder = 'Ex: joaozinho@gmail.com'
            onChangeText={email => setEmail(email)}
            
            />

            <Text style={estilos.label}>Senha:</Text>
            <TextInput
            style={estilos.entrada}
            placeholder = 'Ex: João@123'
            keyboardType={'numeric'}
            secureTextEntry={true}
            onChangeText={senha => setSenha(senha)}
            />
            
            </View>
            <Text>{alerta}</Text>
        </View>

        

        <View style={estilos.boxBotao}>
           <TouchableOpacity style={estilos.botao} onPress={login}><Text style={estilos.texto}>Next</Text></TouchableOpacity>
        </View>
        </ScrollView>
        
    );
}

const estilos = StyleSheet.create({
    boxImgPrincipal:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       
    }, 
         
    boxImg:{
        backgroundColor:"#FFFFFF",
        borderRadius:180,
        marginBottom:15,
        marginTop:20,
        
    },
    
    img:{
        width:125,
        height:125,
        

    },


    boxEntrada: {
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: "65%",
        width:"100%",
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
        backgroundColor:"#FFFFFF",
              
    },

    
    
    label:{
        marginTop: 10,
        color:"#6FB8E5",
        fontSize:18,
    },

    entrada:{
        borderBottomWidth:2,
        borderColor:"#6FB8E5",
        padding: 5,
        marginBottom: 5,
        fontSize:20,
    },

    titulo:{
        color:"#6FB8E5",
        fontSize:30,
        fontWeight:"bold",
        
        paddingTop:40,
        marginBottom:20,
        
        
    },



    boxBotao:{
        backgroundColor:"#FFFFFF",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    
    texto:{
        textAlign:"center",
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize:20,
    },

    botao:{
        marginBottom: 80,
        backgroundColor: "#6FB8E5",
        paddingVertical: 10,
        borderRadius: 6,
        borderRadius:20,
        width:200,
        

    },

    botaoVoltar:{
        marginTop: 40,
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        borderRadius: 6,
        borderRadius:20,
        width:100, 
    },

    textoBotaoVoltar:{
        textAlign:"center",
        color:"#6FB8E5",
        fontWeight:"bold",
        fontSize:20,
    },
});
