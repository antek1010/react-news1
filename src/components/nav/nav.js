import "./nav.css";

export function Nav() {
  const handleInput = (e) => {
    console.log("kliknięto: ", e.target.value);
  };

  return (
    <nav>
      <span>
        <i className="fa-brands fa-apple"></i>
      </span>

      <ul>
        <li>
          <input placeholder="search" onChange={handleInput}></input>
        </li>
        <li>
          <i className="fa-solid fa-gauge"></i>
          DASHBOARD
        </li>
        <li>
          <i className="fa-solid fa-newspaper"></i>
          NEWS
        </li>
        <li>
          <i className="fa-solid fa-pizza-slice"></i>
          USERS
        </li>
      </ul>
    </nav>
  );
}