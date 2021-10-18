import useFetch from "./useFetch";
import ReactMarkdown from "react-markdown";
import React from "react";
let RepoReadme = ({ url }) => {
  let { data, isPending, Error } = useFetch(url + "/readme");
  let readme = "";
  // console.log(data == null);
  if (!isPending && !Error && data != null) {
    readme = atob(data.content);
    // readme = markdown.toHTML(readme);
  }
  //   readme = `# Hello, *world*!`;
  return (
    <div className="unreset">
      <ReactMarkdown skipHtml={true}>{readme}</ReactMarkdown>
    </div>
  );
};

export default RepoReadme;
