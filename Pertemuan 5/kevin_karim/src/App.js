import React,{ Component } from "react";
import './App.css';
import './css/bootstrap.min.css';
import logo from './logo.svg';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';


class App extends Component{
    constructor(){
      super();
      // deklarasi View 
      this.state={
        view :'home'
      }
    }
    render(){
      
      //functional component View untuk mengatur Component yang tampil 
      // deklrasi paling cepat 
      const View = ()=>{
        if(this.state.view=='home')
             return <Home name="Eden Hazard"/>
        else if(this.state.view=='about')
            return <About/>
        else if(this.state.view=='help')
            return <Help/>
      }
      return(
          //pembuatan navbar
          <div>
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a onClick={()=> this.setState({view :'home'})} className="nav-link" href="#">Home</a>
                  </li>
  
                  <li className="nav-item">
                    <a onClick={()=> this.setState({view :'about'})} className="nav-link" href="#">About</a>
                  </li>
  
                  <li className="nav-item">
                    <a onClick={()=> this.setState({view :'help'})} className="nav-link" href="#">Help</a>
                  </li>
                </ul>
              </nav>
  
              <View/>
          </div>
        )
    }
    
  }
//Props
// function Message(props){
//     return <p>Hello {props.name},</p>;
// }

// class App extends Component{

//     render(){
//         return(
//             <div>
//                 <Message name="Ulrich" />
//                 <Home name="Muhammad Salah"/>
//             </div>
//         )
//     }
// }

//class component
// function Message(){
//     return "pesan didalam Component";
// }

// class App extends Component {
//     render(){
//         return(
//             <div>
//                 <Message />
//                 <Home />
//             </div>
//         )
//     }
// }

//functional components
// function Message(){
//     return <p>Hello from message component</p>
// }

// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Message />
//             </div>
//         )
//     }
// }

//Function
// function SayHello(){
//     return "Hello World";
// }
// class app extends component{
//     bilangHalo(){
//         return "Halo Dunia";
//     }


// render(){
//     return(
//         <>
//         <p>sayhello : <b>{SayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//         </>
//     )
// }
// }

export default App