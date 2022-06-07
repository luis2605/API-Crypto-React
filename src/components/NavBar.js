import React ,{useState} from 'react'
import styledComponents from 'styled-components'
import {FaBars,FaTimes} from 'react-icons/fa' 


function NavBar() {

   

    const [ showBar , setShowBar] =useState("false") 
    function ToggleMenu(){

      setShowBar(showBar => !showBar)
     console.log(showBar)

    
    }

    const show = {  right: showBar?  "-100%" : "0"}
    const showIcon = { display:showBar? "" : "none"}
    const iconShow = { display:showBar? "none" : ""}
    

  return (
    <Header>
        <Container>
            <h1>De<span>Fi</span></h1>
            
            <NavMenu style={show }  >
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </NavMenu>
           
            <BtnGroup>
                    <button> Connect Wallet</button>
                    <span onClick={ToggleMenu}  style={showIcon}><FaBars size={20} /></span>
                    <span  onClick={ToggleMenu} style={iconShow} ><FaTimes size={20}/></span>
            </BtnGroup>
        

        

        </Container>

    </Header>
  )
}

export default NavBar

const Header = styledComponents.div`
width:100%;
height:90px;
border-bottom:1px solid #eee;
background:#fff;
position:sticky;
top:0;
left:0;
z-index:2;



`
const Container =styledComponents.div`
width:100%;
display:flex;
align-content:center;
align-items:center;
justify-content:space-between;

h1{
    margin:.5em 0;
    padding:0 0 0 1em;
    span{
        color:var(--primary);
    }

}
`
const NavMenu=styledComponents.ul`
display:flex;
transition:.4s;



li{
    margin:0 .5em;
}

   position:absolute;
   right:-100%;
   top:90px;
   bottom:0;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   height:100vh;
   width:60vw;
   background:var(--bkg)
   

   


`
const BtnGroup =styledComponents.div`
display:flex;
align-items:center;
padding:0 1em;



span{
    z-index:11;
   @media(min-width:625px){
       display:none;
   }
}
button{
    margin 1.5em 2em 1em 0 ;
    padding 1em 2em;
    border:none;
    border-radius:25px 10px 25px 10px;
    background:var(--primary);
    color:#ffffff;
    box-shadow:var(--shadow-normal);
    transition:all ease 250ms;

    
@media(max-width:625px){
        display:none;
    }
&:hover{
    box-shadow:var(--shadow-hover);
    transform:scale(1.2);
}





`

