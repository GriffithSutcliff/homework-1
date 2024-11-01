import React from 'react';

export default function UsersTable({users}) {
    return (
        <div className='UsersTable'>
            <h1>Пользователи</h1>
                <div className='users'>
                    <div className='names'>
                        <h1>Имя</h1>
                        {users.map((el) => <p>{el.name}</p>)}
                    </div>
                    <div className='emails'>
                        <h1>Почта</h1>
                        {users.map((el) => <p>{el.email}</p>)}
                    </div>
                </div>
        </div>
    );
};