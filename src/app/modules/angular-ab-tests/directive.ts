import { Directive, OnInit, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { AbTestsService } from 'angular-ab-tests';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[abTestVersion]',
})
export class AbTestVersionDirective implements OnInit {
  private versions: string[];
  private scope: string;
  private forCrawlers = false;

  constructor(
    private service: AbTestsService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {}

  ngOnInit() {
    if (this.service.shouldRender(this.versions, this.scope, this.forCrawlers)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  @Input()
  set abTestVersion(value: string) {
    this.versions = value.split(',');
  }

  @Input()
  set abTestVersionScope(value: string) {
    this.scope = value;
  }

  @Input()
  set abTestVersionForCrawlers(value: boolean) {
    this.forCrawlers = value;
  }
}
