const TeamList = ({clubs, handleDelete}) => {
    return ( 
        <div className = "club-teams">
                {clubs.map (club =>(
                    <div className = "club-display" key={club.id}>
                        <h2>{club.team}</h2>
                        <h3>{club.country}</h3>
                        <p>{club.history}</p>
                        {/* <button onClick = {() => handleDelete(club.id)}>Delete</button> */}

                    </div>
                ))}
        </div>
     );
}
 
export default TeamList;