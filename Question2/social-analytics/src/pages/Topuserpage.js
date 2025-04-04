import React, { useEffect, useState } from "react";
import { getTopUsers } from "../api";

const TopUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTopUsers().then(setUsers);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-xl shadow-md">
            <img
              src={`https://source.unsplash.com/80x80/?person,${user.id}`}
              alt={user.name}
              className="rounded-full mb-2"
            />
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p>Posts: {user.postCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsersPage;