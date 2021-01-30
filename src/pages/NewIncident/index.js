import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logo from '../../assets/logo.png';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar, tente novamente!');
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Anuncia ai"/>

                    <h1>Cadastro novo Anuncio </h1>
                    <p>Descreva detalhadamente seu produto para que as pessoas possam saber melhor, quanto mais informaçoes melhor sera sua venda!</p>
                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para Home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do Anuncio" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}