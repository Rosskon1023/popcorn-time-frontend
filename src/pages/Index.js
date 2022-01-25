import { Link } from "react-router-dom";

function Index(props) {
    return (
        <div className="index-page">
            <div>Trailer</div>
            <div>Trailer</div>
            <div>Trailer</div>
            <div>Trailer</div>
            <Link to="/trailers/:id">
                <h1>TEST ME</h1>
            </Link>
            <div>Trailer</div>
            <div>Trailer</div>
        </div>
    )
}

export default Index;