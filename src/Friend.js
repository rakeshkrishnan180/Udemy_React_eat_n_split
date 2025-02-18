import React from 'react'
import Button from './Button';

const Friend = ({friend,onSelection,selectedFriend}) => {
   
   const isSelected = selectedFriend?.id === friend?.id 
  console.log("selectedFriend",selectedFriend);
  console.log("friend",friend);
   
  return (
    <li className={`${isSelected ? "selected" : ""}`}>
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
    <Button onClick={()=>onSelection(friend)}>Select</Button>
    </li>
  )
}

export default Friend
