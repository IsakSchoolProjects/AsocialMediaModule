import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

// (function () {
        
// })()

function Index() {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/tweets')
            .then(res => {
                // console.log(res)
                setTweets(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);  
    
    
    return (
        <div className="">
            <Nav />
            {/* <ul>
                {tweets.map(tweet => (
                    <li key={tweet.id}> {tweet.body} </li>
                ))}
            </ul> */}
            <Main data={tweets} />
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}


