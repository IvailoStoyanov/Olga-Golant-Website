import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
         <div class="hero-container          page-header page-header__content--home">
            <h1>Olga Golant</h1>
            <span class="page-header__role">Architect</span>
            <stencil-route-link url="/#aboutMe">
              <button title="to the info">About Me</button>
            </stencil-route-link>
            <stencil-route-link url="/work">
              <button title="to the info">Feature Work</button>
            </stencil-route-link>
          </div>
      </div>
    );
  }
}
