import { NgModule, ModuleWithProviders } from '@angular/core';
import { AbTestsService, CONFIG, CookieHandler, CrawlerDetector, RandomExtractor } from 'angular-ab-tests';
import { AbTestVersionDirective } from './directive';

export interface AbTestOptions {
  versions: string[];
  domain?: string;
  versionForCrawlers?: string;
  scope?: string;
  expiration?: number;
  weights?: {
    [x: string]: number,
  };
}

@NgModule({
  declarations: [
    AbTestVersionDirective,
  ],
  exports: [
    AbTestVersionDirective,
  ],
})
export class AbTestsModule {
  static forRoot(configs: AbTestOptions[]): ModuleWithProviders {
    return {
      ngModule: AbTestsModule,
      providers: [
        AbTestsService,
        { provide: CONFIG, useValue: configs },
        CookieHandler,
        CrawlerDetector,
        RandomExtractor,
      ],
    };
  }
}
