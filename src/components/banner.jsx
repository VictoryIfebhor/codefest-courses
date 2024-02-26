import bannerImage from "../assets/Banner.jpg";

export const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Codefest Institute Banner" />
    </div>
  );
};
