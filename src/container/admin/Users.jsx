import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersGivenTestsRequest } from "../../store/usersGivenTests/userGivenTestsAction";
import SideBar from "../../components/SideBar";

const Users = () => {
  const [sidebar, setSideBar] = useState(true);
  const dispatch = useDispatch();

  const userGivenTests = useSelector(
    (state) => state.userGivenTests.usersGivenTests
  );

  useEffect(() => {
    dispatch(fetchUsersGivenTestsRequest());
  }, [dispatch]);
  return (
    <div>
      <AdminNavbar sidebar={sidebar} setSideBar={setSideBar} />
      <main className="main-container">
        {sidebar && <SideBar />}
        <section className="users-section">
          <h1 className="users-section__header">Users</h1>
          <table>
            <thead>
              <tr>
                <th className="table-header">Sr. No.</th>
                <th className="table-header">Name</th>
                <th className="table-header">Email</th>
                <th className="table-header">No. of Test Given</th>
                <th className="table-header">Latest Score</th>
                <th className="table-header">Action</th>
              </tr>
            </thead>
            <tbody className="table-data" id="user-table-data">
              {userGivenTests.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.tests.length}</td>
                  <td>{user.marks}</td>
                  <td className="table-button">
                    <div className="table-button-div">
                      <Link to={`/users-history/${index}/${user.fullName}`}>
                        View Tests
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="user-test-section"></section>
      </main>
    </div>
  );
};

export default Users;
