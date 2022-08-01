import { useSelector } from "react-redux";


const CardMovements = () => {

    const user = useSelector((state) => state.user);  
    return (
      <div>CardMovements</div>
    )
}

export default CardMovements