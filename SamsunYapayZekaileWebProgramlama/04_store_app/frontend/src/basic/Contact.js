import React from 'react'
import Header from '../components/header/Header';

function Contact() {
    return (
        <div>
            <Header data={{title:"İletişim"}}></Header>

            <ul>
                <li>
                    Telefon: 0555 555 5555
                </li>
                <li>
                    Adres: BTK Samsun
                </li>
            </ul>

        </div>
        
    )
}

export default Contact;