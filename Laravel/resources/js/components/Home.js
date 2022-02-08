import React from 'react';
import ReactDOM from 'react-dom';


function Home(props) {
    return (
        <div className="">
            <h1>your content</h1>
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
