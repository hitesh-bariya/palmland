import { useSelector } from "react-redux";
import { selectCountryList } from "@/stores/App/appReducer";
import SearchableDropDown from "@/components/CommonComponents/SearchableDropDown";

const CountryDropDown = ({ country, onCountryChange,...rest }) => {
  const CountryList = useSelector(selectCountryList);
  CountryList.map((country)=> country.name = country.countryName )
  return (
    CountryList && (
      <SearchableDropDown
        options={CountryList}
        currentOption={
          CountryList.find((cou) => cou.id === country.id) || {
            id: "231",
            name: "AE",
          }
        }
        onOptionSelect={onCountryChange}
        maxW="320px"
        {...rest}
      />
    )
  );
};

export default CountryDropDown;
