import { useEffect, useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try{
            
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        };
          fetchData();  
    }, [url]);

  return { data, isLoading, isError}  
};