import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Button, TouchableOpacity,ScrollView} from 'react-native'
import Parties from './parties'
import Status from './status'

const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
          marginTop:120
        },
    list: {
        flexDirection: 'row',
        height:80,
        width:360,
        borderWidth:1,
        backgroundColor: 'pink',
        alignItems:'center',
        paddingLeft:30,
        position:'absolute',
        top:40
      },
      txt:{
          fontSize:25,
          fontFamily:'Thonburi',
          marginLeft:10
      },
      btn:{
          borderRadius:10,
          backgroundColor: '#00aeef',
          width:60,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          marginLeft:30
      },
      txtBtn:{
          color:'white'
      }
})

class header extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            btnName:false

        }
        this.handleNameButtonClick=this.handleNameButtonClick.bind(this)
        this.renderStatus=this.renderStatus.bind(this)
        this.renderVote=this.renderVote.bind(this)
    }
    handleNameButtonClick()
    {
        this.setState({btnName:!this.state.btnName})
    }
    renderVote()
    {
        return(
                <ScrollView style={{ flexGrow:1 }}>
                <Parties></Parties>
                </ScrollView>
        )
    }
    renderStatus(){
        return(
            <Status></Status>
        )
    }
    render(){
        const title=this.state.btnName? 'vote':'status'
        return(
            <View>
            <View style={styles.list}>
                <Text style={styles.txt}>בחירות ישראל 2019</Text>
                <View >
                <TouchableOpacity style={styles.btn}
                onPress={this.handleNameButtonClick}
                >
                    <Text style={styles.txtBtn}> {title} </Text>
                </TouchableOpacity>    
                </View>
                </View>
                <View style={styles.container}>
                 {this.state.btnName? this.renderStatus() :this.renderVote()}
                 </View>
            </View>
        )
    }
}
export default header