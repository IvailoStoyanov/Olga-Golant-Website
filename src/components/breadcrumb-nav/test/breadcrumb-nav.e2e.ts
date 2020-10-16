import { newE2EPage } from '@stencil/core/testing';

describe('breadcrumb-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<breadcrumb-nav></breadcrumb-nav>');

    const element = await page.find('breadcrumb-nav');
    expect(element).toHaveClass('hydrated');
  });
});
