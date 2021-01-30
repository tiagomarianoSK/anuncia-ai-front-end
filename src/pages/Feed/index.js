import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft, FiPower } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import './style.css';

export default function Feed(){
    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Anuncia ai"/>
                <span>Seja bem vindo USER</span>

                <Link className="button" to="/incidents/new">Cadastrar novo anuncio</Link>
                <button  type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>


            <h1>Anuncios da Região</h1>

            <ul>
                    <li>
                    <strong>ANUNCIO</strong>
                    <p>TITULO DO ANUNCIO</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>esse e um simples anuncio bobo!</p>

                    <strong>VALOR : </strong>
                    <p>15 R$</p>

                    <Link >
                        Ver mais detalhes
                        <FiChevronsLeft name="arrow-right"  size={16} color="#E02041"/>
                    </Link>
                </li>
              
            </ul>
            </div>
    );
}