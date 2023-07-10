const List = (data) => {
    return (
        <ul>
            {data.user.map( item =><li key={item.passport}>Name: {item.name}<br/>Age: {item.age}</li> )}
        </ul>
    );
}


export default List;