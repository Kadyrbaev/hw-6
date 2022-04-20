import './Proba.css'
import Header from './Header';
function Proba({add}){
   console.log(add);
   if(add==='sadyr' || add==='Sadyr'){
       return (
           <div className='wrap'>
               <div>
                    <h1>Welcome our webite</h1>
                    <p>Урматтуу колдонуучулар стилге, логикага конул бурбаныздар.!
                         Бул жон гана проба😎
                    </p>
               </div>
                <div>
                    <Header/>
                    <Header/>
                    <Header/>
                    <Header/>
                </div>
           </div>
       )
   }
}
export default Proba