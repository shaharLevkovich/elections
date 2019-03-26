import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Image } from 'react-native'

let voteArr=[]
let top5=[]
let count=0
let sum=0
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
const styles = StyleSheet.create({
      btn:{
        flex:1,
        width:360
      },
      img:{
          height:50,
          width:50,
          marginRight:10
      },
      party:{
        flexDirection: 'row',
        marginTop:20,
        marginLeft:10
      },
      txt:{
          fontSize:20
      }
})
class status extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            votes:[]
        }
        this.insertArray=this.insertArray.bind(this)
        this.fetchData=this.fetchData.bind(this)
    }
    fetchData()
    {
        console.log('hello')
        fetch('https://isr-elections.herokuapp.com/api/parties/poll-status')  
        .then(res => res.json())
        .then(data=>{this.setState({votes:data})})
        .catch(err=>{console.log(err)})
        this.insertArray()
        count++
    }
    insertArray()
    {
        for(party in this.state.votes)
        {
            sum+=this.state.votes[party].currentVotes
            voteArr.push([party, this.state.votes[party].currentVotes])
        }
        voteArr.sort(function(a,b){
            return parseInt(b[1])-parseInt(a[1]);
           })
           if(count===1)
           {
            for(let i=0;i<5;i++)
            {
                top5.push([voteArr[i]])
            }
           }
    }
    render()
    {
        if(count<2) this.fetchData()
        return(
            <View style={styles.btn}>
                {top5[0]===undefined?
                    null:<View>
                        <View style={styles.party}>
                            <Image source={namePic[(top5[0][0][0])]} style={styles.img}></Image>
                            <View>
                            <Text style={styles.txt}>Party {top5[0][0][0]}</Text>
                            <Text style={styles.txt}>Votes: {parseInt((top5[0][0][1])/sum*100)}%</Text>
                            </View>
                        </View>
                        <View style={styles.party}>
                            <Image source={namePic[(top5[1][0][0])]} style={styles.img}></Image>
                            <View>
                            <Text style={styles.txt}>Party {top5[1][0][0]}</Text>
                            <Text style={styles.txt}>Votes: {parseInt((top5[1][0][1])/sum*100)}%</Text>
                            </View>
                        </View>
                        <View style={styles.party}>
                            <Image source={namePic[(top5[2][0][0])]} style={styles.img}></Image>
                            <View>
                            <Text style={styles.txt}>Party {top5[2][0][0]}</Text>
                            <Text style={styles.txt}>Votes: {parseInt((top5[2][0][1])/sum*100)}%</Text>
                            </View>
                        </View>
                        <View style={styles.party}>
                            <Image source={namePic[(top5[3][0][0])]} style={styles.img}></Image>
                            <View>
                            <Text style={styles.txt}>Party {top5[3][0][0]}</Text>
                            <Text style={styles.txt}>Votes: {parseInt((top5[3][0][1])/sum*100)}%</Text>
                            </View>
                        </View>
                        <View style={styles.party}>
                            <Image source={namePic[(top5[4][0][0])]} style={styles.img}></Image>
                            <View>
                            <Text style={styles.txt}>Party {top5[4][0][0]}</Text>
                            <Text style={styles.txt}>Votes: {parseInt((top5[4][0][1])/sum*100)}%</Text>
                            </View>
                        </View>
                    </View>}
            </View>
        )
    }
}
export default status