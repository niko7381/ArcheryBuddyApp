import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Collection } from 'src/app/helpers/collections';
import { SpecsheetService } from 'src/app/services/specsheet/specsheet.service';

@Component({
  selector: 'app-specsheet-create',
  templateUrl: './specsheet-create.page.html',
  styleUrls: ['./specsheet-create.page.scss'],
})
export class SpecsheetCreatePage implements OnInit {
  private compound: boolean;
  private recurve: boolean;
  private barbow: boolean;

  // propertys for formgroups
  private arrow: FormGroup;
  private arrowRest: FormGroup;
  private sight: FormGroup;
  private sightRecurve: FormGroup;
  private stringsCompound: FormGroup;
  private stabs: FormGroup;
  private compoundBowConfiguration: FormGroup;
  private barbowRecurveBowConfiguration: FormGroup;
  private plunger: FormGroup; // skjult når compound
  private release: FormGroup;
  private fingerLap: FormGroup;
  private stringRecurveBarbow: FormGroup;

  constructor(
    private fb: FormBuilder,
    private specsheetService: SpecsheetService
  ) {
    // sets the category
    if (this.specsheetService.specsheetCat === 'compound') {
      this.compound = true;
      this.recurve = false;
      this.barbow = false;
    } else if (this.specsheetService.specsheetCat === 'recurve') {
      this.compound = false;
      this.recurve = true;
      this.barbow = false;
    } else if (this.specsheetService.specsheetCat === 'barbow') {
      this.compound = false;
      this.recurve = false;
      this.barbow = true;
    }
  }

  // instantiates the formgroups
  ngOnInit() {
    this.arrow = this.fb.group({
      model: '',
      thickness: '',
      vanesModel: '',
      vanesColor: '',
      vanesSize: '',
      length: '',
      spine: '',
      weigth: '',
      nockSize: '',
      nockModel: '',
      pointModel: '',
      pointWeight: '',
      joules: '',
      speed: ''
    });
    this.arrowRest = this.fb.group({
      model: '',
      settings: ''
    });
    this.sight = this.fb.group({
      numberOfPins: '',
      distance: '',
      model: '',
      settings: ''
    });
    this.sightRecurve = this.fb.group({
      distance: '',
      model: '',
      settings: ''
    });
    this.stringsCompound = this.fb.group({
      cordsInString: '',
      cordsInCable: '',
      cordsInBusCabel: '',
      stringLength: ''
    });
    this.stringRecurveBarbow = this.fb.group({
      cordsInString: '',
      stringLength: ''
    });
    this.stabs = this.fb.group({
      sidestabLength: '',
      sidestabWeight: '',
      sidestabSize: '',
      frontstabSize: '',
      frontstabLength: '',
      frontstabWeight: '',
      otherConfiguration: ''
    });
    this.compoundBowConfiguration = this.fb.group({
      axcelToAxcel: '',
      model: '',
      drawLength: '',
      stringHeight: '',
      drawStrength: '',
      peepheight: ''
    });
    this.barbowRecurveBowConfiguration = this.fb.group({
      model: '',
      rizerModel: '',
      legsModel: '',
      poundsOnLegs: '',
      poundsOnFingers: '',
      drawLenght: ''
    });
    this.plunger = this.fb.group({
      model: '',
      settings: ''
    });
    this.release = this.fb.group({
      model: '',
      settings: ''
    });
    this.fingerLap = this.fb.group({
      model: '',
      adjustments: '',
      leatherType: ''
    });
  }

  // save arrow config
  public async saveArrow() {
    const data = {
      model: this.arrow.value.model,
      thickness: this.arrow.value.thickness,
      vanesModel: this.arrow.value.vanesModel,
      vanesColor: this.arrow.value.vanesColor,
      vanesSize: this.arrow.value.vanesSize,
      length: this.arrow.value.length,
      spine: this.arrow.value.spine,
      weigth: this.arrow.value.weigth,
      nockSize: this.arrow.value.nockSize,
      nockModel: this.arrow.value.nockModel,
      pointModel: this.arrow.value.pointModel,
      pointWeight: this.arrow.value.pointWeight,
      joules: this.arrow.value.joules,
      speed: this.arrow.value.speed,
    };

    this.specsheetService.createSpecsheet(data, Collection.arrow);
  }

  // save arrowRest config
  public async saveArrowRest() {
    const data = {
      model: this.arrowRest.value.model,
      settings: this.arrowRest.value.settings
    };

    this.specsheetService.createSpecsheet(data, Collection.arrowRest);
  }

  public async savesight() {
    const data = {
      numberOfPins: this.sight.value.numberOfPins,
      distance: this.sight.value.distance,
      model: this.sight.value.model,
      settings: this.sight.value.settings
    };

    this.specsheetService.createSpecsheet(data, Collection.compoundSight);
  }

  public async savesightRecurve() {
    const data = {
      distance: this.sightRecurve.value.distance,
      model: this.sightRecurve.value.model,
      settings: this.sightRecurve.value.settings
    };

    this.specsheetService.createSpecsheet(data, Collection.sightRecurve);
  }

  public async savestringsCompound() {
      const data = {
        cordsInString: this.stringsCompound.value.cordsInString,
        cordsInCable: this.stringsCompound.value.cordsInCable,
        cordsInBusCabel: this.stringsCompound.value.cordsInCable,
        stringLength: this.stringsCompound.value.stringLength
      };

      this.specsheetService.createSpecsheet(Collection.stringCompound, data);
  }

  public async savestabs() {
    const data = {
      sidestabLength: this.stabs.value.sidestabLength,
      sidestabWeight: this.stabs.value.sidestabWeight,
      sidestabSize: this.stabs.value.sidestabSize,
      frontstabSize: this.stabs.value.frontstabSize,
      frontstabLength: this.stabs.value.frontstabLength,
      frontstabWeight: this.stabs.value.frontstabWeight,
      otherConfiguration: this.stabs.value.otherConfiguration
    };

    this.specsheetService.createSpecsheet(Collection.stabs, data);
  }

  public async savecompoundBowConfiguration() {
    const data = {
      axcelToAxcel: this.compoundBowConfiguration.value.axcelToAxcel,
      model: this.compoundBowConfiguration.value.model,
      drawLength: this.compoundBowConfiguration.value.drawLength,
      stringHeight: this.compoundBowConfiguration.value.stringHeight,
      drawStrength: this.compoundBowConfiguration.value.drawStrength,
      peepheight: this.compoundBowConfiguration.value.peepheight,
    };

    this.specsheetService.createSpecsheet(Collection.compoundConfig, data);
  }

  public async savebarbowRecurveBowConfiguration() {
    const data = {
      axcelToAxcel: this.barbowRecurveBowConfiguration.value.axcelToAxcel,
      model: this.barbowRecurveBowConfiguration.value.model,
      rizerModel: this.barbowRecurveBowConfiguration.value.rizerModel,
      legsModel: this.barbowRecurveBowConfiguration.value.legsModel,
      poundsOnLegs: this.barbowRecurveBowConfiguration.value.poundsOnLegs,
      poundsOnFingers: this.barbowRecurveBowConfiguration.value.poundsOnFingers,
      drawLenght: this.barbowRecurveBowConfiguration.value.drawLenght,
    };

    this.specsheetService.createSpecsheet(Collection.barbowRecurveBowConfiguration, data);
  }

  public async saveplunger() {
    const data = {
      settings: this.plunger.value.settings,
      model: this.plunger.value.model
    };

    this.specsheetService.createSpecsheet(Collection.plunger, data);
  }

  public async saverelease() {
    const data = {
      settings: this.release.value.settings,
      model: this.release.value.model
    };

    this.specsheetService.createSpecsheet(Collection.release, data);
  }

  public async savefingerLap() {
    const data = {
      model: this.fingerLap.value.model,
      adjustments: this.fingerLap.value.adjustments,
      leatherType: this.fingerLap.value.leatherType
    };

    this.specsheetService.createSpecsheet(Collection.fingerLap, data);
  }

  public async savestringRecurveBarbow() {
    const data = {
      stringLength: this.stringRecurveBarbow.value.stringLength,
      cordsInString: this.stringRecurveBarbow.value.cordsInString
    };

    this.specsheetService.createSpecsheet(Collection.stabs, data);
  }
}
