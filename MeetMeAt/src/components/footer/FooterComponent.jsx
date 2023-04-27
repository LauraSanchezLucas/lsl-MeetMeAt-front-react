import React from 'react'
import { Row } from 'react-bootstrap';
import './Footer.css'

export const FooterComponent = () => {
    return (
        <>
        <Row>
        <div className="footer footer-sub">
                <i className="bi bi-facebook copy"></i>
                <i className="bi bi-instagram copy"></i>
                <i className="bi bi-twitter copy"></i>
        </div>
        </Row>
        <Row>
            <div className="footer footer-inf">
            <p className="copy">&copy;{new Date().getFullYear()} City Guide App - All Rights Reserved</p>
          </div>
        </Row>
        </>
    );
};