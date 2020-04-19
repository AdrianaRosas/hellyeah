import React from 'react';
import ReactDOM from 'react-dom';

import Hellogo from '../img/LOGOwswds.png';

class Header extends React.Component {
    render(
    ) {
        return (
            <div className="header-cointainer">
                <div className="header">
                    <img src={Hellogo} className="logo"/>
                </div>
                 <div className="menu">
            <i>
              <span></span>
              <span></span>
              <span></span>
            </i>
            <button>
              <a href="http://www.dribbble.com/alexcoven" target="_blank"></a>
              <a href="http://www.instagram.com/alcoven" target="_blank"></a>
              <a href="http://www.alexcoven.com/alcoven" target="_blank"></a>
            </button>
          </div>
          
              <style jsx>{`
              div,
            .header-container{
                width: 100%;
                // position: relative;
                border: 3px solid pink;
                // display: flex;
                background-color: #000;
            }
              .header{
                  width: 80%;
                  height: 100%;
                  background: yellow;
              }
              .header .logo{
                  width: 20%;
                  margin-left: 5%;
              }
            
              .menu {
                color:red;
                border: 0px;
                position: absolute;
                top: -60%;
                left: 65%;
                bottom: 0;
                right: 0;
                background: #000;
                width: 400px;
                height: 200px;
                margin: auto;
              }

              .menu a.branding img {
                width:30px;
                position:absolute;
                bottom:20px;
                right:20px;
                -webkit-filter: grayscale(100%)brightness(3); 
                filter: grayscale(100%)brightness(3);
              }

              .menu i {
                position:absolute;
                top:77px;
                left:177px;
                z-index:2;
                -webkit-transition: all 400ms ease-in-out;
                        transition: all 400ms ease-in-out;
              }

              .menu img {
                width:30px;
                position:absolute;
                bottom:20px;
                right:20px;
              }

              .menu:hover i {
                top:0px;
                -webkit-transition: all 800ms ease-in-out;
                        transition: all 800ms ease-in-out;
                cursor:pointer;
              }

              .menu:hover a {
                background-size:40%;
              }
              
              .menu:hover i span {
                 background:red;
                 top:10px;
                width:15px;
                margin-left:3px;
                 -webkit-transition: all 1s ease-in-out,top 0.5s ease-in-out,margin 0.5s ease-in-out;
                         transition: all 1s ease-in-out,top 0.5s ease-in-out,margin 0.5s ease-in-out;
                opacity: 0;
              }

              .menu:hover i span:first-child {
                -webkit-transform:rotate(135deg);
                    -ms-transform:rotate(135deg);
                        transform:rotate(135deg);
               opacity: 0;
             }
             
             .menu:hover i span:nth-child(2) {
               width:0px;
               background:#000;
               -webkit-transition: all 1ms ease-in-out;
                       transition: all 1ms ease-in-out;
               opacity: 0;
             }
             
             .menu:hover i span:last-child {
                -webkit-transform:rotate(-135deg);
                    -ms-transform:rotate(-135deg);
                        transform:rotate(-135deg);
             }

             .menu span {
                height:3px;
                width:20px;
                background:red;
                display:block;
                margin:4px 0;
                position:absolute;
              }
              
              .menu span:nth-child(2) {
                top:6px;
              }
              
              .menu span:last-child {
                top:12px;
              }
              
              .menu button {
                border: 0px;
                background: #000;
                width: 400px;
                height: 200px;
                -webkit-filter: blur(20px) contrast(30);
                        filter: blur(20px) contrast(30);
                -webkit-transition: all 300ms ease-in-out;
                        transition: all 300ms ease-in-out;
              }

              .menu:hover button {
                -webkit-filter: blur(0) contrast(1);
                        filter: blur(0) contrast(1);
                -webkit-transition: all 1s ease-in-out;
                        transition: all 1s ease-in-out;
              }
              
              .menu button:focus {
                outline: 0px;
              }

              .menu a {
                background: url("https://image.flaticon.com/icons/svg/345/345835.svg") white no-repeat center center;
                background-size:0%;
                width: 75px;
                height: 75px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -50px;
                margin-left: -50px;
                border-radius: 100%;
                -webkit-transition: all 300ms ease-in-out;
                transition: all 300ms ease-in-out;
                color:red;
                text-decoration:none;
            }
            
            .menu a:nth-child(1):hover {
                background: url("https://image.flaticon.com/icons/svg/1034/1034189.svg") white no-repeat center center;
                background-size:50%;
            }
            
            .menu a:nth-child(3) {
                background: url("https://image.flaticon.com/icons/svg/12/12402.svg") white no-repeat center center;
                background-size:0%;
            }
            
            .menu a:nth-child(3):hover {
    
                background: url("https://image.flaticon.com/icons/svg/61/61836.svg") white no-repeat center center;
                background-size:50%;
              }
              
              .menu a:nth-child(2) {
                background: url("https://image.flaticon.com/icons/svg/1137/1137005.svg") white no-repeat center center;
                background-size:0%;
              }
              
              .menu a:nth-child(2):hover {
                background: url("https://image.flaticon.com/icons/svg/1277/1277509.svg") white no-repeat center center;
                background-size:50%;
              }
              
              
              
              .menu a.logo {
                background:transparent;
                width: auto;
                height: auto;
                position: inherit;
              }
              
              .menu a.logo:after {
                display:none;
              }
              
              .menu a:after {
                content: '';
                color: red;
                position: absolute;
                width: 60px;
                bottom: 0px;
                text-align: center;
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 2px;
                opacity: 0;
                left:10px;
                -webkit-transition: all 100ms ease-in-out;
                        transition: all 100ms ease-in-out;
                -webkit-filter: blur(20px) contrast(30);
                        filter: blur(20px) contrast(30);
              }
              
              .menu a:hover:after{
                opacity:1;
                bottom: -25px;
                -webkit-transition: all 800ms ease-in-out;
                        transition: all 800ms ease-in-out;
                -webkit-filter: blur(0px) contrast(1);
                        filter: blur(0px) contrast(1);
              }
              
              .menu a:first-child:hover:after{
                content:'contact';
              }
              
              .menu a:nth-child(2):hover:after{
                content:'about';
              }
              
              .menu a:last-child:hover:after {
                content:'home';
              }

              .menu:hover a:first-child {
                -webkit-transform: translateX(85px);
                    -ms-transform: translateX(85px);
                        transform: translateX(85px);
              }
              
              .menu:hover a:last-child {
                -webkit-transform: translateX(-85px);
                    -ms-transform: translateX(-85px);
                        transform: translateX(-85px);
                /*transition-delay:200ms;*/
              }
              
              
             



              



            
         `}</style>
            </div>
        )
    }
}
   
export default Header;