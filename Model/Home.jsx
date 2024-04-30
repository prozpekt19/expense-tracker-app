import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import userimg from "../assets/user.jpg";
import bell from "../assets/bell.png";
import send from "../assets/send.png";
import rec from "../assets/rec.png";
import menuicon from "../assets/menu.png";
import food from "../assets/burger.png";
import a1 from "../assets/avatar/a1.png";
import a2 from "../assets/avatar/a2.png";
import a3 from "../assets/avatar/a3.png";
import a4 from "../assets/avatar/a4.png";
import a5 from "../assets/avatar/a5.png";
import grocery from "../assets/transactions/grocery.png"
import phone from "../assets/transactions/phone.png"
import fashion from "../assets/transactions/fashion.png"
import pizza from "../assets/transactions/pizza.png"
import { useNavigation } from "@react-navigation/native";
import BottomNav from "./BottomNav";
import RecSpent from "./RecSpent";
import SpentRec from "./SpentRec";




const Home = () => {
  const [balance, setBalance] = useState(1000);
  const [balanceFloat, setBalanceFloat] = useState("00");
  //const [balanceNoFloat, setBalancebalanceNoFloat] = useState("1000");
  const navigation=useNavigation();

  const TopBtn = (props)=> {
    const navigation=useNavigation();
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('SpentRec')}>
      <View style={styles.TopBtn}>
        <View style={styles.IconRound}>
        <Image style={styles.SendImg} source={props.imageSource} />

        </View>
        <Text style={styles.SendTitle}>{props.name}</Text>
      </View>
      </TouchableOpacity>
    );
  };

  const TopBtn1 = (props)=> {
    const navigation=useNavigation();
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('RecSpent')}>
      <View style={styles.TopBtn}>
        <View style={styles.IconRound}>
        <Image style={styles.SendImg} source={props.imageSource} />

        </View>
        <Text style={styles.SendTitle}>{props.name}</Text>
      </View>
      </TouchableOpacity>
    );
  };

  const Sender = (props)=> {
    const navigation = useNavigation();

    return (
      <View style={{alignItems:'center',gap:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Send')} style={{alignItems:'center',gap:5}}>
        <Image style={styles.SenderImg} source={props.senderImage} />
              

        <Text style={styles.SenderName}>{props.senderName}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Transaction = (props)=> {
    return (
        <View style={{width:'100%'}}>
      <View style={{alignItems:'center',width:'100%',gap:5,flexDirection:'row',justifyContent:'space-between'}}>
       
        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
            <View style={styles.TransactionIconContainer}>
        <Image style={styles.TransactionIcon} source={props.TransactionIcon} />
        </View>

        <View>
        <Text style={styles.TransactionTitle}>{props.TransactionTitle}</Text>
        <View style={{flexDirection:'row', gap:5}}>
        <Text style={styles.TransactionDate}>{props.TransactionDate}</Text>
        <Text style={styles.TransactionTime}>• {props.TransactionTime}</Text>

        </View>
        
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={[styles.TransactionAmount,{color:'blue'}]}>₹</Text>
        <Text style={styles.TransactionAmount}>{props.TransactionAmount}</Text>

        </View>
      </View>
      <View style={styles.TransactionLine}></View>
        </View>
    );
  };

  const BottomBar = (props) => {
    return (
      <View style={styles.BottomBar}>
        <View style={styles.BottomBarSecondery}></View>
      </View>
    );
  };

  return (
    <View style={styles.home}>
         <Text style={styles.PaisaTitle}>Paisa</Text>
         <Text style={styles.SubPaisa}>EXPENSE TRACKER</Text>
          <ScrollView
    style={{ marginTop:0, borderRadius: 20 ,borderBottomLeftRadius:40,borderBottomRightRadius:40, height: "100%",paddingBottom:0 }}
    showsVerticalScrollIndicator={false} fadingEdgeLength={60}
  >
      <View style={styles.TopBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
          <Image style={styles.UserImg} source={userimg} />
          </TouchableOpacity>
          <View>
            <Text style={styles.GreetMsg}>Welcome ,</Text>
            <Text style={styles.UserName}>Jishnu Devadas </Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style={styles.BellContiner}>
          <Image style={styles.BellImg} source={bell} />
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.BalanceView}>
        <Text style={styles.BalanceTitle}>Total Balance</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.Balance}>₹{balance}.</Text>
          <Text style={[styles.Balance, { color: "#6E6E6E" }]}>
            {balanceFloat}
          </Text>
        </View>
      </View>
      <View style = {{flexDirection:'row', gap:10}}>
      <TouchableOpacity>
      <TopBtn name={"Spent"} imageSource={send}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <TopBtn1 name={"Recieved"} imageSource={rec} onPress={RecSpent}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('More')}>
      <View style={styles.MenuContainer}>
      <Image style={styles.SendImg} source={menuicon} />
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.QuickSend}>
        <Text style={styles.QuickSendTitle}> 
            People
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Sender senderName ="Jarin" senderImage={a1}/>
        <Sender senderName ="Abhisheikh"  senderImage={a2}/>
        <Sender senderName ="Ageto" senderImage={a3}/>
        <Sender senderName ="Fadil" senderImage={a4}/>
        <Sender senderName ="Binduja"senderImage={a5}/>

       
        
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.transcontainer}       scrollEnabled={false}>
      <View style={styles.content}>
      <View style={styles.RecentTransaction}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
      <Text style={styles.RecentTransactionTitle} >
        Recent Spending
      </Text>
      <Text style={styles.SeeAll} >
      See all
      </Text>
      </View>
      <View style={styles.TransactionCol}>
      <Transaction TransactionTitle ="Jyothi Canteen" 
      TransactionDate='Tue,25 May'
      TransactionTime='4:40 PM'
      TransactionIcon={grocery}
      TransactionAmount="120.20"/>
       <Transaction TransactionTitle ="Mobile Shop" 
      TransactionDate='Mon,18 May'
      TransactionTime='12:10 PM'
      TransactionIcon={phone}
      TransactionAmount="76.20"/> 
      <Transaction TransactionTitle ="Kalyan Silks" 
      TransactionDate='Wed,12 May'
      TransactionTime='2:49 AM'
      TransactionIcon={fashion}
      TransactionAmount="180.90"/> 
      <Transaction TransactionTitle ="Pizza Hut" 
      TransactionDate='Sun,5 January'
      TransactionIcon={pizza}
      TransactionTime='1:19 AM'
      TransactionAmount="13.00"/>
        <Transaction TransactionTitle ="Dominos" 
      TransactionDate='Sun,5 January'
      TransactionIcon={pizza}
      TransactionTime='1:19 AM'
      TransactionAmount="13.00"/>
      </View>
      </View>

<View >
      
      </View>
      </View>
    </ScrollView>   
</ScrollView>
<BottomBar/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#111111",
    width: "100%",
    height: "100%",
    paddingTop: 50,

  },

  BottomBar: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#111111",
  },
  BottomBarSecondery: {
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffff",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius:22,
    borderTopLeftRadius:22
  },

  TopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  UserImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    marginTop:-17
  },
  GreetMsg: {
    color: "#767675",
    fontSize: 12,
    bottom:25,
    paddingTop:35
  },
  SubPaisa: {
    color: "#767675",
    fontSize: 12,
    bottom:25,
    paddingTop:10,
    left:1,
  },
  UserName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    bottom:25
  },
  BellImg: {
    width: 24,
    height: 24,
  },
  BellContiner: {
    width: 40,
    height: 40,
    backgroundColor: "#3C3C3C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  BalanceView: {
    marginVertical: 20,
    marginTop:5,
  },
  BalanceTitle: {
    color: "#767675",
    fontSize: 16,
    marginBottom: 2,
    paddingBottom:0,
  },
  PaisaTitle: {
    color: "white",
    fontSize: 35,
    marginTop:-10,
    marginBottom:-10,
    bottom:20,
    borderRadius:10,
    fontWeight:"800"
  },
  Balance: {
    color: "#fff",
    fontSize: 46,
    fontWeight: "500",
  },
  TopBtn: {
    Width:110,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 30,
    alignItems:'center',
    paddingHorizontal:4,
    flexDirection:'row',
    
  },
  IconRound:{
    backgroundColor:'darkblue',
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center'

  },
    SendImg:{
        width: 20,
    height: 20,
    },
    SendTitle:{
        color:'#fff',
        fontSize:16,
        fontWeight:"600",
       marginHorizontal:20

    },
    MenuContainer:{
        width: 39,
    height: 39,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5D5D5D',
    borderRadius:30,
    borderWidth:1,
    borderColor:'#fff'
    },
    QuickSend:{
        width:'100%',
        height:160,
        backgroundColor:'#292929',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        marginTop:20,
        paddingTop:20,
        paddingHorizontal:15,
        marginBottom:-20,

    },
    QuickSendTitle:{
        fontSize:15,
        fontWeight:"500",
        color:'#fff',
        opacity:0.8,
        marginBottom:15
    },
    SenderImg:{
        width:45,
        height:45,
        borderRadius:40
    },
    SenderName:{
        fontSize:12,
        fontWeight:"500",
        color:'#fff',
        opacity:0.8,
        marginBottom:15
    },
    RecentTransaction:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-start'
    },


    transcontainer: {
        flexGrow: 1,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'flex-start',
        paddingBottom:70     
      },
      content: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingHorizontal: 15,
      },
      RecentTransactionTitle:{
        fontSize:15,
        fontWeight:"600",
        color:'#707070',
      },
      SeeAll:{
        fontSize:13,
        color:'#707070',
        paddingRight:5,
      },
      TransactionCol:{
        alignItems:'flex-start',
        paddingTop:30,
        gap:10,

      },
      TransactionTitle:{
        fontSize:16,
        fontWeight:"600"
      },
        TransactionDate:{
            fontSize:11,
            color:'#707070'

        },
        TransactionTime:{
            fontSize:11,
            color:'#707070'

        },
        TransactionAmount:{
            fontSize:18,
            fontWeight:"600"
        },
        TransactionLine:{
            width:'100%',
            backgroundColor:'#707070',
            height:1,
            marginTop:10,
            opacity:0.1
        },
        TransactionIconContainer:{
            width:40,
            height:40,
            backgroundColor:'#D0D1CF',
      borderRadius:40,
            justifyContent:'center',
            alignItems:'center'
        },
        TransactionIcon:{
            width:20,
            height:20,
        }
    });