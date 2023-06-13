function Header(props) {
    const listItem = props.data.mainNav.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
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