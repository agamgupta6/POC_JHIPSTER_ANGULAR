import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'POC3_JHIPSTER_CUSTOMIZE_UI'
        }
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'POC3_JHIPSTER_CUSTOMIZE_UI',
            error403: true
        }
    }
];
