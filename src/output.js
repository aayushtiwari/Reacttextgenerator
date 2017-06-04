import React from 'react';

const Output=({res})=>{
if(!res){
  return <div>NO DATA FOUND :(</div>;
}
else{
return(
    <div className="output">
     <h3>{res}</h3>
    </div>
  );}
};

export default Output;
