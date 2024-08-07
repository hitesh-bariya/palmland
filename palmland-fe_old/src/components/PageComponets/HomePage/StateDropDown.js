import { useSelector } from "react-redux";
import { selectStateList } from "@/stores/App/appReducer";
import SearchableDropDown from "@/components/CommonComponents/SearchableDropDown";

const StateDropDown = ({ state, onStateChange,...rest }) => {
  const StateList = useSelector(selectStateList);
  StateList.map((state)=>state.name = state.stateName);
  return (
    StateList && (
      <SearchableDropDown
        options={StateList}
        currentOption={
            StateList.find((sta) => sta.id === state.id) || {
            id: "ALL",
            name: "ALL",
          }
        }
        onOptionSelect={onStateChange}
        maxW="320px"
        {...rest}
      />
    )
  );
};

export default StateDropDown;
