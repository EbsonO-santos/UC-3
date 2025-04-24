import Styles from './Conteudo.module.css'
import background from '../img/background.png'
function Conteudo (){
    return (
        <section className={Styles.conteudo}>
            <img src={background} alt="" />
        </section>
    )
}
export default Conteudo;