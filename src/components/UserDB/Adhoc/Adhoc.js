import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Adhoc.module.css";

const Adhoc = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/adhoc");
    setUser(result.data);
  };

  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>
            <h3 className={styles.titleBar}>Adhoc Requests</h3>{" "}
          </div>
          <div className="expand-sym">
            {!isActive ? <i class="arrow down"></i> : <i class="arrow up"></i>}
          </div>
        </div>
        <div className="accordion-content">
          {isActive && (
            <div className="container">
              <div className="py-4">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead className={styles.theadDark}>
                      <tr>
                        <th scope="col" className={styles.tableHead}>#</th>
                        <th scope="col" className={styles.tableHead}>Date</th>
                        <th scope="col" className={styles.tableHead}>Pickup Location</th>
                        <th scope="col" className={styles.tableHead}>Pickup Time</th>
                        <th scope="col" className={styles.tableHead}>Drop Location</th>
                        <th scope="col" className={styles.tableHead}>Manager Approval</th>
                        <th scope="col" className={styles.tableHead}>Status</th>
                        <th scope="col" className={styles.tableHead}>Action</th>
                      </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                      {users.map((user, index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td className={styles.tableData}>{user.date}</td>
                          <td className={styles.tableData}>{user.pickupLocation}</td>
                          <td className={styles.tableData}>{user.pickupTime}</td>
                          <td className={styles.tableData}>{user.dropLocation}</td>
                          <td className={styles.tableData}>{user.managerApproval}</td>
                          <td className={styles.tableData}>{user.status}</td>
                          <td className={styles.tableData}>
                          {user.status === "Expired" ? (
                              <>
                                <Link
                                  class="btn btn-primary disabled mr-2"
                                  to={`/dashboard/adhoc/edit/${user.id}`}
                                >
                                  <div style={{ color: "white" , fontSize: "smaller"}}>Edit</div>
                                </Link>
                              </>
                            ) : (
                              <>
                                <Link
                                  class="btn btn-primary mr-2"
                                  to={`/dashboard/adhoc/edit/${user.id}`}
                                >
                                  <div style={{ color: "white" , fontSize: "smaller"}}>Edit</div>
                                </Link>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="add">
                    <Link
                      class="btn btn-primary mr-2"
                      to={"/dashboard/monthly/addadhoc"}
                    >
                      <div style={{ color: "white" }}>Add Adhoc Request</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adhoc;
