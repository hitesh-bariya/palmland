import CardOne from "@/components/CardOne";
import CardTwo from "@/components/CardTwo";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../../../pages/components/button";
import { Box, Spinner } from "@chakra-ui/react";

function Properties({ sectionTitle, properties, loading }) {
  const [proprtiesArray, setProprtiesArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const addProprties = () => {
    setProprtiesArray([...proprtiesArray, 1, 2, 3, 4, 5, 6, 7, 8]);
  };
  return (
    <div className="custom__container">
      <div className="custom__row properties__main__container">
        <p className="properties__title">{sectionTitle}</p>
        {!loading && properties && properties.length > 0 ? (
          <>
            <div className="row properties__container">
              {properties.map((property) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 properties__block">
                    <CardOne property={property} />
                  </div>
                );
              })}
            </div>
            <div className="button view__more__button__block">
              <Button
                onClick={addProprties}
                content="View More"
                varient="s__underline"
              ></Button>
            </div>
          </>
        ) : (
          <Box
            h={"200px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {!loading && (properties?.length ?? 0) === 0 ? (
              <p className="properties__title">{`No property`}</p>
            ) : (
              <Spinner size="xl" />
            )}
          </Box>
        )}
      </div>
    </div>
  );
}

export default Properties;
