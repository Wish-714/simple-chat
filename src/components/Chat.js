import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import SignOut from './SignOut'
import Message from './Message';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from '../Firebase';

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
        
        <div className=' h-screen bg-white'> 
            <div className='fixed flex items-center w-screen bg-gray-200'>
                <img className='rounded-xl w-12 mx-4 my-4' alt='' src={auth.currentUser?.photoURL}/>
                <h1 className='font-bold text-xl'>{auth.currentUser?.displayName}</h1>
                <div className='mx-4 my-4 absolute top-0 right-2'>
                    <SignOut/>
                </div>
            </div>

            <div className='bg-white pt-20 pl-4 pb-36 pr-36'>
                {messages && messages.map(msg => <Message key={msg.id} message={msg}/>)}
            </div>
            
            <div className='flex w-full fixed bottom-0'>
                <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                className="block w-full px-5 py-2.5 mx-2 mb-2 bg-gray-300 rounded-full outline-none focus:text-gray-700"
                name="message" required
                placeholder='type here...'/>
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