import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import '../App.css'

export default function loginPage() {
    const { register } = useForm();

  return (
    <main>
      <h1 className="banniere">Bienvenu(e) sur TchatOnline</h1>
      <div className="mainHome">
          <div className="recalibrage">
              <p className="texte">Nom :</p>
              <input
                {...register("Firstname")}
                className="champs"
                type="text"
                name="Firstname"
                placeholder=""
                required
                onKeyPress={(event) => {
                  const allowedCharacters = /^[^0-9]*$/;
                  if (!allowedCharacters.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <p className="texte">Prénom :</p>
              <input
                {...register("Lastname")}
                className="champs"
                type="text"
                name="Lastname"
                placeholder=""
                required
                onKeyPress={(event) => {
                  const allowedCharacters = /^[^0-9]*$/;
                  if (!allowedCharacters.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <p className="texte">Nom d'utilisateur :</p>
              <input
                {...register("username")}
                className="champs"
                type="text"
                name="username"
                placeholder=""
                required
              />
              <p className="texte">Numéro :</p>
              <input
                 {...register("Numeromob")}
                 className="champs"
                 type="number"
                 name="Numeromob"
                 placeholder=""
                 required
                 onKeyDown={(event) => {
                   const blockedArrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
               
                   if (blockedArrowKeys.includes(event.key)) {
                     event.preventDefault();
                   }
               
                 }}
                 onWheel={(event) => {
                   event.preventDefault();
                 }}
                 onChange={(event) => {
                   let { value } = event.target;
                   const sanitizedValue = value.replace(/[^0-9]/g, "");
                   if (sanitizedValue.length > 10) {
                     value = sanitizedValue.slice(0, 10);
                   } else {
                     value = sanitizedValue;
                   }
                   event.target.value = value;
                 }}
              />
              <p className="texte">Email :</p>
              <input
                {...register("Email")}
                className="champs"
                type="text"
                name="Email"
                placeholder=""
                required
              />
              <p className="texte">Mot de passe :</p>
              <input
                {...register("password")}
                className="champs"
                type="password"
                name="password"
                placeholder=""
                required
              />
          </div>
          <div className="ajust">
            <button type="submit">
              Ajouter un utilisateur
            </button>       
            <Link className="texte" to='/dejaMembre'>
            <p>Déjà membre?
            </p></Link>
          </div>
      </div>
    </main>
  );
}
