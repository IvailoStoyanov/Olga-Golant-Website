import React, { createRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainNavigation.module.scss";
class MainNavigation extends React.Component<{}, { isScrolled: boolean }> {
  private mainNavigation = createRef<HTMLElement>();

  constructor(props: {}) {
    super(props);
    this.mainNavigation = React.createRef();
    this.state = { isScrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.pageYOffset > 100) {
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
        style={{ opacity: 0 }}
      >
        <ul>
          <li>
            <Link href="/">
              <a className={styles.Logo}>
                <Image
                  src="/logo/logo-mark-white.svg"
                  alt="Olga Golant logo mark"
                  width={30}
                  height={30}
                />
              </a>
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
