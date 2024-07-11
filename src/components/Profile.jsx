import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <>
      <section className="profile-container">
        <div className="profile-title">
          <h1>Profile</h1>
        </div>
        <div className="profile-content">
          <div className="profile-content-left">
            <h1>Basic Information</h1>
            <p>
              <span>Doğum tarihi:</span> 24.03.1993
            </p>
            <p>
              <span>İkamet Şehri:</span> Giresun
            </p>
            <p>
              <span>Eğitim Durumu: </span>
              Eskişehir Osmangazi Ünv. Bilgisayar Müh. Lisans 2022
            </p>
            <p>
              <span>Tercih Ettiği Rol:</span> Frontend,UI
            </p>
          </div>
          <div className="profile-content-middle">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="profile-content-middle-img"
            />
          </div>
          <div className="profile-content-right">
            <h1>About Me</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              {" "}
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
