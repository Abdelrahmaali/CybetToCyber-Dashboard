import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, countries2, missingCountries } from "./Countries";
import { useStateContext } from '../src/contexts/ContextProvider';


function WorldMap() {

  const {  currentMode ,currentColor } = useStateContext();
  return (
    <div  style={{ margin: "auto", width: "100%", height: "600px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "600px",
        }}
        backgroundColor={currentColor}
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              initial: { fill: '#d2d6de' }, 
              hover: { fill: {currentColor} },
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: #23bdee"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    clients:${countries[code]}
                    </p>

                    <p>experts:${countries2[code]}<p/>
                    </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color: #23bdee; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
