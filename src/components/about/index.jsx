import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="container w-full -translate-y-40">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchanment
          </h2>
          <p className="font-light">
          A web developer and digital architect specializing in creating immersive online experiences. With a passion for blending creativity and technology, I turn ideas into digital realities. My mission? To build websites that are as engaging as they are functional—crafted with clean code, intuitive design, and a touch of imagination
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            25+ <sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
              </ItemLayout>
              
              <ItemLayout className={"col-span-full lg:col-span-5 !p-0"}>
                  <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=nagarajtbadiger&theme=transparent&hide_border=true&title_color=fefe5b&text_color=fefefe&icon_color=fefe5b&text_bold=false" alt="Nagaraj T Badiger" loading="lazy" />
              </ItemLayout>
              <ItemLayout className={"col-span-full lg:col-span-7 !p-0"}>
                  <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=nagarajtbadiger&theme=transparent&hide_border=true&title_color=fefe5b&text_color=fefefe&icon_color=fefe5b&text_bold=false" alt="Nagaraj T Badiger" loading="lazy" />
              </ItemLayout>

              <ItemLayout className={"col-span-full lg:col-span-full"}>
                  <img className="w-full h-auto" src="https://skillicons.dev/icons?i=html,css,bootstrap,jquery,js,github,php,react,figma,photoshop,tailwind,vscode,wordpress" alt="Nagaraj T Badiger" loading="lazy" />
              </ItemLayout>

              
              <ItemLayout className={"col-span-full lg:col-span-6 !p-0"}><img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=nagarajtbadiger&theme=dark&hide_border=true&type=svg&background=eb545400&border=FEFE5B00&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" loading="lazy" />
              </ItemLayout>

              
              <ItemLayout className={"col-span-full lg:col-span-6 !p-0"}><img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=nagarajtbadiger&repo=iPhone&theme=transparent&hide_border=true&title_color=fefe5b&text_color=fefefe&icon_color=fefe5b&text_bold=false" alt="GitHub Streak" loading="lazy" />
              </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
