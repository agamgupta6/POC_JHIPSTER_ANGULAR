import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { Poc3JhipsterCustomizeUiSharedModule } from 'app/shared';
import { Poc3JhipsterCustomizeUiCoreModule } from 'app/core';
import { Poc3JhipsterCustomizeUiAppRoutingModule } from './app-routing.module';
import { Poc3JhipsterCustomizeUiHomeModule } from './home/home.module';
import { Poc3JhipsterCustomizeUiAccountModule } from './account/account.module';
import { Poc3JhipsterCustomizeUiEntityModule } from './entities/entity.module';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';
import { ExternaluiModule } from './externalui/externalui.module';

@NgModule({
    imports: [
        BrowserModule,
        Poc3JhipsterCustomizeUiAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            alertTimeout: 5000
        }),
        Poc3JhipsterCustomizeUiSharedModule.forRoot(),
        Poc3JhipsterCustomizeUiCoreModule,
        Poc3JhipsterCustomizeUiHomeModule,
        Poc3JhipsterCustomizeUiAccountModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        Poc3JhipsterCustomizeUiEntityModule,
        ExternaluiModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class Poc3JhipsterCustomizeUiAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
