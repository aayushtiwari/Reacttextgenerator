import React,{Component} from 'react';

class Confi extends Component {
constructor(props) {
  super(props);
  this.state={
    html:this.props.setting.html,
    paras:this.props.setting.paras
  }
}

render(){
  return ( < div id = "input" > 
    < ul >
     < li > 
     < label htmlFor = "" > Paragraphs : < /label> 
     < input onChange = { event => this.onInput(event.target.value) }
        type = "text"
        name = "para" / > < /li> 
        < li >
         < label htmlFor = "" > Include HTML: < /label >
          < select onChange = {
    event => this.onHtml(event.target.value)
  }
  type = "html" >
   < option value = "true" > Yes < /option> 
   < option value = "false" > No < /option > 
  < /select > < /li >
   < li > < label htmlFor = "" > Font Family : < /label> < select type = "font" onChange={
    (event)=>{
      document.querySelector('h3').style.fontFamily= `${event.target.value}`;
 }} >
        < option value = "'Arvo', serif" > Arvo < /option > < option value = "'Open Sans', sans-serif" > Open Sans < /option> < option value = "'Cabin', sans-serif" > Cabin < /option > < option value = "'Droid Sans', sans-serif" > Droid Sans < /option> < option value = "'Josefin Sans', sans-serif" > Josefin Sans < /option > < option value = "'Lato', sans-serif" > Lato < /option> < option value = "'Old Standard TT', serif" > Old Standard TT < /option > < option value = "'PT Sans', sans-serif" > PT Sans < /option> < option value = "'PT Serif', serif" > PT Serif < /option > < option value = "'Roboto', sans-serif" > Roboto < /option> < option value = "'Ubuntu', sans-serif" > Ubuntu < /option > < option value = "'Vollkorn', serif" > Vollkorn < /option> < /select > < /li> < /ul > < /div>
    );}
onInput(paras){
  console.log(paras);
    this.setState({ paras });
    this.props.onParaChange(paras,this.state.html);
};
onHtml(html) {
    this.setState({ html });
    this.props.onParaChange(this.state.paras,html);
  console.log(html);
}
};
export default Confi;
