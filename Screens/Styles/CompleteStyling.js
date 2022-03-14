import { StyleSheet } from 'react-native';
export default StyleSheet.create({

  ContainerWhole:{
    width:'100%',
    height:'100%',
    backgroundColor:'#1572F2',
    flex: 1,

  },

    
    containerForSignIn:{
        width:'90%',
        height:600,
        backgroundColor:'#FFFFFF',
        flexDirection: "row",
        borderColor:'black',
        borderRadius:50,
        marginTop:40,
        alignSelf:'center',
        // borderWidth:3,
    
    },   checkboxContainer: {
        flexDirection: "row",
        marginLeft:20,
        marginTop:10
       
        
      },

      checkbox: {
        alignSelf: "left",
      },  
        image: {
        resizeMode: 'contain',
        height: 200,
        marginTop:120,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'

    },  
    buttonSignIn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor:'#252726',
        height:50,
        margin:80,
       
     },
     buttonGeneral: {
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 15,
         backgroundColor:'#252726',
         height:50,
        marginBottom:30,
        marginLeft:40,
         marginRight:40,
         marginTop:10
        
      },
       button_Side_by_Side: {
     backgroundColor: '#252726',
     borderRadius: 15,
     justifyContent: 'center',
     alignItems: 'center',
     width: '40%',
     height:50,

       },
       Edittext: {
        borderColor: "#B8B8B8",
        backgroundColor:'#F7F7F7',     
           // borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        marginTop:2,
        marginHorizontal:20,
    
      },
      EdittextHeading: {
        marginLeft:27,
        fontWeight:'bold',
        marginTop:10
    
      },

      EMRheading: {
        marginTop:10 ,
        alignItems:'center',
        // justifyContent:'center',
        // alignSelf:'center', 
        color: 'black',
      },
      TextHeading:{
        fontSize:40,
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',

      },
         containerForSearchPatient:{
        width:'80%',
        backgroundColor:'#FFFFFF',
        borderColor:'black',
        borderRadius:10,
        marginTop:80,
        alignSelf:'center',
        // borderWidth:3
    },
    containerForButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    buttonForSearchPatient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      backgroundColor:'#252726',
      height:50,
      margin:40,
     
   } , 
   containerForSearchPatient:{
    width:'80%',
    backgroundColor:'#FFFFFF',
    borderColor:'black',
    borderRadius:10,
    marginTop:80,
    alignSelf:'center',
    // borderWidth:3
},
Side_by_side_EditText: {
  flex: 1,
  flexDirection: "row"
},
inputWrap: {
  flex: 1,

},  
 picker: {

    margin:15,
     
    },
    containerForSelectPatient:{
      backgroundColor:'#FFFFFF',
      borderColor:'blue',
      borderRadius:10,
      padding:10,
      margin:20,
      // borderWidth:1
  },
  roundIcon:{
    alignSelf: 'center',
    width: 50 ,
    height: 50,
    borderRadius: 50/2,

  
    backgroundColor:'orange'
    },
    tinyLogo: {
      width: '100%',
      height: '100%',
      alignSelf: 'center'
  
    }
,
Button_text_styling:{
  fontSize:15,
   color:'#FFFFFF',
   fontWeight:'normal'

},

InsideConatiner1:{
  backgroundColor:'#A4C2D7',
  width:'50%',
  resizeMode: 'contain'
},
InsideConatiner2:{
  backgroundColor:'#FFFFFF',
  width:'50%',
  resizeMode: 'contain'
}
    


})