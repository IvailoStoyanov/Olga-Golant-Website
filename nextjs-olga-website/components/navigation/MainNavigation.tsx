import React, { createRef } from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.scss";
class MainNavigation extends React.Component<{}, { isScrolled: boolean }> {
  private mainNavigation = createRef<HTMLElement>();

  constructor(props: {}) {
    super(props);
    this.mainNavigation = React.createRef();
    this.state = { isScrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e: any) {
    if (e.path[1].scrollY > 100) {
      this.setState(() => ({
        isScrolled: true,
      }));
    } else {
      this.setState(() => ({
        isScrolled: false,
      }));
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  render() {
    return (
      <nav
        id="navigation"
        className={`${styles.Navigation} ${
          this.state.isScrolled ? styles.Navigation___scrolled : ""
        }`}
        ref={this.mainNavigation}
      >
        <ul>
          <li>
            <Link href="/">
              <a className={styles.Logo}>O.G</a>
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
}

export default MainNavigation;
