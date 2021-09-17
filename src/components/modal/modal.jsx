import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
    render() {
        const { msg, isOpen,closeModal } = this.props
        return (
            <section>
                {isOpen && (
                    <div className="modal-container">
                        <h1>{msg}</h1>
                        <div className="close-modal-btn" onClick={closeModal}>
                            X
                        </div></div>
                )}
            </section>
        )
    }
}
export default Modal