import React, { useEffect, useRef } from 'react';
import { useField } from 'formik';

const GooglePlacesAutocomplete = ({ name, ...props }) => {
  const [field, , helpers] = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'], // or ['address'] for more specific results
    });

    const handlePlaceSelect = () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        helpers.setValue(place.formatted_address);
      }
    };

    autocomplete.addListener('place_changed', handlePlaceSelect);

    return () => {
      window.google.maps.event.clearInstanceListeners(autocomplete);
    };
  }, [helpers]);

  return (
    <input
      {...field}
      {...props}
      ref={inputRef}
      placeholder="Enter an address"
    />
  );
};

export default GooglePlacesAutocomplete;
