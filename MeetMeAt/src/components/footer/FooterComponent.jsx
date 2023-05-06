import React from 'react'
import { Row } from 'react-bootstrap';
import './Footer.css'

export const FooterComponent = () => {
    return (
        <>
        <div className="footer footer-sub">
                <i className="bi bi-facebook copy"></i>
                <i className="bi bi-instagram copy"></i>
                <i className="bi bi-twitter copy"></i>
        </div>
            <div className="footer footer-inf">
            <p className="copy">&copy;{new Date().getFullYear()} City Guide App - All Rights Reserved</p>
          </div>
     
        </>
    );
};