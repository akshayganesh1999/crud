import React, { useEffect, useState } from 'react';
import { getContactApi, deleteContactApi } from '../services/allApi';
import { Link } from 'react-router-dom';

function View() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [del, setDel] = useState({});

  useEffect(() => {
    getData();
  }, [del]);

  const getData = async () => {
    const result = await getContactApi();
    if (result.status === 200) {
      setData(result.data);
      setFilteredData(result.data); // Set the filtered data to the original data initially
    }
  };

  const deletecont = async (id) => {
    const result = await deleteContactApi(id);
    if (result.status === 200) {
      setDel(result);
    }
  };

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="container mt-4">
        <h2>Contact List</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </div>
      </div>
      {
        filteredData.length > 0 ? (
          <div className='table-responsive'>
            <table className="table table-secondary table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Photo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td><img src={item.photo} alt={`${item.name}'s photo`} width={50} className='img-fluid'/></td>
                    <td>
                      <Link to={`/contacts/${item.id}`}>
                        <button className="btn btn-success">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className='text-danger'>No Contacts</h3>
        )
      }
    </>
  );
}

export default View;

