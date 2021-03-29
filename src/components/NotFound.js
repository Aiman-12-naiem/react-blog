import { Link } from "react-router-dom";
const NotFound = () => {
    return (
         <div className="row">
            <div className="col-8 mt-5">
                <h1 className="mt-4">404 Page Not Found!</h1>
                <p>Can't find what Page you're looking for</p>
                <Link to="/">Get back to Home</Link>
            </div>
        </div>
    );
}
 
export default NotFound;
