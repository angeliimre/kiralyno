import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {setArr} from "./features/colorSlice";



const SzinesKocka=function(){
  const color=useSelector(state=>state.color.value);
  const index=color.findIndex(function(pos){
    return pos.row==2&&pos.col==3;
  })
  return <div style={{position:"absolute",top:420}}>{JSON.stringify(color)}
  {JSON.stringify({row:2,col:3})}
  {index}
  </div>
}
const Tabla=function(){
  const val=useSelector(state=>state.color.value);
  
  const dispatch= useDispatch();
  //const select=useSelector();
  return [...Array(8)].map(function(item,index){
     return [...Array(8)].map(function(item2,index2){
      return <button style={val.findIndex(function(pos){
        return pos.row==index&&pos.col==index2;
      })==-1?{position:'absolute',top:index*42,left:index2*42,width:40,height:40,background:"red"}:{position:'absolute',top:index*42,left:index2*42,width:40,height:40,background:"yellow"}} onClick={(e)=>{
        dispatch(setArr({row:index,col:index2}));
        
      }}></button>
     })
  })
}

function Uzi(){
  
  const message=useSelector(state=>state.color.msg);
  const val=useSelector(state=>state.color.value);
  return <div style={{position:"absolute",top:440}}>{message}<br/>
    Eddig lerakott királynők száma: {val.length}
  </div>
}

function App() {
  
  return (
    <>
      <Tabla/>
      <Uzi/>
      {/* <button onClick={()=>{dispatch(red())}}>Piros</button>
      <button onClick={()=>{dispatch(green())}}>Zöld</button>
      <button onClick={()=>{dispatch(setColor("purple"))}}>Valamilyen szín</button> */}
    </>
  );
}

export default App;
