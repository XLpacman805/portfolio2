const URL = process.env.indexPath;
const deviceSizes = require('../../deviceSizes.json');

const openSlideout = async (page) => {
    const button = await page.$('button.open-slideout');
    return button.click();
}

describe('NavigationSlideout', () => {
    beforeAll(async () => {
        await page.setViewport(deviceSizes.mobile);
        await page.goto(URL);
    });

    it('should open', async () => {
        await openSlideout(page);
        const slideoutNav = await page.$('navigation-slideout-jmdev');
        expect(slideoutNav).toBeTruthy();
    });

    it ('should close', async () => {
        const closeButton = await page.$('button.close-slideout');
        await closeButton.click();
        const slideoutNav = await page.$('navigation-slideout-jmdev');
        expect(slideoutNav).toBeFalsy();
    });

    it ('should render new content when selecting an item', async () => {
        await openSlideout(page);
        const selector = 'navigation-slideout-jmdev ul.navigation-slideout-menu > li:not(.active)';
        const key  = await page.$$eval(selector, (el) => {
            return el[0].dataset.id;
        });

        const menuItem0 = await page.$(`navigation-slideout-jmdev ul.navigation-slideout-menu > li[data-id="${key}"]`);
        await menuItem0.click();

        const content = await page.$('#' + key);
        expect(content).toBeTruthy();
    });
});