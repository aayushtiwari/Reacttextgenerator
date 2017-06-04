import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Output from './output.js';
import Confi from './input.js';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state={
    paras:3,
    html:true,
    data:null,
    },

    axios.get(`http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`).then(response=>{this.setState({data:response.data.text});
console.log(response);
  });
  }

  render(){
    return <div>
    <div className="heading">ReactJs Sample Text Generator</div>
      <Confi/>
      <Output res={this.state.data}/>
    </div>;
  }
}

ReactDOM.render(<Text/>,document.getElementById('root'));
