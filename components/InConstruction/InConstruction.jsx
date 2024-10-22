import styles from './inconstruction.module.css'
import { getWhatsappNumber } from '../../utils/helpers';
import Image from 'next/image';

const InConstruction = ({ showModal, setShowModal, wsp }) => {
    if (!showModal) {
        return null; // Si no se debe mostrar, retorna null
    }
    return (
        <div className={styles.in_construction}>
            <div className={styles.xtoright}>
                <span onClick={() => setShowModal(false)}>x</span>
            </div>
            <img src='icons/repair.svg' alt="Descripción del ícono" width={30} height={30} className={styles.image_repair} />

            <h3>Estamos mejorando el cotizador</h3>
            <p>Actualmente, el cotizador está en proceso de actualización para brindarle un mejor servicio. Agradecemos su comprensión.</p>
            <p>¿Desea cotizar su auto de inmediato? No duden en<a
                href={`http://api.whatsapp.com/send?phone=${wsp}&text=Hola,%20quiero%20cotizar%20un%20vehiculo`}
                target="_blank"
                rel="noopener noreferrer"><span><b> Contactarnos</b></span></a>.</p>
        </div>
    )
}
export default InConstruction
