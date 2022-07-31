
import exitSVG from '@icons/exit.svg'
import '@styles/modal.scss'

const Modal = ({ children, onClose }) => {
    return (
        <div
            onClick={onClose}
            className='backdrop'>
            <div className="modal">
                <div
                    onClick={onClose}
                    className="modal-exit">
                    <img src={exitSVG} alt="exit icon" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal