import * as React from 'react';
import{ScrollView} from 'react-native';
import{View, StyleSheet, Image, Text,TouchableOpacity} from 'react-native';

export default function Destino({ navigation }){
    function cadastrar() {
        navigation.navigate("Cadastrar");
      }

      function passagem() {
        navigation.navigate("Passagem");
      }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={estilos.box}>

          <TouchableOpacity style={estilos.botaoVoltar} onPress={cadastrar}><Text style={estilos.textoBotaoVoltar}>Voltar</Text></TouchableOpacity>

<Text style={estilos.titulo}>Destino</Text>


<View style={estilos.caixa}>

    <Image source={require("../../../assets/SP.jpg")} style={estilos.img}/>
    
    <Text style={estilos.detalhes}>Local: São Paulo, SP</Text>
    <Text style={estilos.detalhes}>Preço: R$ 502,00</Text>
</View>

<TouchableOpacity style={estilos.botao} onPress={passagem}><Text style={estilos.textoBotao}>Passagem</Text></TouchableOpacity>

<View style={estilos.caixa}>
    <Image source={require("../../../assets/RJ.jpg")} style={estilos.img}/>
   
    <Text style={estilos.detalhes}>Local: Rio de Janeiro, RJ</Text>
    <Text style={estilos.detalhes}>Preço: R$ 444,00</Text>
</View>

<TouchableOpacity style={estilos.botao} onPress={passagem}><Text style={estilos.textoBotao}>Passagem</Text></TouchableOpacity>

<View style={estilos.caixa}>
    <Image source={require("../../../assets/BH.jpeg")} style={estilos.img}/>
   
    <Text style={estilos.detalhes}>Local: Belo Horinte, MG</Text>
    <Text style={estilos.detalhes}>Preço: R$ 350,00</Text>
</View>

<TouchableOpacity style={estilos.botao} onPress={passagem}><Text style={estilos.textoBotao}>Passagem</Text></TouchableOpacity>

<View style={estilos.caixa}>
    <Image source={require("../../../assets/DF.jpg")} style={estilos.img}/>
    
    <Text style={estilos.detalhes}>Local: Brasília, DF</Text>
    <Text style={estilos.detalhes}>Preço: R$ 583,00</Text>
</View>

<TouchableOpacity style={estilos.botao} onPress={passagem}><Text style={estilos.textoBotao}>Passagem</Text></TouchableOpacity>

</View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({

  box:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: "100%",
      width:"100%",
      // backgroundColor:"#FFFFFF",
  
  },

  titulo:{
   fontSize:40,
   fontWeight:'bold',
   marginTop:25,
   color:"#FFFFFF",
  },

  caixa:{
      marginVertical:25,
      backgroundColor: "#FFFFFF",
      padding: 30,
      borderRadius:10,
      width:"90%",
      
  },

  img:{
      width:"100%",
      
      height:300,
  },
  detalhes:{
      marginVertical:5,
      fontWeight:'bold',
      fontSize: 20,
      color:"#6FB8E5",
  },

  botao:{
      marginTop: 10,
      marginBottom:35,
      backgroundColor: "#F8F8F8",
      paddingVertical: 16,
      borderRadius: 6,
      borderRadius:20,
      width:280,
      
      
  },

  textoBotao:{
      color:'#6FB8E5',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:20,
      
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
