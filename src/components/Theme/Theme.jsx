export function  Theme(){

    function handleValueChange(){
        
    }
    return(
        <div>
            <span>Theme :</span>
            <select defaultValue="light dark" onChange={handleValueChange} >
                <option value="light dark ">System</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
            </select>
        </div>
    )
}