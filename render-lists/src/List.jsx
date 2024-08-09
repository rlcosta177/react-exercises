import PropTypes from 'prop-types'


function List(props){
    
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // sorting the array based on {fruit.name}
    // fruits.sort((a, b) => a.calories - b.calories) // numeric sorting based on calory number

    // filter items based on personalized criteria
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const itemList = props.items
    const category = props.category

    const listItems = itemList.map((item) => <li key={item.id}>{item.name}: <b>{item.calories}</b></li>);

    return(
        <>
           <h3 className="list-category" >{category}</h3>
           <ul className="list-items">{listItems}</ul>
        </>);
}

List.defaultProps = {
    category: "category",
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                             name: PropTypes.string, 
                                             calories: PropTypes.number}))
}
export default List