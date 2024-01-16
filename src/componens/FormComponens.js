import {useState} from "react"
export default function FormComponens(props) {
/* const [nev,setnev]=useState("")
const [szulev,setSzulev]=useState(2000) */
const[obj,setObj]=useState({
    nev:"",
    szulev:2000,
})

function valtozasKezeles(event){
    console.log(event.target.value)
    let sv = {...obj}
    sv[event.target.id]=event.target.value
    setObj({...sv});
   
}
function adatKuld(event){
    event.preventDefault()
    console.log(obj)
    props.adatKuld(obj)
}

  return (
    <form onSubmit={adatKuld}>
      <div>
        <label htmlFor="nev">Név:</label>
        <input
          type="text"
          id="nev"
          name="nev"
          value={obj.nev}
          placeholder="Vezetéknév Keresztnév"
          onChange={valtozasKezeles}
        />
      </div>
      <div>
        <label htmlFor="szulev">Születési év:</label>
        <input
          type="text"
          id="szulev"
          name="szulev"
          value={obj.szulev}
          min="1900"
          max="2024"
          onChange={valtozasKezeles}
        />
      </div>
      <input type="submit" id="submit" name="submit" value="Küld" />
    </form>
  );
}
