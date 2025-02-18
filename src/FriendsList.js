import React from 'react';
import Friend from './Friend';


const FriendsList = ({friends,onSelection,selectedFriend}) => {
  // console.log("selectedFriend",selectedFriend);
    
  return (
    <ul>
        {
            friends.map((friend)=>(
  
                <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend}/>
            ))
        }
    </ul>
  )
}

export default FriendsList
