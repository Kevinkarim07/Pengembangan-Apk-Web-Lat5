import React, {Component} from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

export default class Main extends Component {
  // deklrasi View  
  constructor() {
      super();
      this.state = {
        your_name: "",
        status: "",
      };
    }
    render() {  
      return (
        <React.Fragment>
          <h2
            style={{
              width: "550px",
              margin: "auto",
              marginTop: "10px",
              textAlign: "center",
              color: "#4d90fe",
            }}
          >
            Sistem Informasi E-biz
          </h2>
          <Card>
            <div>
              <Input
                getValues={(name, value) => this.setState({ [name]: value })}
              />
            </div>
          </Card>

          <Card>
            <div>
              <p>{this.state.your_name}</p>
              <p>{this.state.status}</p>
            </div>
          </Card>
          
        </React.Fragment>
      );
    }
  }