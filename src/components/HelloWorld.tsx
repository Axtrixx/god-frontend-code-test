import React from "react";
import ActionAreaCard from "./ActionAreaCard";
import { Box } from "@mui/material";
import { useLogJSONData } from "./fetchData";

export interface JsonData {
  id: number,
  name: string,
  profession: string,
  imageUrl: string
}


export const HelloWorld = () => {

  const jsonData = useLogJSONData()

  return jsonData ?
    (
      <Box sx={{
        display: "flex",
        justifyContent: "space-evenly"
      }}>{jsonData.map(data => <ActionAreaCard key={data.id} id={0} name={data.name} profession={data.profession} imageUrl={data.imageUrl} />)}</Box>
    ) : <>null</>
};
