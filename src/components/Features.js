import React ,{useState,useEffect} from 'react'
import styledComponents from 'styled-components'
import {FiArrowUpRight , FiArrowDown} from 'react-icons/fi'
import axios from 'axios'




function Features() {

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false';

 //const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=1&sparkline=false';
  
 


 


    const [data ,setData] = useState(null)

    useEffect(()=> {
        axios.get(url).then((response)=>{
            setData(response.data)
        }).catch((error)=>{
            console.log(error)
        })

        
    }, [] )

   
    if(!data) return null

    const dataInfo = (data.map(item =>{
return(

    <Right>
        <Top>
            <img src={item.image} alt=''/>
        </Top>
        <Info>
            <h5> {item.name}</h5>
        
            <p>{item.current_price}</p>
            <span> {Math.sign(item.price_change_percentage_24h)===1? <FiArrowUpRight stroke='green'/> : <FiArrowDown stroke='red'/>}   {item.price_change_percentage_24h.toFixed(2)}%</span>
        </Info>

    </Right>
)

    } ))

    

  return (
    <Container>

        <Left>
            <h2>Explore top Crypto's Like Bitcoin, Ethereum , and Dogecoin</h2>
            <p  >See all available assets: Cryptocurrency and NFT's</p>
            <BtnSeeMore > See More Coins</BtnSeeMore>


        </Left>
        <RightContainer>

        {dataInfo}
        </RightContainer>
      

    </Container>
  )
}

export default Features

const Container=styledComponents.div`
clip-path: polygon(0 97%, 0 0, 100% 2%, 100% 100%);
background:var(--bkg);


`

const Left =styledComponents.div`
margin:5em 2em;
display:flex;
flex-direction:column;
align-items:center; 

p{
    color:var(--ftn-gray);
    margin-top:1em;
}
`
const BtnSeeMore =styledComponents.button`

    margin :2.5em 2em 1em 0 ;
    padding 1.5em 6em;
    border:none;
    border-radius:25px 10px 25px 10px;
    background:var(--primary);
    color:#ffffff;
    box-shadow:var(--shadow-normal);
    transition:all ease 250ms;

    

&:hover{
    box-shadow:var(--shadow-hover);
    transform:scale(1.2);
}



`
const RightContainer=styledComponents.div`
display:flex;
margin:7em 0.5em;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;`
const Right = styledComponents.div`

display:flex;
margin:1em 1.5em;
padding:.5em 1em;
flex-direction:column;
align-items:center;
border: 1px solid black;
border-radius:25px 10px 25px 10px;
box-shadow: 10px 10px 29px -8px rgba(0,0,0,0.73);
width:30vw;
height:20vh;

&:hover{
    box-shadow:var(--shadow-hover);
    transform:scale(1.1);
}

img{
    width:5vw;;

    @media(max-width:767px){
        width:10vw;
    }
}



`
const Top =styledComponents.div``

const Info=styledComponents.div`
text-align:center;


`



