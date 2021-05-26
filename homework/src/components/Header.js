import React from 'react';

const Header = () => {
    return (
        <header className="head-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header d-flex justify-content-between">
                            <nav className="navigation">
                                <ul className="d-flex justify-content-between">
                                    <li><a href="">Payment</a></li>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Contacts</a></li>
                                </ul>
                            </nav>
                            <div>
                                <a href=""><img src="../assests/Images/logos 1.png" alt="Header Image" /></a>
                            </div>
                            <div className="info-work">
                                <ul className="d-flex justify-content-between">
                                    <li>Daily 11am-9pm</li>
                                    <li><i className="fas fa-phone-alt"></i> 0 800 33 08 98</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="offset-2 col-8 info-site">
                        <h1>Food delivery in Kovel</h1>
                        <p>If you decide to relax or have unexpected guests, call us. We make sure that your vacation is
                        comfortable, enjoyable and delicious</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;