import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, ImageBackground,TouchableOpacity } from 'react-native'
const styles = StyleSheet.create({
    list: {
        height:180,
        width:180,
        borderWidth:1,
        backgroundColor:'white'
      },
      btn:{
        flex:1,
        flexDirection: 'row',
        width:360,
        flexWrap: 'wrap'
      },
      txt:{
          fontSize: 20,
          textAlign:'center'
      },
      img:{
          width:178,
          height:155
      }
    })
namePic={
      'likud':require('../../images/likud.jpeg'),
      'avoda':require('../../images/avoda.jpeg'),
      'kahol-lavan':require('../../images/kahol-lavan.jpeg'),
      'merez':require('../../images/merez.jpeg'),
      'kulanu':require('../../images/kulanu.jpeg'),
      'yamin-hadash':require('../../images/yamin-hadash.jpeg'),
      'israel-beitenu':require('../../images/israel-beitenu.jpeg'),
      'shas':require('../../images/shas.jpeg'),
      'yahadut-hatora':require('../../images/yahadut-hatora.jpeg'),
      'raam-taal':require('../../images/raam-taal.jpeg'),
      'balad':require('../../images/balad.jpeg'),
      'zehut':require('../../images/zehut.jpeg'),
      'gesher':require('../../images/gesher.jpeg'),
      'ihud-miflagot-hayamin':require('../../images/ihud-miflagot-hayamin.jpeg'),
      'magen':require('../../images/magen.jpeg')
};
class parties extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            parties:[],
        }
       this.vote=this.vote.bind(this)
    }
    componentDidMount(){
        fetch('https://isr-elections.herokuapp.com/api/parties')  
        .then(res => res.json())
        .then(data=>{
            this.setState({parties:data.parties })})
    }
    vote(parties) {
        fetch(`https://isr-elections.herokuapp.com/api/parties/vote/${parties}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          })
          .then(data=>console.log(data))
    }
    render()
    {
        return(
            <View style={styles.btn}>
                { this.state.parties.map((item) => (
                <View key={item.id} style={styles.list}>
                    <TouchableOpacity onPress={()=>this.vote(item.id)}>
                    <ImageBackground source={namePic[item.id]} style={styles.img}/>
                    <Text style={styles.txt}>{item.id}</Text>
                    </TouchableOpacity>
                </View>
                ))}
            </View>
        )
    }
}
export default parties
