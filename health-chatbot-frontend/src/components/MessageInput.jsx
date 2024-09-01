import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                        Send
                    </button>
                </div>
            </div>
        </form>
    );
};

export default MessageInput;
