import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    Poc3JhipsterCustomizeUiSharedLibsModule,
    Poc3JhipsterCustomizeUiSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [Poc3JhipsterCustomizeUiSharedLibsModule, Poc3JhipsterCustomizeUiSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [Poc3JhipsterCustomizeUiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Poc3JhipsterCustomizeUiSharedModule {
    static forRoot() {
        return {
            ngModule: Poc3JhipsterCustomizeUiSharedModule
        };
    }
}
