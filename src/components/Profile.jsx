import React from "react";
import "./Profile.css";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";

function Profile() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section className={`profile-container ${theme}`}>
      <div className="profile-title">
        <h1>{language === "EN" ? "Profile" : "Profil"}</h1>
      </div>
      <div className="profile-content">
        <div className="profile-content-left">
          <h1>{language === "EN" ? "Basic Information" : "Temel Bilgiler"}</h1>
          <p>
            <span>{language === "EN" ? "Birth Date:" : "Doğum Tarihi:"}</span>{" "}
            25.08.1993
          </p>
          <p>
            <span>
              {language === "EN" ? "City of Residence:" : "İkamet Şehri:"}
            </span>{" "}
            İstanbul
          </p>
          <p>
            <span>{language === "EN" ? "Education:" : "Eğitim Durumu:"}</span>{" "}
            Yıldız Teknik Üniversitesi İşletme Lisans 2021
          </p>
          <p>
            <span>
              {language === "EN" ? "Preferred Role:" : "Tercih Ettiği Rol:"}
            </span>{" "}
            Frontend, UI
          </p>
        </div>
        <div className="profile-content-middle">
          <img
            src="https://s3-alpha-sig.figma.com/img/ec36/93fd/2fc15cffc612b2448fb1f38e4c8c72fd?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HPyHc6~8e6KjhN1LsarUumAiPQ3ynziAHInwnzOIgHv0fgVb9FkiuGi0awFyEE6LfK4DOKk~UoA0Io80cQqD~NMAaV3fw7bgVdYwOQeUvLQrt7qoVjPH6QjvXbFlfBvpV1vbdgjFTOZzozkYlJLnZBLRS-kxRJOCReEeYjr6qx7MMjNPs4HFYaceJkCXAIQZFA45eRGGp4zOA8VMyHfnIoH0ExDyOnjugbFiJgaKEA2LMFxK8yd4Cb1hvzpfSbJqcT4GjEn~1aNpntPFaQdOx8WfY1YkPVEYimZ96keWsEinUlboC1Hlbdt1cIjx7TTQ2GS~tlKpHihvzmRNhrNoFA__"
            alt=""
            className="profile-content-middle-img"
          />
        </div>
        <div className="profile-content-right">
          <h1>{language === "EN" ? "About Me" : "Hakkımda"}</h1>
          <p>
            {language === "EN"
              ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia."
              : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia."}
          </p>
          <br />
          <p>
            {language === "EN"
              ? "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
              : "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
