import React, { useEffect, useLayoutEffect, useState } from "react";

function Episode0() {
  const [pagePainted, setPagePainted] = useState(false);

  // I partly think this is ungodly, but it works.
  useLayoutEffect(() => {
    if (pagePainted) return;
    setPagePainted(true);
    console.log("comments", pagePainted);
    let script = document.createElement("script");
    let anchor = document.getElementById("utterances-comments");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", "concurrencypod/episode-0");
    script.setAttribute("issue-term", "comment");
    script.setAttribute("theme", "github-dark");
    anchor.appendChild(script);
    if (anchor.childElementCount > 1) {
      anchor.removeChild(anchor.firstChild);
    }
  }, []);
  return (
    <div className="bg-zinc-100	w-100 m-0 p-2 min-h-screen pt-12">
      <div style={{ width: "100%" }}>
        <div className="flex flex-col justify-center items-center ml-12">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/4hHPmf8L9GLQzb4cA1O4ab?utm_source=generator"
          width="70%"
          height="180"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        </div>
        
        <div
          id="utterances-comments"
          className="flex flex-col items-center justify-center"
        ></div>
      </div>
    </div>
  );
}

export default Episode0;
