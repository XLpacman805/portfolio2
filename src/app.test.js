const path = require('path');
const isWatchMode = process.argv.includes('--watch');
process.env.indexPath = isWatchMode ? 'http://localhost:8080/' : `file:${path.join(__dirname, '../dist/index.html')}`;

describe('Page Renders', () => {
    beforeAll(async () => {
        await page.goto(process.env.indexPath);
    });

    it ('should render page with expected title', async() => {
        const expected = 'Johnny Meza Front-End Engineer | Austin, TX';
        const title = await page.title();
        expect(title).toMatch(expected);
    });
});

require('./components/navigation/navigation.test.js');