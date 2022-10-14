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
    if(anchor.childElementCount > 1) {
      anchor.removeChild(anchor.firstChild);
    }
  }, []);
  return (
    <div className="bg-cyan-800	w-100 m-0 p-2 min-h-screen">
      <div style={{ width: "100%" }}>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/4hHPmf8L9GLQzb4cA1O4ab?utm_source=generator"
          width="100%"
          height="102"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div>
          <div id="utterances-comments"></div>
        </div>
      </div>
    </div>
  );
}

export default Episode0;
