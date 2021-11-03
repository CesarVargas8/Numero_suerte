import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

interface Props{
    text: String;
}
const Component = (props: Props) => {
    const {text} = props;
    return (
        <TouchableOpacity style= {styles.Button}>
        <Text style={styles.ButtonText}>{text}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Button:{
        backgroundColor:'#17202A',
        padding: 10,
        borderRadius: 10,
        width: 200,
      },
      ButtonText:{
        color: '#E5E8E8',
        fontSize: 15,
        textAlign: 'center',
      },
});
export default Component;