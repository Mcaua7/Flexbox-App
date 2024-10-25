import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
container:{
    borderWidth: 10,
    borderColor: 'rgb(67, 63, 62)',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    marginTop: 20
},
leftView:{
    flex: 1,
    flexDirection: 'column-reverse',
    borderColor: 'rgb(67, 63, 62)',
    borderTopWidth: 4,
    borderRightWidth: 3,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
},

boxBottomLeft:{
    flex: 2,
    backgroundColor: "rgb(82, 113, 255)",
    borderTopWidth: 6,
    borderTopColor: "rgb(67, 63, 62)",
},
boxMiddleLeft:{
    flex:1,
    backgroundColor: "rgb(56, 182, 255)",
    borderTopWidth: 6,
    borderTopColor: "rgb(67, 63, 62)",
},
boxTopLeft:{
    flex: 1,
    backgroundColor: 'rgb(143, 107, 229)'
},

rightView:{
    flex: 1,
    flexDirection: 'column-reverse',
    borderColor: 'rgb(67, 63, 62)',
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 3,
},
boxBottomRight:{
    flex: 1,
    backgroundColor: 'rgb(97, 43, 197)',
    borderTopWidth: 6,
    borderTopColor: 'rgb(67, 63, 62)',
},
boxMiddleRight:{
    flex: 2,
    flexDirection: 'row-reverse',
    backgroundColor: 'rgb(56, 182, 255)',
    justifyContent:'space-around',
    alignItems: 'center',
    alignContent: 'flex-start',
    borderTopWidth: 6,
    borderTopColor:'rgb(67, 63, 62)',
    
},
boxTopRight:{
    flex: 1,
    backgroundColor: 'rgb(147, 199, 255)',
},

textStyle:{
    transform: [{rotate: '270deg'}],
    fontSize: 60,
    letterSpacing: 30,
    fontWeight: 'bold',
    width: '100%',
}



});

export default styles