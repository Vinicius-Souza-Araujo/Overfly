import * as React from 'react';
import{View, StyleSheet,Image} from 'react-native';
import{ScrollView} from 'react-native';
import aviao from '../../../assets/aviao.png';
import{Text, TextInput} from 'react-native';
import{TouchableOpacity} from 'react-native';

export default function Passagem({ navigation }){
    
    
      function destino() {
        navigation.navigate("Destino");
      }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
       
           
       <View style={estilos.boxImgPrincipal}>

       <TouchableOpacity style={estilos.botaoVoltar} onPress={destino}><Text style={estilos.textoBotaoVoltar}>Voltar</Text></TouchableOpacity>

            <View style={estilos.boxImg}>
            <Image style={estilos.img} source={aviao} />
            </View>
        </View>
       

        <View style={estilos.boxEntrada}>
            
             <View>
            
            <Text style={estilos.titulo}>Passagens:</Text>

           
        
            <Text style={estilos.label}>Destino:</Text>
            <TextInput
            style={estilos.entrada}
            placeholder = 'Insira seu destino'
            />

            <Text style={estilos.label}>Origem:</Text>
            <TextInput 
            style={estilos.entrada}
            placeholder = 'Insira sua localidade atual'
            
            />

            <Text style={estilos.label}>Data da viagem:</Text>
            <TextInput
            style={estilos.entrada} 
            placeholder = 'Ex: Insira a data da viagem'
            
            />

            <Text style={estilos.label}>Horário de voo:</Text>
            <TextInput 
            style={estilos.entrada}
            placeholder = 'Insira o horário do voo'
            
            />
            
            </View>
        </View>

        

        <View style={estilos.boxBotao}>
           <TouchableOpacity style={estilos.botao} ><Text style={estilos.texto}>Next</Text></TouchableOpacity>
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
