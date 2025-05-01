import Styles from './Promocao.module.css'
import faixa from '../img/FAIXA.png'

function Promocao() {
    return (
        <>
            <section className={Styles.Promocao}></section>
            <img src={faixa} alt="" />
        </>
    );
}
export default Promocao

