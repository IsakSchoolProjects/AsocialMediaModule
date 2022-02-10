import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function Index() {

    (function () {
        
    })()
    
    return (
        <div className="">
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}


