import {Link} from "react-router-dom";

function Category(props) {
    const listItem = props.data.categoryNav.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li>);
    return(
        <>
          <h1>Category</h1>
            <ul>
                {listItem}
            </ul>
        </>
    )
}

export default Category;