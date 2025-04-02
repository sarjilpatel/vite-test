import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <>Loading....</>
      ) : (
        <div>
          {data.map((item: any) => {
            return (
              <div key={item?.id} className="dataitem">
                <p>{item?.title}</p>
                <p>{item?.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default About;
