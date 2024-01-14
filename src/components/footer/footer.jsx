import React from "react";
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
         {/*Comment: 'How to write copyright symbol?:' alt + 0169 */}
            {year} © Nomad Store
        </div>
    );
}

export default Footer;