const URL = process.env.indexPath;
const deviceSizes = require('../../deviceSizes.json');

describe('Recommendations - Mobile', () => {
    beforeAll(async () => {
        await page.setViewport({width: deviceSizes.mobile.width, height: deviceSizes.mobile.height});
        await page.goto(URL);
    });

    it ('Should render', async () => {
        const selector = 'recommendations-jmdev';
        const element = await page.$(selector);
        expect(element).toBeTruthy();
    });

    it ('Should have the correct number of recommendations', async () => {
        const selector = 'recommendations-jmdev';
        const element = await page.$(selector);
        const recommendations = await element.$$('recommendations-jmdev .recommendation');
        expect(recommendations.length).toBe(3);
    });
});