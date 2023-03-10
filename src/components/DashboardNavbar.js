import React from "react";
import { Col, Card } from "react-bootstrap";
import { SearchInput } from "./../component/SearchInput";
import { ProfileNotification } from "./../component/ProfileNotification";
import { GreetingProfile } from "./../component/GreetingProfile";
import { Link } from "react-router-dom";

export const DashboardNavbar = ({
  user = { name: "John Doe", email: "johndoe@gmail.com", isVerified: true },
}) => {
  return (
    <Col className="mt-0" xs={12} sm={12} md={12}>
      <Card className="bg-white px-2 dash-nav">
        <Card.Body>
          <div>
            <div className="  py-2 search-and-profile-container">
              <SearchInput />
              <ProfileNotification />
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-2">
              <GreetingProfile />

              <div className="transaction">
                {" "}
                <div className="d-flex justify-content-between">
                  <Link
                    className="btn btn-outline-primary outline mx-1"
                    to="/loan"
                  >
                    Loan money
                  </Link>
                  <Link className="btn btn-primary mx-1" to="/money-transfer">
                    Send money
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
