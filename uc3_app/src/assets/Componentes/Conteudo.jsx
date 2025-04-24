import Styles from './Conteudo.module.css'

import faixa from '../img/FAIXA.png'
function Conteudo (){
    return (
        
        <marquee>
            <img src={faixa} />
            <img src={faixa} />
            <img src={faixa} />
            <img src={faixa} />
        </marquee>
    )
}
export default Conteudo;