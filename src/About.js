import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="border-0 m-12 w-1/3">
        <div className="text-5xl p-4">hello!</div>
        <div className="text-xl text-justify">
          Website ini dapat melakukan search repo dari github dengan menggunakan API dari github. Website ini aku buat dengan tujuan belajar html, javascript, dan react. Ide diambil dari-
          <a href="https://github.com/hokkyss/semi-github" className="hover:text-red-500">
            repo github ini.
          </a>
        </div>
      </div>
    );
  }
}

export default About;
