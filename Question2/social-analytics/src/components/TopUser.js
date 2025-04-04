import React, { useEffect, useState } from 'react';
import { fetchTopUsers } from './api';

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchTopUsers().then(setUsers);
    }, []);

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {users.map(user => <li key={user.id}>{user.name} - {user.posts} posts</li>)}
            </ul>
        </div>
    );
};

export default TopUsers;
