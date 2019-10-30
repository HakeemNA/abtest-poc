import { NgModule } from '@angular/core';
import { AbTestsModule, AbTestOptions } from './modules/angular-ab-tests/module';

export const abTestsOptions: AbTestOptions[] = [
  {
    versions: ['old', 'new'],
    versionForCrawlers: 'old',
    weights: { old: 50 },
    scope: 'default',
  },
  {
    versions: ['old2', 'new2'],
    versionForCrawlers: 'new2',
    weights: { new2: 99 },
    scope: 'ages',
  },
];

@NgModule({
  imports: [
    AbTestsModule.forRoot(abTestsOptions),
  ],
})
export class TestsModule {}
