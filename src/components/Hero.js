import React, {useState} from 'react'
import styledComponents from 'styled-components'


function Hero() {
  return (
    <Element>
        <Container>
               {/* Left-side   */}
              <Left>
                  <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                  <h1>Invest in Cryptocurrency with your IRA</h1>
                  <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <InputContainer>
                      <input type="email" placeholder='Enter your email'/>
                      <Btn>Learn more</Btn>
                    
                    </InputContainer>
                

              </Left>




          {/* Right-side   */}
                <Right>
                    <ImageContainer>
                        <img src="./images/hero-img.png" alt=''/>
                    </ImageContainer>

                </Right>



        </Container>
    </Element>
  )
}

export default Hero

const Element=styledComponents.div`
z-index:1;


`
const Container=styledComponents.div`
display:grid;
grid-template-columns:repeat(2,1fr);
margin:4rem auto;
justify-content:center;
align-items:center;
padding:1rem;

@media(max-width:625px){
   display:flex;
flex-direction:column-reverse;
}

`
const Right=styledComponents.div`
width:100%;



`
const ImageContainer=styledComponents.div`
width:100%;
img{
    width:80%;
    margin:0 1em;
}


`
const Left=styledComponents.div`
display:flex;
flex-direction:column;

p{
    margin:1.5em 2em;
    font-size:1.4rem;
    text-align:justify;
    color:var(--ftn-gray);
    text-shadow:2px 2px 2px rgba(206,89,55,10%);
    

    @media(max-width:625px){
        font-size:1.1rem;
    }
  
}

h1{
    margin:0 1em;
    text-align:center;

    @media(max-width:768px){
        font-size:1.3rem;
        text-align:right;
    }
}



`
const InputContainer =styledComponents.div`
 margin:0 2em;
 display:flex;
 flex-direction:column;
 align-items:center;
input{

    border-radius:25px 10px 25px 10px;
    margin:1em .5em;
    padding 1em 2em;
    width:70%;
    
    
  
}
`
const Btn =styledComponents.button`

    margin:1em .5em 2em .5em;
    width:70%;
    padding 1em 2em;
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
