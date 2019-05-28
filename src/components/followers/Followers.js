import React from 'react';

const Followers = () => {
    return (
        <div className="followers">
            <h2>Seguindores</h2>
            <div className="info">
                <div className="img">
                    <img src="https://avatars3.githubusercontent.com/u/8216101?v=4" alt="avatar_Follow" />
                </div>
                <ul className="dados">
                    <li className="nome">
                        <label>Nome:</label> kakuzops
                    </li>
                    <li className="url">
                        <label>Url:</label> https://github.com/kakuzops
                    </li>
                    <li className="followers">
                       <label>Followers:</label> 3
                    </li>
                    <li className="following">
                        <label>Following:</label> 4
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Followers;