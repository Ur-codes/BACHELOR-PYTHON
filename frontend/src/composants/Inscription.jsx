import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Inscription = () => {
    const navigate = useNavigate()

    const [form,setForm] = useState({username:"", password:"", nom:"", email:"", adresse:""})
    function handleChange(e) {
        const {name,value} = e.target;
        setForm({...form, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(form.username !="" && form.password !="" && form.nom != "" && form.email != "" && form.adresse != "") {
            localStorage.setItem("client",JSON.stringify({nom:form.nom,email:form.email,adresse:form.adresse}))
            localStorage.setItem("statusConnexion", true);
            axios.post(
                'http://localhost:8000/api/clients/',
                {
                    username : form.username,
                    password : form.password,
                    address : form.adresse,
                    email: form.email,
                    nom: form.nom,
                    prenom : form.nom
                }
            );
            navigate('/')
        }
        else{
            alert("Information non rempli")
        }
    }

    return(
        <div>
            <h2>Inscription</h2>
            <form>
                <label htmlFor="nom">Votre nom d'utilisateur : </label>
                <input type="text" className="form-control" name="username" value={form.username} onChange={handleChange} placeholder="username"></input>
                <label htmlFor="email">Votre mot de passe : </label>
                <input type="text" className="form-control" name="password" value={form.password} onChange={handleChange} placeholder="password"></input>
                <label htmlFor="nom">Votre nom : </label>
                <input type="text" className="form-control" name="nom" value={form.nom} onChange={handleChange} placeholder="votre nom"></input>
                <label htmlFor="email">Votre email : </label>
                <input type="text" className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="Votre email "></input>
                <label htmlFor="email">Votre adresse : </label>
                <input type="text" className="form-control" name="adresse" value={form.adresse} onChange={handleChange} placeholder="Votre rue / code postal / ville "></input>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Inscription</button>
            </form>
        </div>
    )

}