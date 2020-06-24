import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

function UserDetails() {
    let { username } = useParams();
    const BASE_URL = "https://api.github.com/users";
    const newUser = {
        'name': '',
        'avatar_url': '',
        'html_url': '',
        'followers': '',
        'following': '',
        'location': '',
        'company': '',
        'login': ''
    }
    const [user, setUser] = useState(newUser);
    const [userName, setUserName] = useState(username.split(':')[1]);

    useEffect(() => {
        axios.get(BASE_URL + "/" + userName).then((res)=> {
            console.log('res ', res);
            setUser(res.data);
        });
    }, []);

    return (
        <div className="user-details-section">
            <h2>Details for - {user.name}</h2>
            <div className="user-details">
                <div className="user-detail-img">
                    <img src={user.avatar_url} />
                </div>
                <div className="user-follower"> 
                    <span className="label">Followers</span><br/>
                    <span>{user.followers}</span>
                </div>
                <div className="user-follower">
                    <span className="label">Following</span><br/>
                    <span>{user.following}</span>
                </div>
                <div className="user-company">
                    <span className="label">Company</span><br/>
                    <span>{user.company}</span>
                </div>
                <div className="user-location">
                    <span className="label">Location</span><br/>
                    <span>{user.location}</span>
                </div>
                <div className="user-login">
                    <span className="label">Username</span><br/>
                    <span>{user.login}</span>
                </div>
            </div>
        </div>
    )
} 

export default UserDetails;