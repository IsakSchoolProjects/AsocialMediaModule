import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useParams, Switch} from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import UserTweet from '../routes/UserTweet';
import Login from '../routes/Login';
import Register from '../routes/Register';
import EditUserPost from './EditUserPost.jsx';
import CreateTweet from './CreateTweet';
import Comments from './Comments';

function Index() {
    const [tweets, setTweets] = useState([])

    let tweet_Id = useParams();

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/tweets')
            .then(res => {
                console.log(res)
                setTweets(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);  
    

    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Nav/><Main data={tweets}/><Footer/></>}/>
                <Route path="/login" element={<><Nav/><Login/></>} /> 
                <Route path="/register" element={<><Nav/><Register/></>} />
                <Route path={`tweet`}>
                    <Route path=":tweet_Id" element={<><Nav/><UserTweet /></>}>
                        {/* <Route path="comment" element={<Comments/>}/> */}
                    </Route>
                </Route>
                <Route path={`tweet/:tweet_Id/editUserPost`} element={<><Nav/><EditUserPost/></>}/>
                <Route exact path="createtweet" element={<><Nav/><CreateTweet/></>} />
                
            </Routes>
        </Router>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}




