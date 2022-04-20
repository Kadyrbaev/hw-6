
import { useState } from "react";
import Header from "./Header"
import MainRend from "./MainRend"
import Proba from "./Proba";
function FirstPage(){

  const [save, setSave] = useState('')
  function dataLog(data){
    setSave(data)
    console.log(data);
    console.log(save);
  }
  return (
    <div>
      <Header/>
        <MainRend onDataLog={dataLog}/>
        <Proba add={save}/>
    </div>
    
  )
}
export default FirstPage