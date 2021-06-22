const TeamList = ({clubs,}) => {

    const handleDelete =  (id)=> {

        fetch ('https://champions-hub-backend.herokuapp.com/clubs/' + id,{
            method: 'DELETE'
           })
      }

//     //   const handleFave = () =>{
//     //     console.log("Favorite team")

// }

    return ( 
        <div className = "club-teams">
                {clubs.map (club =>(
                    <div className = "club-display" key={club.id}>
                        <h2>{club.team}</h2>
                        <h3>{club.country}</h3>
                        <p>{club.history}</p>
                        <button onClick = {() => handleDelete(club.id)}>Delete</button>
                        {/* <button onClick = {() => handleFave (club.id)}>Toggle Fav</button> */}

                    </div>
                ))}
        </div>
     );
}
 
export default TeamList;