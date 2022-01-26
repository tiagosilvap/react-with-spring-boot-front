import React from "react";
import './styles.css'
import logoImage from '../../assets/logo.svg'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="logo App"/>
                
                <form>
                    <h1>Access your Account</h1>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}