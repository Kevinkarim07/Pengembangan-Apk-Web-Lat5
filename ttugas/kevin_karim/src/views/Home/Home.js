import React from 'react';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';

export default class Home extends React.Component{
constructor(){
    super();
    this.state = {
        nama : '',
        status : ''
    }
}

render(){
    return(
        <div>
            <Header />
            
            <Input getValues={(name, value)=> this.setState({[name] : value})} />

            <Card name={this.state.nama}>
                <p>{this.state.status}</p>
            </Card>
        </div>
    );
}
}