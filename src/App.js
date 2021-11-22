import "./App.css";

function App() {
  const Socials = {
    Data: [
      {
        Id: 1,
        Name: "Messenger",
        Subtitle: "New Message",
        Icon: "fab fa-facebook-messenger",
        Link: "#",
      },
      {
        Id: 2,
        Name: "Whatsapp",
        Subtitle: "",
        Icon: "fab fa-whatsapp",
        Link: "#",
      },
      {
        Id: 3,
        Name: "Facebook",
        Subtitle: "New Friend Request",
        Icon: "fab fa-facebook",
        Link: "#",
      },
      {
        Id: 4,
        Name: "Instagram",
        Subtitle: "Marrie liked your photo ❤️ ",
        Icon: "fab fa-instagram",
        Link: "#",
      },
      {
        Id: 5,
        Name: "Linkedin",
        Subtitle: "New Contact",
        Icon: "fab fa-linkedin",
        Link: "#",
      },
    ],
  };

  const getSocialType = (icon) => {
    switch (icon) {
      case "fab fa-linkedin":
        return "text-blue-500";
      case "fab fa-instagram":
        return "text-pink-400";
      case "fab fa-facebook":
        return "text-blue-700";
      case "fab fa-facebook-messenger":
        return "text-blue-600";
      case "fab fa-whatsapp":
        return "text-green-500";
      default:
        break;
    }
  };
  function openDroupUp() {
    console.log("a", document.getElementById("Content"));
    document.getElementById("Content").classList.toggle("show");
  }

  document.addEventListener("click", function (event) {
    const ignoreClickOnMeElement = document.getElementById("btn");
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (
      !isClickInsideElement &&
      document.getElementById("Content").classList.contains("show")
    ) {
      document.getElementById("Content").classList.remove("show");
    }
  });
  return (
    <div className="App">
      <div className="dropup">
        <button id="btn" className="dropbtn" onClick={openDroupUp}>
          <span className="fa fa-comments btn-icon"></span>
          <span style={{ fontSize: 11 }}>Contact Us</span>
        </button>

        <div id="Content" className="dropup-content">
          <ul>
            {Socials.Data.map((x) => (
              <li key={x.Id} className="content-item">
                <a className="content-link" href={x.Link} target="_blank">
                  <i
                    className={`${x.Icon} content-icon ${getSocialType(
                      x.Icon
                    )}`}
                  ></i>
                  <div className="content-info">
                    <span
                      className={`content-info-name ${getSocialType(x.Icon)}`}
                    >
                      {x.Name}
                    </span>
                    <span className="content-info-subtitle">{x.Subtitle}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
