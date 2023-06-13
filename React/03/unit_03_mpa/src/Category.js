
function Category(props) {
    const listItem = props.data.categoryNav.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
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