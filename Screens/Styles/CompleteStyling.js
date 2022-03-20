import { StyleSheet } from 'react-native';
export default StyleSheet.create({

  ContainerWhole:{
    width:'100%',
    height:'100%',
    backgroundColor:'#33A58F',
    flex: 1,
   
  },  
  ContainerWhite:{
    width:'100%',
    height:'100%',
    backgroundColor:'#FFFFFF',
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
        borderRadius: 25,
        backgroundColor:'#252726',
        height:50,
        margin:80,
       
     },
     buttonGeneral: {
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 25,
         backgroundColor:'#252726',
         height:50,
        //  margin:50,
        marginBottom:30,
        marginLeft:400,
         marginRight:400,
         marginTop:10
        
      },    
       buttonRegistration: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor:'#252726',
        height:50,
        margin:50,
       // marginBottom:30,
       // marginLeft:400,
       //  marginRight:400,
       //  marginTop:10
       
     },
       button_Side_by_Side: {
     backgroundColor: '#252726',
     borderRadius: 25,
     justifyContent: 'center',
     alignItems: 'center',
     width: '30%',
     height:50,
     marginLeft:50,
     marginRight:50,
     marginTop:10,
    marginBottom:10
    // margin:30

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
    //      containerForSearchPatient:{
    //     width:'50%',
    //     height:20,
    //     backgroundColor:'black',
    //     borderColor:'black',
    //     borderRadius:10,
    //     marginTop:80,
    //     alignSelf:'center',
    //     // borderWidth:3
    // },
    containerForButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth:"85%",
    },
    buttonForSearchPatient: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      borderRadius: 25,
      backgroundColor:'#252726',
      height:50,
      width:250,
      margin:40,
     
   } , 
  //  scrollView: {
  //   backgroundColor: '#65C5F0',
  //   marginHorizontal: 20,
  //  },

   containerForSearchPatient:{
    width:'50%',
    padding:30,
    backgroundColor:'#FFFFFF',
    borderColor:'black',
    // borderRadius:10,
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
      backgroundColor:'#EEEEEE',
      borderColor:'blue',
      borderRadius:10,
      padding:20,
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
  
    },
Button_text_styling:{
  fontSize:15,
   color:'#FFFFFF',
   fontWeight:'normal',
  //  fontFamily:"Montserrat-Bold"

},

InsideConatiner1:{
  backgroundColor:'#8BB68B',
  width:'40%',
  resizeMode: 'contain'
},
InsideConatiner2:{
  backgroundColor:'#E5E5E5',
  width:'60%',
  resizeMode: 'contain'
},   
 containerForRegistration:{
  width:'100%',
    backgroundColor:'#30A28C',           //#FFFFFF
    borderColor:'black',
    // borderRadius:10,
    // marginTop:10,
    alignSelf:'center',
    // borderWidth:3

}, 
containerForScrollView:{
  width:'60%',
    backgroundColor:'#FFFFFF',           //#FFFFFF
    borderColor:'black',
    // borderRadius:10,
    // marginTop:20,
    alignSelf:'center',
    // borderWidth:3

},
 containerWithinScrollView:{
  width:'50%',
  padding:30,
    backgroundColor:'#FFFFFF',           //#FFFFFF
    borderColor:'black',
    // borderRadius:10,
    marginTop:30,
    marginBottom:30,
    alignSelf:'center',
    borderWidth:3,
    borderColor:"#30A28C"

},

ViewForRow:{
  flexDirection: "row"
},
ViewForInsideRow:{
  flexDirection: 'row',
  width: '50%' , 
  alignItems: 'center',
  justifyContent: 'flex-start'

},
TextForInsideRow:{
  marginTop:10, 
  lineHeight: 20,
  color: 'black',
  alignSelf: 'flex-start'
},
TextForInsideRowSidebySide:{
  marginTop:11,
  color: 'black',
  lineHeight: 20, 
  alignSelf: 'flex-start',
  fontWeight:'bold'
},


    // GREY
    ColorGrey:{
    color_grey_50: "#FAFAFA",
    color_grey_100: '#F5F5F5',
    color_grey_200: '#EEEEEE',
    color_grey_300: '#E0E0E0',
    color_grey_400: '#BDBDBD',
    color_grey_500: '#9E9E9E',
    color_grey_600: '#757575',
    color_grey_700: '#616161',
    color_grey_800: '#424242',
    color_grey_900: '#212121',
    color_black_1000: '#000000',
    },

    listItemBox:{
      // backgroundColor:COLORS.listItem,
      backgroundColor:'#FFFFFF',
      margin:10,
      width:"2%",
      height: 250,
      flex:1,
      alignSelf:"center",
      borderRadius:15,
      padding: 15,


    },

    dollarIcon:{
      width: 20 ,
      height: 20,
      marginRight: 6
    },
    tinyLogo: {
      width: '100%',
      height: '100%',
      alignSelf: 'center'
  
    },

    roundIcon:{
      alignSelf: 'center',
      width: 70 ,
      height: 70,
      borderRadius: 70/2,
      // backgroundColor: COLORS.barColor,
      marginBottom: 10
    },

    circleView: {
      alignSelf: 'center',
      width: 25 ,
      height: 25,
      borderRadius: 25/2,
      // backgroundColor: COLORS.barColor,
      backgroundColor:'#38AB94',
      marginHorizontal: 2,
      alignItems: 'center',
      justifyContent: 'center'

    },

    enabled: {
      fontSize: 12,
      // fontFamily: 'Rubik-SemiBold',
      // color: COLORS.white,
    color:'white',
    fontFamily:'bold',
  
    },

    circleViewDisable:{
      alignSelf: 'center',
      width: 25 ,
      height: 25,
      borderRadius: 25/2,
      // backgroundColor: COLORS.color_grey_400,
      backgroundColor:'#EEEEEE',
      marginHorizontal: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },

  disabled: {
    fontSize: 12,
    // fontFamily: 'Rubik-SemiBold',
    // color: COLORS.color_grey_100
    color:'grey',
    // backgroundColor:'grey',
    fontFamily:'bold'

  },

  listItem:{
    backgroundColor:'#FFFFFF',
    margin:10,
    padding:10,
    width:"50%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:10,
    alignItems: 'stretch',
    height: 80,

    // borderColor: COLORS.barColor
  },

  bigLogo: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    alignSelf: 'center'

  },

  cardText: {
    color: 'black',
    // fontFamily: 'Rubik-Medium',
    fontSize: 25,
    alignSelf: 'center',

  },
  doctorDetail: {
    width: "100%",
    // backgroundColor: COLORS.white,
    backgroundColor:'green',
    height: '6%',
    marginTop: 0,
    flexDirection: 'row'
    
  },

  smallRoundedBlueRoundedNoMargin: {
    backgroundColor:"#38AB94",
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 20 ,
    shadowOffset : { width: 3, height: 13},
    borderRadius: 35,
    width: '40%',
    height: 45  ,
    alignItems: 'flex-end',
    justifyContent: 'center',

  },

  container: {
    flex: 1,
    backgroundColor: '#38AB94',
  },
  cardText30: {
    color: '#000000',
    fontSize: 30,
    alignSelf: 'center',
    // textDecorationLine: 'underline'
    fontFamily: 'Rubik-Medium'
  },

  cardView90:{
    width: "90%",
    height: "70%",
    backgroundColor: '#FFF',
    marginBottom: 0,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    alignItems: 'center'
  },

  subCardView:{
    backgroundColor:'#EEEEEE',
    margin: 15,
    width:"70%",
    height: "15%",
    alignSelf:"center",
    borderRadius:20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.1,
    elevation: 6,
    shadowRadius: 5 ,
    shadowOffset : { width: 1, height: 13},
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredText:{
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center'  ,
    fontFamily: "bold"

  },

  headingText:{
    fontSize: 30
  },

  smallRoundedBlueRounded: {
    backgroundColor: '#252726',
    // shadowColor: 'rgba(0, 0, 0, 0.2)',
    // shadowOpacity: 0.8,
    // elevation: 6,
    // shadowRadius: 20 ,
    // shadowOffset : { width: 3, height: 13},
    borderRadius: 25,
    width: '30%',
    height: 50  ,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'center'
  },
})