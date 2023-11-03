import React from "react";
import Link from "next/link";

const MainFooter = () => {
  return (
    <div>
      <div className="footer bg-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                1 Quantum Drive, Dhaka 1229.
                <br />
                Bangladesh
                <br />
                <i className="fa fa-phone fa-lg"></i>: +8801742933775
                <br />
                <i className="fa fa-fax fa-lg"></i>: +8801742933775
                <br />
                <i className="fa fa-envelope fa-lg"></i>:
                <Link
                  href="mailto:jobs@repliq.dev"
                  style={{
                    textDecoration: "none",
                    color: "#0000FF",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  hello@ollyo.com
                </Link>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <Link
                  className="btn btn-social-icon btn-google mx-0 px-2"
                  href="https://google.com/"
                  target="_blank"
                >
                  <i
                    className="fa fa-google-plus"
                    style={{ fontSize: "200%", color: "	#FBF6E0" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-facebook bg-primary mx-auto px-3"
                  href="https://www.facebook.com/profile.php?id="
                  target="_blank"
                >
                  <i
                    className="fa fa-facebook"
                    style={{ fontSize: "150%", color: "white" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-linkedin mx-auto px-2"
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "200%", color: "blue" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-twitter mx-auto px-2"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i
                    className="fa fa-twitter"
                    style={{ fontSize: "200%", color: "#ADD8E6" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-google mx-auto px-2"
                  href="https://youtube.com/"
                  target="_blank"
                >
                  <i
                    className="fa fa-youtube"
                    style={{ fontSize: "200%", color: "#8B0000" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon mx-auto px-2"
                  href="mailto:hello@ollyo.com"
                >
                  <i
                    className="fa fa-envelope-o"
                    style={{ fontSize: "200%", color: " #034B03" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <Link
                href="https://github.com/zakaria-akash"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#0000FF",
                  fontWeight: "bold",
                }}
              >
                © 2023 Zakaria Ibrahim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
