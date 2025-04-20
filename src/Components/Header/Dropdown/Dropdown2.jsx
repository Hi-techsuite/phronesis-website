import React from "react";

const Dropdown2 = ({}) => {
  return (
    <div>
      <ul class="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">
            Menu <i class="fas fa-caret-down"></i>
          </a>
          <ul class="sub-menu">
            <li>
              <a href="#">Navel</a>
            </li>
            <li>
              <a href="#">
                Mandarine
                <i class="fas fa-caret-down"></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#">Cara Cara</a>
                </li>
                <li>
                  <a href="#">Tangerine</a>
                </li>
                <li>
                  <a href="#">
                    Others
                    <i class="fas fa-caret-down"></i>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#">Lima</a>
                    </li>
                    <li>
                      <a href="#">Seville</a>
                    </li>
                    <li>
                      <a href="#">Lime</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tangelos</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Our Services</a>
        </li>
        <li>
          <a href="#">
            Gallery
            <i class="fas fa-caret-down"></i>
          </a>
          <ul class="sub-menu">
            <li>
              <a href="#">Yellow Oranges</a>
            </li>
            <li>
              <a href="#">
                Green Oranges
                <i class="fas fa-caret-down"></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#">For Health</a>
                </li>
                <li>
                  <a href="#">Sweet Oranges</a>
                </li>
                <li>
                  <a href="#">Bitter Oranges</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li class="move-right btn">
          <a href="#">Best Pricing</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown2;
