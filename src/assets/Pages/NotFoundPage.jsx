import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <>
        <div className="container py-5">
            <div className="not-found text-center">
                <FaExclamationTriangle className="fs-1 text-warning" />
                <h1 className="fw-bold mt-3">404 Not Found</h1>
                <p>This page does not exist</p>
                <Link to='/'>Go Back To Home</Link>
            </div>
        </div>
    </>
  )
}

export default NotFoundPage