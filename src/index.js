import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Output from './output.js';
import Confi from './input.js';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state={
    paras:2,
    html:true,
    data:null,
    } 
   this.search(this.state.paras,this.state.html);
  }
search(paras,html){
  axios.get(`http://hipsterjesus.com/api?paras=${paras}&html=${html}`).then(response=>{this.setState({data:response.data.text});
    this.setState({paras,html});
  });

}
  render(){
    return <div>
    <div className="heading">ReactJs Sample Text Generator</div>
      <Confi setting={this.state} onParaChange={(paras,html)=>{this.search(paras,html)}}/>
      <Output res={this.state.data}/>
    </div>;
  }
}

ReactDOM.render(<Text/>,document.getElementById('root'));
