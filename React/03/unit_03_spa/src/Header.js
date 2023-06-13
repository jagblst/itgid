import {Link} from "react-router-dom";

function Header(props) {
    const listItem = props.data.mainNav.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li>);
    return(
        <>
            <nav>
                <ul>
                    {listItem}
                </ul>
            </nav>
        </>
    )
}

export default Header;