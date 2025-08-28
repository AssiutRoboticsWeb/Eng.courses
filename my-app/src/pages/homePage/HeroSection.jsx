import React from "react";
import HomeBanner from "../../assets/images/HomeBanner.jpg";
const HeroSection = () => {
  return (
    <section
      className="home-Section m-auto mb-5 bg-red-400  
    bg-home-banner bg-cover bg-center bg-center h-screen my-16 relative flex justify-center items-center">
      <div className="over-lay absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
      <div className="content text-white z-50 md:w-2/3   p-5  flex flex-col gap-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center font-black ">
          Engineering Course  <br /> Platform
        </h1>
        <h3 className="text-xl  md:text-2xl lg:text-3xl text-center  ">
          We aim to collect the largest number of courses and explanations
          recorded by teaching assistants and professors, and organize them in
          one place to make it easier for students to access content and study
          effectively.
        </h3>
        {/* <h1 className="text-2xl">مشروع لتجميع شروحات كلية الهندسة في مكان واحد</h1>
        <h3>
          نحاول نجمع أكبر عدد ممكن من الكورسات والشروحات اللي اتسجلت من المعيدين
          والدكاترة، وننظمها في مكان واحد علشان تسهّل على الطلبة الوصول للمحتوى
          والمذاكرة.
        </h3> */}
      </div>
    </section>
  );
};

export default HeroSection
