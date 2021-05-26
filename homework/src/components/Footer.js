import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <figure>
                    <img src="./Assets/Images/4.png" alt="Footer Image" />
                </figure>
            </div>
            <div className="footer">
                <h1>Fill out the form
                and we will call you
            </h1>
                <div className="pt-5">
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <button className="call-btn">Call Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
export default Footer;