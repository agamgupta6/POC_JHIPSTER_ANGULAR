import { NgModule } from '@angular/core';

import { Poc3JhipsterCustomizeUiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Poc3JhipsterCustomizeUiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Poc3JhipsterCustomizeUiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Poc3JhipsterCustomizeUiSharedCommonModule {}
