import React from 'react'
import Button from './Button';

const Friend = ({friend}) => {
    console.log(friend);
    
  return (
    <li>
     <img  src={friend.image} alt={friend.name}/> 
     <h3>{friend.name}</h3>
     {friend.balance < 0 && 
     <p className='red'>you owe {friend.name} {Math.abs(friend.balance)}</p>
     }

    {friend.balance > 0 && 
     <p className='green'> {friend.name}  owe you {Math.abs(friend.balance)}</p>
     }

    {friend.balance === 0 && 
     <p>you and {friend.name} are even</p>
     }
    <Button>Select</Button>
    </li>
  )
}

export default Friend
