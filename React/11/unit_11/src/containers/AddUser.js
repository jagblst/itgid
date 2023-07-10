import { useDispatch } from 'react-redux';
import { addNewUser } from '../action';

const AddUser = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    let data = event.target.elements;
    dispatch(addNewUser(data.passport.value, data.name.value, data.age.value))
    }

    return (
        <div>
            <form onSubmit={formHandler}>
            <input name="passport" defaultValue="zxcv098" />
            <input name="name" defaultValue="Vasya" />
            <input type="number" name="age" defaultValue="23" />
            <button type="submit">
            Add New User
            </button>
            </form>
        </div>
    )
}

export default AddUser;