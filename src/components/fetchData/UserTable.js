import React from 'react';
import './fetchData.css'; 

export default function UserTable({ users }) {
    function generateUserCard(user) {
        return (
            <tr key={user.email} style={{ border: '2px solid black' }}>
                <td style={{ textAlign: 'center', border: '1px solid black' }}>
                    <img width="50px" height="60px" src={user.image} alt=""/>
                </td>
                <td style={{ textAlign: 'center', border: '1px solid black' }}>{user.firstName} {user.lastName}</td>
                <td style={{ textAlign: 'center', border: '1px solid black' }}>{user.university}</td>
                <td style={{ textAlign: 'center', border: '1px solid black' }}>{user.email}</td>
                <td style={{ textAlign: 'center', border: '1px solid black' }}>{user.phone}</td>
            </tr>
        );
    }

    return (
        <div id="Callback1">
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>University</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.slice(0, 5).map(user => generateUserCard(user))}
                </tbody>
            </table>
        </div>
    );
}
