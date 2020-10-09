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
          <main-navigation></main-navigation>
          {/* <div class="page-header page-header__content--home">
            <h1>Olga Golant</h1>
            <span class="page-header__role">Architect</span>
            <a class="page-header__button" href="#aboutMe">About Me</a> <a class="page-header__button" href="#projects">Feature Work</a>
          </div> */}
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates nostrum perferendis, consequuntur culpa velit aspernatur vel id cupiditate explicabo? Quod quo itaque voluptatibus iusto? Facilis facere vitae cum! Neque!</p>
        </main>
      </div>
    );
  }
}
