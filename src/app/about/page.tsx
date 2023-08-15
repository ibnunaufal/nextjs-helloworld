import React from "react";
import Layout from "../../../components/Layout";
import Image from "next/image";
import Socmed from "../../../components/Socmed";
import style from "./style.module.css";

export default function About() {
  const works = [
    {
      companyName: "PT Teknologi Kartu Indonesia",
      companyDescription:
        "A software company that develope integrated financial application for schools, university, or other education institution.",
      url: "https://teknologikartu.com",
      jobTitle: "Mobile Developer",
      jobDescription:
        "Developing and maintain existing and a brand new application.",
      jobPeriod: "Jan 2021 - Now",
    },
    {
      companyName: "PT Angkasa Pura I Bandara Ahmad Yani Semarang",
      companyDescription:
        "A branch of an airport services provider company located in Semarang.",
      url: "https://ahmadyani-airport.com/",
      jobTitle: "Staff Programmer (Internship)",
      jobDescription:
        "Developing and implementing web based app for KIOSK that located in airport.",
      jobPeriod: "Aug 2019 - Oct 2019",
    },
  ];
  const educations = [
    {
      name: "Politeknik Negeri Semarang",
      field: "Diploma of Informatic Engineering (D3 Teknik Informatika)",
      url: "https://web.polines.ac.id/",
      year: "2020",
    },
    {
      name: "SMK Syubbanul Wathon Magelang",
      field: "Computer & Network Engineering (Teknik Komputer Jaringan)",
      url: "https://smksw.sch.id/",
      year: "2017",
    },
  ];
  return (
    <Layout>
      <title>About | Naufal&apos;s Web</title>
      <meta name="description" content="About" />
      <div className="my-10 flex items-center justify-center">
        {/* <Image
          src={"/profile.webp"}
          alt="pp"
          width={200}
          height={200}
          className="rounded-full transition ease-in-out delay-150 hover:scale-150"
        /> */}
        <div className={`${style.image} hover:scale-150`}></div>
      </div>
      <div className="my-10 text-justify">
        <div className="text-2xl font-bold underline">About Me</div>
        <div className="text-md text-gray-300">
          <p className="my-4">
            Hello, I am Naufal. Currently work as Mobile Developer at{" "}
            <a
              href="https://teknologikartu.com"
              className="underline hover:text-purple-500"
              target="_blank"
            >
              PT Teknologi Kartu Indonesia
            </a>
            . I have an IT experience of more than 2 years. But before that, I
            also studied IT major courses in middle school and at university.
          </p>
          <p className="my-4">
            When I have an interest in something, I let my curiosity work by
            itself. My curiosity will guide me to find out and try so hard to
            get it or know it. Fortunately, my interest was fallen into Coding.
            I started it on C Language on Arduino, then Desktop Programming with
            Visual Studio. Growing my skill by learning Web Development using
            Laravel, Mobile Development with Java, and now, I have been addicted
            to Mobile Programming with Kotlin.
          </p>
        </div>
      </div>
      <div className="my-10">
        <div className="text-2xl font-bold underline">Work Experience</div>
        {works.map((works) => {
          return (
            <div key={works.companyName}>
              <div className=" shadow-md rounded py-6 mb-4">
                <h2 className="text-md font-semibold mb-2">
                  <a
                    href={works.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {works.companyName}
                    <span
                      className="ml-2 text-gray-400"
                      title="Opens in a new tab"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>
                </h2>
                <p className="text-gray-400 mb-1">{works.companyDescription}</p>
                <div className="flex items-center text-gray-400 mb-1">
                  <span className="mr-2">👨‍💼</span>
                  <p>{works.jobTitle}</p>
                </div>
                <div className="flex items-center text-gray-400 mb-1">
                  <span className="mr-2">📝</span>
                  <p>{works.jobDescription}</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">📅</span>
                  <p>{works.jobPeriod}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-10">
        <div className="text-2xl font-bold underline">Education</div>
        {educations.map((education) => {
          return (
            <div key={education.name}>
              <div className=" shadow-md rounded py-6 mb-4">
                <h2 className="text-md font-semibold mb-2">
                  <a
                    href={education.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {education.name}
                    <span
                      className="ml-2 text-gray-400"
                      title="Opens in a new tab"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>
                </h2>
                <div className="flex items-center text-gray-400 mb-1">
                  <span className="mr-2">🧑‍🎓</span>
                  <p>{education.field}</p>
                </div>
                <div className="flex items-center text-gray-400 mb-1">
                  <span className="mr-2">📅</span>
                  <p>{education.year}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-10 text-justify">
        <div className="text-2xl font-bold underline">Contact</div>
        <p className="my-4">
          Wanna have collaboration with me? Contact me with{" "}
          <a
            href="mailto:ibnunaufal5758@gmail.com"
            className="underline"
            target="_blank"
          >
            email
          </a>{" "}
          or social media below.
        </p>
        <Socmed></Socmed>
      </div>
    </Layout>
  );
}
