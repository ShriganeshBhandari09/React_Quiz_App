import { Link, useParams } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersGivenTestsRequest } from "../../store/usersGivenTests/userGivenTestsAction";

const UsersHistory = () => {
  const [sidebar, setSideBar] = useState(true);

  const { index, fullName } = useParams();

  const userGivenTests = useSelector(
    (state) => state.userGivenTests.usersGivenTests
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersGivenTestsRequest());
  }, [dispatch]);


  const userTests = userGivenTests[index]?.tests;


  return (
    <div>
      <AdminNavbar sidebar={sidebar} setSideBar={setSideBar} />
      <main className="main-container">
        {sidebar && <SideBar />}
        <section className="users-section">
          <h1 className="users-section__header" id="user-name">
            {fullName} | {userGivenTests[index]?.email}
          </h1>
          <table>
            <thead>
              <tr>
                <th className="table-header">Test No.</th>
                <th className="table-header">Test Date</th>
                <th className="table-header">Score</th>
                <th className="table-header">Correct Ans</th>
                <th className="table-header">View Test</th>
              </tr>
            </thead>
            <tbody className="table-data" id="user-test-table-data">
              {userTests?.map((userTest, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{userTest.date}</td>
                  <td>{userTest.marks}</td>
                  <td>{userTest.correctAnswers}</td>
                  <td className="table-button">
                    <div className="table-button-div">
                      <Link to={`/users-testlist/${index}/${fullName}`}>
                        View Tests
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default UsersHistory;
