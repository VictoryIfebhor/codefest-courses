import bannerImage from "../assets/Codefest Banner.jpg";

export const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Codefest Banner" />
    </div>
  );
};
