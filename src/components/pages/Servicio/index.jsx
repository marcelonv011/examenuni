import { useState } from 'react';

import MyTable from '../../../components/Listado/index';
import listPessoas from '../../../data/pessoas.json';
import Dibujo from "../../../components/Dibujo/index";
import "../../../components/Navegacion/index";
import Navegacion from "../../../components/Navegacion/index";
import Pie from "../../../components/Pie/index";

function Servicio() {
    const [nome, setNome] = useState("");
    const [entrada, setEntrada] = useState("");
    const [pessoas, setPessoas] = useState(listPessoas);
    const [id, setId] = useState(pessoas.length+1);

    function handleSubmit(event) {
        const novaPessoa = {
            nome: nome,
            entrada: entrada,
            id: id,
        }

        setId(id+1);

        setPessoas([...pessoas, novaPessoa]);
        
        setNome("");
        setEntrada("");

        event.preventDefault();
    }

    const handleChangeNome = (e) => {
        setNome(e.target.value);
        console.log(e.target.value);
    }
    const handleChangeEntrada = (e) => {
        setEntrada(e.target.value)
        console.log(e.target.value);
    }

    return(
        <>
           <header class="cab"> <Dibujo/> <Navegacion/> </header>
            <h1 class="cet">servicios</h1>

            <section class="aba">
            <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
                <label>
                    Nome:
                    <input onChange={handleChangeNome} type="text" value={nome} />
                </label>
                <label>
                    Entrada:
                    <input onChange={handleChangeEntrada} type="number" value={entrada} />
                </label>
                <input type="submit" value="Enviar" />
            </form>

            <MyTable pessoas={pessoas} />

        
            </section>
           <footer> <Pie/> </footer> 
        </>
    );
}
export default Servicio;