
import { useState } from 'react';
import './MainRend.css'

function MainRend(props){

    const [title, setTitle] = useState('')
    function nameChange(event){
        setTitle(event.target.value)
        console.log(event.target.value);
    }
    function butHandler(){
        console.log(title);
        props.onDataLog(title)
        
    }
    const [pass, setPass] = useState('Пароль бул жерде')
    function changeText(){
        setPass('sadyr')
    }
    return (
        <div className='wrapdiv'>
            <div className="main_div">
            <input placeholder="Имя"></input>
            <input placeholder="Фамилия"></input>
            <input placeholder="Пароль" onChange={nameChange}></input>
            <button onClick={butHandler} >Add</button>
            </div>
            <button className='but' onClick={changeText}>{pass}</button>
        </div>
    )
}
export default MainRend