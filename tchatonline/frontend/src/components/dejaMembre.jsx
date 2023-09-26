import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import '../App.css'

export default function DejaMembre() {
    const { register } = useForm();

  return (
    <main>
      <h1 className="banniere">Content de vous revoir</h1>
      <div className="mainHome">
          <div className="recalibrage">
              <p className="texte">Nom/Email</p>
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
              <p className="texte">Mot de passe :</p>
              <input
                {...register("password")}
                className="champs"
                type="password"
                name="password"
                placeholder=""
                required
              />
              <div>
            <Link className="texte" to='/'>
            <p>Vous voulez les rejoindre?
            </p></Link>
            </div>
          </div>
      </div>
    </main>
  );
}
