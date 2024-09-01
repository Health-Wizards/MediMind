import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/messageSlice';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatbot = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);

    const sendMessage = async (text) => {
        const userMessage = { text, sender: 'user' };
        dispatch(addMessage(userMessage));

        try {
            const response = await axios.post('/api/chatbot', { message: text });
            const botMessage = { text: response.data.reply, sender: 'bot' };
            dispatch(addMessage(botMessage));
        } catch (error) {
            console.error("Error sending message", error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center my-3">Health Chatbot</h2>
            <div className="card">
                <div className="card-body">
                    <MessageList messages={messages} />
                    <MessageInput sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
