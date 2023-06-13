import { useParams } from "react-router-dom";

function CategoryDescription() {
    let {categoryItem} = useParams();
    return(
        <div>
            <a href="/cat">Назад</a>
            <h1>Category: {categoryItem}</h1>
        </div>
    )
}

export default CategoryDescription;