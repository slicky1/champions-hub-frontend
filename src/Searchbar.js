
const Searchbar = ({placeholder, handleChanges}) => {
    function handleChange (e){
        handleChanges(e.target.value);
    }
    
    return ( 
        <div className= 'search'>
            
            <input type ='search'
            placeholder = {placeholder}
             onChange = {handleChange} //Has to be a function
            />
        </div>
     );
}
 
export default Searchbar;