import { useParams, Link } from "react-router-dom";

function CategoryDescription() {
    let {categoryItem} = useParams();
    return(
        <div>
            <Link to="/cat">Назад</Link>
            <h1>Category: {categoryItem}</h1>
        </div>
    )
}

export default CategoryDescription;