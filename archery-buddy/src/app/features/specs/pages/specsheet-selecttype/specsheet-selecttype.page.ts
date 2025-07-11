import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { el } from 'date-fns/locale';
import { Observable } from 'rxjs';
import { SpecsheetService } from 'src/app/services/specsheet/specsheet.service';

@Component({
  selector: 'app-specsheet-selecttype',
  templateUrl: './specsheet-selecttype.page.html',
  styleUrls: ['./specsheet-selecttype.page.scss'],
})
export class SpecsheetSelecttypePage implements OnInit {

  public catagory$: string;

  private compound: boolean;
  private recurve: boolean;
  private barbow: boolean;

  constructor(
    private router: Router,
    private specsheetService: SpecsheetService,
    private angularFirestore: AngularFirestore
  ) {}

  ngOnInit() {
  }

  // sends user to configur page with info based on selectet bowtype
  goTillConfigerPage() {
    if (this.compound === true) {
      this.catagory$ = 'compound';
      const newUid =  this.angularFirestore.createId();
      this.specsheetService.getCat(this.catagory$);
    } else if(this.recurve === true) {
      this.catagory$ = 'recurve';
      this.specsheetService.getCat(this.catagory$);
    } else if(this.barbow === true) {
      this.catagory$ = 'barbow';
      this.specsheetService.getCat(this.catagory$);
    }
    this.router.navigateByUrl('/specsheet-create', { replaceUrl: true });
  }
}
