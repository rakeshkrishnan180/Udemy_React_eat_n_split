import React from 'react';
import Friend from './Friend';


const FriendsList = ({friends}) => {
    console.log("friends",friends);
    
  return (
    <ul>
        {
            friends.map((friend)=>(
                // console.log("prop frnd",friend)
                
                <Friend friend={friend} key={friend.id}/>
            ))
        }
    </ul>
  )
}

export default FriendsList
