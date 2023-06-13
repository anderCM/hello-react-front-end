import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../reducers/greetings";

const Greetings = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch])

  return (
    <div>
      <h2>Random Greeting</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}

export default Greetings