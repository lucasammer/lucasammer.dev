const showWork = () => {
  var myWork = document.getElementById("work");
  myWork.scrollIntoView({ behavior: "smooth" });
};

let showcaseData;
(async () => {
  showcaseData = await fetch("public/showcase.json");
  showcaseData = await showcaseData.json();
  showcaseData.projects.forEach((project) => {
    // Create project html object
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project");
    projectContainer.setAttribute("id", project.name);
    projectContainer.style.padding = "15px";
    projectContainer.style.border = "3px antiquewhite solid";
    projectContainer.style.borderRadius = "15px";

    // Create title
    let projectTitle = document.createElement("h3");
    projectTitle.innerText = project.name;

    // Create description
    let projectDesc = document.createElement("p");
    // file deepcode ignore DOMXSS: The input we are getting are from our own file.
    projectDesc.innerHTML = project.desc;
    projectDesc.style.width = "20vw";

    // Create and add newline
    let newline = document.createElement("br");
    projectDesc.appendChild(newline);

    // Create buttons
    project.links.forEach((link) => {
      // Create button object
      let button = document.createElement("button");

      // Create link object
      let href = document.createElement("a");
      href.href = link.url;
      href.target = "_blanc";

      // Add text to button
      button.innerText = link.name;

      // Add class to button
      button.classList.add("projectButton");

      // Add button to link
      href.appendChild(button);

      // Add button to description
      projectDesc.appendChild(href);
    });

    // Add title to project
    projectContainer.appendChild(projectTitle);
    // ADd description to project
    projectContainer.appendChild(projectDesc);

    // add to document
    document.getElementById("work").appendChild(projectContainer);
  });
})();

const switchTheme = () => {
  const r = document.querySelector("body");
  let h = document.querySelector(":root");
  h = getComputedStyle(h);
  let rs = getComputedStyle(r);
  if (rs.getPropertyValue("--theme") == "light") {
    r.style.setProperty("--theme", "dark");
    r.style.setProperty("--text-color", h.getPropertyValue("--default-text"));
    r.style.setProperty(
      "--background-color",
      h.getPropertyValue("--default-back")
    );
  } else {
    r.style.setProperty("--theme", "light");
    r.style.setProperty("--text-color", h.getPropertyValue("--light-text"));
    r.style.setProperty(
      "--background-color",
      h.getPropertyValue("--light-back")
    );
  }
};
