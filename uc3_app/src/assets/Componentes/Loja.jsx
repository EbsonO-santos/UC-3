import Styles from './Loja.module.css'

function Loja({imagens,titulo,texto,rodape}) {
    return (
        <section className={Styles.Loja}>
            <section className={Styles.Filtro}>
                <h2>SHAPES</h2>
                
                <p>Shape Maple</p>
                <p>Kit com Shape</p>
                <p>Shape Marfim</p>
                
                <h2>FILTRAR POR</h2>
                
                <h1>MATERIAL</h1>
                
                <label className={Styles.CheckboxLabel}>
                    <input type="checkbox" className={Styles.Checkbox} />
                    <span>Shape Marfim</span>
                </label>
                
                <label className={Styles.CheckboxLabel}>
                    <input type="checkbox" className={Styles.Checkbox} />
                    <span>Kit com Shape</span>
                </label>
                
                <label className={Styles.CheckboxLabel}>
                    <input type="checkbox" className={Styles.Checkbox} />
                    <span>Shape Maple</span>
                </label>
            </section>
            <section></section>
        </section>
        
    )
}

export default Loja