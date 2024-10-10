import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/gulshancodes/redux-shopping-cart"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/kavincodes/redux-shopping-cart
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://gulshansongara.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Kavin Kanakaraj
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;