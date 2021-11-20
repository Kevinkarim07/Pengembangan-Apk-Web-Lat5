import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';
import Home from './views/Home/Home.js';
import About from './views/About/About.js';
import Help from './views/Help/Help.js';
import Profile from './views/Profile/Profile.js';

import {browserRouter as Router, Route, Link}
from 'react-router-dom'

class app extends component {
//router
render(){
    return(
        <Router>
            <div>
                <Link to="/Home">Home</Link>
                <Link to="/About">Home</Link>
                <Link to="/Help">Home</Link>
                <Link to="/Profile/Budi">Budi</Link>
                <Link to="/Profile/Ali">Ali</Link>
                <Link to="/Profile/Susi">SUSI</Link>

                <Route path="/" exact component={Home}></Route>
                <Route path="/home" component={Home}></Route>

                <Route path="/About" exact component={About}></Route>
                <Route path="/Help" exact component={Help}></Route>
                <Route path="/Profile/:nama" exact component={Profile}></Route>
            </div>
        </Router>
    )
}

//Multidimensional Array
//function
// constructor(){
//     super();

//     this.state = {
//         mahasiswa : [],
//         nama : null,
//         nim : null,
//         nilai : null
//     }
// }

// setvalueState(event){
//     this.setvalueState({
//         [event.target.name]: event.target.value
//     })
// }


// addData(){
//     var data_tmp = this.state.mahasiswa;
//     data_tmp.push({nim : this.state.nim, nama : this.state.nama, nilai : this.state.nilai});
//     this.setvalueState({
//         mahasiswa : data_tmp
//     })
// }

// deleteData(index){
//     var data_tmp = this.state.mahasiswa;
//     data_tmp.splice(index,1);
//     this.setvalueState({
//         mahasiswa : data_tmp
//     })
// }

// render(){
//     return(
//         <div classname="container">
//             <div classname="form-container">
//                 <div classname="form-group">
//                     <label>nim:</label>
//                     <input type="text" name="nim" value={this.state.nim} onchange={this.setvalueState.bin(this)} classname="form-control"></input>
//                 </div>
//                 <div classname="form-group">
//                     <label>Nama:</label>
//                     <input type="text" name="nama" value={this.state.nama} onchange={this.setvalueState.bin(this)} classname="form-control"></input>
//                 </div>
//                 <div classname="form-group">
//                     <label>Nilai:</label>
//                     <input type="number" min="0" name="nilai" value={this.state.nilai} onchange={this.setvalueState.bin(this)} classname="form-control"></input>
//                 </div>
//                 <button onclick={this.addData.bind(this)} type="button" classname="btn btn-primary">
//                     Submit
//                 </button>
//             </div>
//             <br />
//             {/* {cetak data mahasiswa ke tabek} */}
//             <table classname="table">
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>Nim</th>
//                         <th>Nama</th>
//                         <th>Nilai</th>
//                         <th>#</th>
//                     </tr>
//                     <tbody>
//                         {this.state.mahasiswa.map((mhs, index)=>(
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{mhs.nim}</td>
//                                 <td>{mhs.nama}</td>
//                                 <td>{mhs.nilai}</td>
//                                 <td>
//                                     <button onclick={this.deleteData.bind(this,index)} classname="btn btn-danger btn-sm">
//                                         Hapus
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </thead>
//             </table>
//         </div>
//     )
// }

// render(){
//  var data = [
//      {nama : "Budi", nilai : 80},
//      {nama : "Ali", nilai : 85},
//      {nama : "Susi", nilai : 87}
//  ]
//  return(
//      <table className="table">
//          <thead>
//          <tr>
//              <th>No.</th>
//              <th>Nama</th>
//              <th>Nilai</th>
//          </tr>
//          </thead>
//          <tbody>
//              {data.map((item,index)=>(
//                  <tr key={index}>
//                      <td>{index+1}</td>
//                      <td>{item.nama}</td>
//                      <td>{item.nilai}</td>
//                  </tr>
//              ))}
//          </tbody>
//      </table>
//  )
// }
//ASSOCIIATIVE/OBJECT ARRAY
// render(){
//     var mahasiswa = {
//         nama : "Susi",
//         nim : "152110001",
//         email : "Susi@mikroskil.ac.id"
//     }
//     return(
//         <table>
//             <tr>
//                 <td>Nim</td>
//                 <td>:</td>
//                 <td>{mahasiswa.nim}</td>
//             </tr>
//             <tr>
//                 <td>Nama</td>
//                 <td>:</td>
//                 <td>{mahasiswa.nama}</td>
//             </tr>
//             <tr>
//                 <td>Email</td>
//                 <td>:</td>
//                 <td>{mahasiswa.email}</td>
//             </tr>
//         </table>
//     )
// }
// array
//     render(){
//         var angka = [1,2,3]
//         var nama = ["Budi","Ali","Susi"]
//         var Campuran = ["Budi",1, "Ali", 2, "Susi", 3]
    

//     return(
//         <div>
//             isi array angka :
//             <ul>
//                 {angka.map((item,index)=>(
//                     <li>Indeks ke - {index} :  {item}</li>
//                 ))}

//             </ul>

//             isi array nama :
//             <ul>
//             {nama.map((item,index)=>(
//                     <li>Indeks ke - {index} :  {item}</li>
//                 ))}

//             </ul>

//             isi array Campuran :
//             <ul>
//             {Campuran.map((item,index)=>(
//                     <li>Indeks ke - {index} :  {item}</li>
//                 ))}

//             </ul>
//         </div>
//     ); 
//                 }  
 }

export default App;
