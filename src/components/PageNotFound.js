import React from 'react';
import pageNotFound from '../images/pageNotFound.png';
import Footer from './Footer';

export default function PageNotFound(props) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                <img src={pageNotFound} alt="page not found"></img>
            </div>
            <div style={{position:'relative',top:'70px'}}>
                <Footer></Footer>
            </div>
        </>
    )
}
