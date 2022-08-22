import React,{useState} from "react";
import {SafeAreaView,View,Text,StyleSheet, FlatList, TextInput,TouchableOpacity,Dimensions} from 'react-native';

const App = ()=>{
const invalidValue = [{
  isActive: true,
  text: 'example1',
  id:1}];
 const [Todos,useTodos] =useState(invalidValue); 
 const [Texts, useTexts] = useState("");

 function addTodo(){
  if(Texts.trim()){
    const newTodo = {
        id:Math.random(),
        text:Texts,
        isActive:false
    }
    useTodos([...Todos,newTodo]);
    useTexts('');
  }
}


const renderItem= () => <View  >
{Todos.map(todo => (
    <View style={{
      width: Dimensions.get('window').width / 1.05,
      height: Dimensions.get('window').height / 16,
      backgroundColor: todo.isActive.toString() == "false" ? "#37474f" : "#7da453",margin:10,padding:10,borderRadius:10}} key={todo.id}> 

    <Text onLongPress={() =>removeTodo(todo.id)} onPress={() =>toggleTodo(todo.id)} style={{color: "white",textDecorationLine: todo.isActive.toString()=="false" ? "line-through" : "none",fontSize:20,}} key={todo.id}>{todo.text}</Text>

    </View>
))}
 </View>;
  const toggleTodo = (id) => {
  const newTodos = Todos.map(todo => {
      if(todo.id === id){
          todo.isActive = !todo.isActive;
      }
      return todo;
  });
  useTodos(newTodos);
}
const removeTodo = (id) => {
  const newTodos = Todos.filter(todo => todo.id !== id);
  useTodos(newTodos);
}
  return(
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
       <View style={styles.header}><Text style={styles.sayac}>{Todos.length}</Text></View>
          <Text style={styles.title}>YAPILACAKLAR</Text>
       </View>
      <View style={styles.body}>
        <FlatList 
        data={Todos}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        /> 
      </View>
      <View style={styles.footer}>
      <TextInput
                style={styles.text_input}
                onChangeText={(text) => useTexts(text)}
                value={Texts}
                placeholder="Yapılacak..."
            />
        <View style={styles.scores}></View>
            <TouchableOpacity activeOpacity={0.8} onPress={addTodo} style={styles.button}>
              <Text style={styles.button_text}>EKLE</Text>
              </TouchableOpacity>
      
      </View>
       
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
container:{
  flex:100,
  backgroundColor:'#102027',
},
header:{
flex:5,
backgroundColor:'#102027',
flexDirection: 'row-reverse'
},
body:{
  flex:30,
  backgroundColor:'#102027',
},
item:{
  borderRadius: 15,
  margin:10,
  backgroundColor: '#7da453',
  
},
todo:{flex:1,
backgroundColor:'purple',
},
footer:{
  flex:8,
  backgroundColor:'#37474f',
  margin:10,
  marginBottom:30,
  borderRadius:12,
},

scores:{
  height:1,
  backgroundColor:'gray',
  margin:10,
  marginBottom:20,
  marginTop:-10,
},
text_input:{
  fontFamily:'sans-serif-medium',
  padding:10,
  height:50,
 fontSize:15,
},
button:{
  height:50,
  marginHorizontal:40,
   elevation: 8,
   backgroundColor: '#808080',
   borderRadius: 10,
  },
button_text:{
  fontFamily:'sans-serif-medium',
  textAlign:'center',
  textAlignVertical:'center',
  height:50,
},
sayac:{fontFamily: 'verdana',fontSize:35,color:'#ffa500',padding:10,},
title:{fontSize:35,color:'#ffa500',padding:10,fontFamily: 'verdana',},
}
);
export default App;

  // useEffect(() => {
    
  // },[Todos]);