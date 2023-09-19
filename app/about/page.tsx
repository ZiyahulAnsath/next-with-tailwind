"use client";

import { useState, useEffect } from "react";


const About = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");

    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="w-screen mt-1 border-spacing-3 bg-white dark:bg-black dark:text-white">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl font-fantasy">Activities</h5>
        <p className="font-light uppercase xs:text-1xl md:text-2xl dark:text-red-500">
          EduHub Institite Of Technology
        </p>

        {/* Custom style Arbitrary variants [pre difine value]  */}
        <p className="w-3/5 text-center xs:text-[12px] md:text-[24px] font-cursive dark:text-yellow-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          harum provident impedit amet pariatur iure ad aliquid, consequatur
          perferendis officiis non dolore expedita rerum, dolorem commodi
          doloribus. Excepturi, enim ratione?
        </p>
        <div className="flex xs:flex-col md:flex-row justify-center items-center gap-6">
          <img
            className="xs:w-2/3 md:w-1/4 bg-cover shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_1280.jpg"
            alt="img1"
          />
          <img
            className="xs:w-2/3 md:w-1/4 bg-cover shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2017/09/08/00/38/friend-2727307_1280.jpg"
            alt="img2"
          />
          <img
            className="xs:w-2/3 md:w-1/4  bg-cover shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2017/06/23/08/55/board-2433982_1280.jpg"
            alt="img3"
          />
        </div>
        <button className="ring-2 p-2 ring-cyan-900 rounded-md mb-10 hover:bg-cyan-900 hover:text-white"
        onClick={handleThemeSwitch}>
          Dark Mode
        </button>
      </div>
    </section>
  );
};

export default About;
