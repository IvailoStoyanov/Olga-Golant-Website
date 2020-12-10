import Link from "next/link";

function MainNavigation() {
  return (
    <nav id="navigation">
      <ul>
        <li>
          <Link href="/">
            <a>O.G</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/#content">
            <a>About</a>
          </Link>
        </li>
        <li>
          <a href="#contactInfo">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
