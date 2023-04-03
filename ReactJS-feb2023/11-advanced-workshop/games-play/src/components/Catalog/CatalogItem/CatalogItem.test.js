import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CatalogItem } from './CatalogItem';

describe('Catalog Item Component', () => {
    test('Show title', () => {
        const title = 'Test title';

        render(
            <BrowserRouter>
                <CatalogItem title={title} />
            </BrowserRouter>
        );

        const actualTitle = screen.queryByText(title);
        expect(actualTitle).toBeInTheDocument();
    });

    test('Click on details', async () => {
        global.window = {location: {pathanme: null}};
        const itemId = 'id';
        render(
            <BrowserRouter>
                <CatalogItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Details'));
        expect(global.window.location.pathname).toContain(`/catalog/${itemId}`);
    });
});