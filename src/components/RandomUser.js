import { useEffect, useState } from "react";
import axios from "axios";
import "./Random.css";
import Pagination from "./Pagination";

const RandomUsers = () => {
  const [data, setData] = useState([]);
  const [loadiing, setLoading] = useState(false);
  const [ , setError] = useState("");
  const [page, setPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        let res = await axios.get(`https://randomuser.me/api/?results=100`);
        console.log(res.data.results);
        setData(res.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchUsers();
  }, []);

  const prevPost = page * usersPerPage;
  const nextPost = prevPost - usersPerPage;
  const currentUsers = data.slice(nextPost, prevPost);

  const paginate = (numOfPage) => setPage(numOfPage);

  return (
    <div className="container">
      <div>{loadiing ? <div>Loading...</div> : null}</div>
      <div>
        {data &&
          currentUsers.map(
            ({ picture, name, gender, dob, phone, email, location }) => (
              <div className="container-grand-child">
                <div className="container-img">
                  <img src={picture.medium} alt="" />
                </div>
                Name: {}
                {name.first} - {name.last} <div>Age: {dob.age} </div>
                <div>Gender: {gender} </div>
                <div>Phone: {phone} </div>
                <div>Email: {email} </div>
                <div>Location: {location.state} </div>
              </div>
            )
          )}
        <div>
          <button
            className="btn"
            disabled={page <= 1}
            aria-disabled={page >= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <button
            className="btn"
            disabled={page >= currentUsers.length - 1}
            aria-disabled={page >= currentUsers - 1}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
          F
          <Pagination
            single={usersPerPage}
            total={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default RandomUsers;
