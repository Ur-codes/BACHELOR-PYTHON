import { useState } from "react";

import { Link, useNavigate } from "react-router-dom"
export const FormulaireCommande = () => {
    const navigate = useNavigate()

    const [form,setForm] = useState({nom:"",email:"",adresse:""})
    function handleChange(e) {
        const {name,value} = e.target;
        setForm({...form, [name]: value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit bouton appuyé ! ")
        if(form.nom != "" && form.email != "" && form.adresse != "") {
           localStorage.setItem("client",JSON.stringify({nom:form.nom,email:form.email,adresse:form.adresse}))
           console.log(localStorage.getItem("client"))
            navigate('/commandeconfirmer')
        }
        else{
            alert("Formulaire non rempli")
        }
    }
    return <div style={{marginTop: "10px", marginBottom: "10px", borderTop : "solid", borderBottom : "solid"}}>
        <Link to='/connexion' style={{marginTop: "10px", marginBottom: "10px"}}className="btn btn-primary">Connecter-vous</Link>
        <p>ou....</p>
        <h2>Rentrer votre profil</h2>
        <form>
            <label htmlFor="nom">Votre nom : </label>
            <input type="text" className="form-control" name="nom" value={form.nom} onChange={handleChange} placeholder="votre nom"></input>
            <label htmlFor="email">Votre email : </label>
            <input type="text" className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="Votre email "></input>
            <label htmlFor="email">Votre adresse : </label>
            <input type="text" className="form-control" name="adresse" value={form.adresse} onChange={handleChange} placeholder="Votre rue / code postal / ville "></input>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Commander</button>
        </form>
    </div>
}