import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <ul className="list-group">
            {messages.map((msg, index) => (
                <li key={index} className={`list-group-item ${msg.sender === 'bot' ? 'bg-light' : ''}`}>
                    <strong>{msg.sender === 'bot' ? 'Bot: ' : 'You: '}</strong>{msg.text}
                </li>
            ))}
        </ul>
    );
};

export default MessageList;
