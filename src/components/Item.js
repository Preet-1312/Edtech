import "./Item.css"

function Item(props){
    const itemName = props.name
    return (
        <p className="Item">{itemName}</p>
    )
}
export default Item