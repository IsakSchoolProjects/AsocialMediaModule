import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./nav";
import Main from "./main";

function Index() {

    return (
        <div className="flex flex-col min-h-screen ">
            {/* < Nav /> */}
            < Main />
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
