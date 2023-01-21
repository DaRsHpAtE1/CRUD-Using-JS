import {Link}from "react-router-dom"

function Navbar()
{
    return(
        <>
        <center>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/update">Update</Link>

            </div>
        </center>

        </>
    )
}
export default Navbar