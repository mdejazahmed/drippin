import { useState } from "react";
import "./search.scss";
import SearchIcon from "@mui/icons-material/Search";

const tabs = [
  {
    id: "CASUAL",
    tab: "Casual",
  },
  {
    id: "STREET",
    tab: "Street",
  },
  {
    id: "FORMAL",
    tab: "Formal",
  },
  {
    id: "ACCESSORIES",
    tab: "Accessories",
  },
  {
    id: "ETHNIC",
    tab: "Ethnic",
  },
];

const Search = () => {
  const [activeTab, setTab] = useState("");

  return (
   
      <div className="searchWrapper">
        <div className="logoContainer">
          <img src="public\assets\logo.png" alt="Logo" />
          <h1>DRIPPIN</h1>
          <p>Explore the drip</p>
        </div>
        {/* filter group */}
        <div className="search">
          <div className="inputContainer">
            <SearchIcon />
            <input type="search" placeholder="What do you want?" />
          </div>
          <ul className="tabContainer">
            {tabs.map((each) => (
              <li key={each.id} onClick={() => setTab(each.id)}>
                <button className={activeTab === each.id ? "active" : ""}>
                  {each.tab}
                </button>
              </li>
            ))}
          </ul>
          <button>Explore the deal of the day</button>
        </div>
      </div>
  );
};

export default Search;
