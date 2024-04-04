import { useSelector } from "react-redux";
import { selectCityList } from "@/stores/App/appReducer";
import SearchableDropDown from "@/components/CommonComponents/SearchableDropDown";

const CityDropDown = ({ city, onCityChange,...rest }) => {
  const CityList = useSelector(selectCityList);
  CityList.map((city)=> city.name = city.cityName )
  return (
    CityList && (
      <SearchableDropDown
        options={CityList}
        currentOption={
            CityList.find((sta) => sta.id === city.id) || {
            id: "Dubai",
            name: "Dubai",
          }
        }
        onOptionSelect={onCityChange}
        maxW="320px"
        {...rest}
      />
    )
  );
};

export default CityDropDown;
