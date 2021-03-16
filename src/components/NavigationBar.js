import { updateOnMessage, selectTickerData } from "../features/tickerSlice";
import { useSelector, useDispatch } from "react-redux";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const tickerData = useSelector(selectTickerData);

  return (
    <div className="nav bg-primary">
      <h2 className="text-white m-3">My App</h2>
      <button
        className="btn btn-success m-2"
        onClick={() => dispatch(updateOnMessage("my payload"))}
      >
        {tickerData.tickerVal}
      </button>
    </div>
  );
}
