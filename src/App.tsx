import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from './components/MessageList/MessageList';
import { Message } from './types';
import './App.css';

const API_URL = 'http://146.185.154.90:8000/messages';

const App: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const intervalId = setInterval(fetchMessages, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(API_URL);
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };


    return (
        <div>
            <h1>React Chat App</h1>
            <div className="chat-block">
                <MessageList messages={messages} />
            </div>
        </div>
    );
};

export default App;