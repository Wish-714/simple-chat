import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import SignOut from './SignOut'
import Message from './Message';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from '../Firebase';
import '../App.css';

function Chat () {

    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limitToLast(50);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('')
    
    const sendMessage = async(e) => {
        e.preventDefault();

        const { uid, photoURL, displayName } = auth.currentUser;
        await messagesRef.add({
            displayName,
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });
        setFormValue('');
    }

    return (
        
        <div className=' h-screen bg-white overflow-x-hidden'> 
            <div className='h-20 fixed flex flex-row items-center w-screen bg-gray-200 '>
                <img className='rounded-xl w-10 mx-4 my-4' alt='' src={auth.currentUser?.photoURL}/>
                <h1 className='font-bold text-l'>{auth.currentUser?.displayName}</h1>
                <div className='mx-3 mt-2 fixed right-0'>
                    <SignOut/>
                </div>
            </div>
            
            <div className='shadow-md shadow-gray-400/50 mt-20 fixed h-6 w-screen bg-gradient-to-br from-teal-400 to-blue-600'>
                <div className='example1'>
                    <p className='font-bold flex items-center text-white text-sm'> @Forum ./Programmer Enthusiast ~ #Ngoding Dulu '-Jagonya Belakangan'.</p>
                </div>
            </div>
            
            <div className='bg-white mt-24 ml-4 mb-36 mr-36'>
                {messages && messages.map(msg => <Message key={msg.id} message={msg}/>)}
            </div>
            
            <div className='flex w-full fixed bottom-0'>
                <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                className="block w-full px-5 py-2.5 mx-2 mb-2 bg-gray-300 rounded-full outline-none focus:text-gray-700"
                name="message" required
                placeholder='type something here...'/>
                <button
                onClick={sendMessage}
                class="font-bold text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                type="submit"
                disabled={!formValue}>
                Send
                </button>
            </div>
        </div>
    );
}

export default Chat