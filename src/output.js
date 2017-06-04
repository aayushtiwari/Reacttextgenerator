import React from 'react';

const Output=({res})=>{
if(!res){
  return <div>NO DATA FOUND :(</div>;
}
else{
return(
    <div className="output">
     {res}
    </div>
  );}
};

export default Output;
