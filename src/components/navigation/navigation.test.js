const URL = process.env.indexPath;

describe('nav element renders', () => {
    beforeAll(async () => {
        await page.goto(URL);
    });

    it('should render the nav element', async () => {
        await page.goto(URL);
        const nav = await page.$('nav');
        expect(nav).toBeTruthy();
    });
});
