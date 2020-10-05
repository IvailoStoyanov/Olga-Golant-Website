import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <nav id="navigation">
            <ul>
              <li><a class="logo" href="index.html" title="home page">O.G</a></li>
              <li><a href="index.html">Home</a></li>
              <li><a href="work.html" title="view my work">Work</a></li>
              <li><a href="#aboutMe" title="link to my contact details">About</a></li>
              <li><a href="#contactMe" title="link to my contact details">Contact</a></li>
            </ul>
          </nav>
          <div class="page-header page-header__content--home">
            <h1>Olga Golant</h1>
            <span class="page-header__role">Architect</span>
            <a class="page-header__button" href="#aboutMe">About Me</a> <a class="page-header__button" href="#projects">Feature Work</a>
          </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
