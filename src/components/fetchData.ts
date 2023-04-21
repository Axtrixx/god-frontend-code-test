import { useEffect, useState } from "react";
import { JsonData } from "./HelloWorld";



export function useLogJSONData()  {

    const [jsonData, setJsonData] = useState<JsonData[] | null>(null)

    async function logJSONData()  {
        const response = await fetch("http://localhost:3000/api/employees.json");
        const jsonData = await response.json();
        setJsonData(jsonData)
    }

    useEffect( () => {
        logJSONData()
      }, [])

 return jsonData     
}
