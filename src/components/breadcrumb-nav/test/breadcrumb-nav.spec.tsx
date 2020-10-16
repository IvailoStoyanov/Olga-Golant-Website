import { newSpecPage } from '@stencil/core/testing';
import { BreadcrumbNav } from '../breadcrumb-nav';

describe('breadcrumb-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BreadcrumbNav],
      html: `<breadcrumb-nav></breadcrumb-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <breadcrumb-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </breadcrumb-nav>
    `);
  });
});
