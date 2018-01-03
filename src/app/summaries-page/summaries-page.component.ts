import { Component, OnInit } from '@angular/core';
import {DatasourceService} from '../service/DatasourceService';
import {Summary} from '../model/model.summary';
import {ActivatedRoute, Params} from '@angular/router';
import {ConstantService} from '../service/ConstantService';

@Component({
  selector: 'app-summaries-page',
  templateUrl: './summaries-page.component.html',
  styleUrls: ['./summaries-page.component.scss']
})
export class SummariesPageComponent implements OnInit {

  private _summaries: Summary[] = [];
  constructor(private datasourceService: DatasourceService, public constService: ConstantService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.reloadData(this.route.snapshot.params);
    this.route.params.subscribe(params => {
      this.reloadData(params);
    })
  }
  private reloadData(params: Params): void {
    this.summaries = [];
    const type: string = params['type'];
    const key: any = params['key'];
    if ( undefined === type || undefined === key) {
      this.datasourceService
        .loadAllSummaries()
        .subscribe(summaries => this.summaries = summaries);
    }else if ( this.constService.SUMMARY_FOR_CATEGORY === type) {
      this.datasourceService
        .loadCategorySummaries(key)
        .subscribe(summaries => this.summaries = summaries);
    }else if ( this.constService.SUMMARY_FOR_TAG === type) {
      this.datasourceService
        .loadTagSummaries(key)
        .subscribe(summaries => this.summaries = summaries);
    }else if ( this.constService.SUMMARY_FOR_ARCHIVE === type) {
      this.datasourceService
        .loadArchiveSummaries(key)
        .subscribe(summaries => this.summaries = summaries);
    }
  }


  get summaries(): Summary[] {
    return this._summaries;
  }

  set summaries(value: Summary[]) {
    this._summaries = value;
  }
}


