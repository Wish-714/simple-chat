import React from 'react'
import { auth } from '../Firebase';
import { formatRelative } from 'date-fns';

function Message(props) {
    
    const { text, uid, photoURL, displayName, createdAt } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' :  'received';

    return (
        <>
        <div className='flex'>
            <div className={`message ${messageClass}`}>
                <div className='flex items-center mt-2'>
                    <img
                    className='w-10 rounded-full my-2'
                    alt="" src={photoURL}/>
                    {displayName ? <p className='mx-2'>{displayName}</p> : null}
                </div>
                <p className='font-semibold bg-gray-100 px-8 py-4 mb-1 rounded-2xl'>~ 
                {text}</p>
                {createdAt?.seconds ? (
                    <span className='font-light mx-1'>
                        {formatRelative(new Date(createdAt.seconds * 1000), new Date()
                        )}
                    </span>
                ) : null}  
            </div>
        </div>
        </>

  )
}

export default Message