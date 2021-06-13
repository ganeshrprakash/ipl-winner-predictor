import { Component,  OnInit } from '@angular/core';
import { Team } from '../team';
import { IPL_TEAMS } from '../ipl-teams';
import { AppService } from '../app.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-predictorSubmit',
  templateUrl: 'predictor-submit.html',
})
export class PredictSubmit {}

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})

export class PredictorComponent  implements OnInit {
  
 

  teams = IPL_TEAMS;
  selectedTeam ?: Team;
  dataSemi: { [key: string]: Object }[] = [];
  dataEliminator: { [key: string]: Object }[] = [];
  dataFinal: { [key: string]: Object }[] = [];
  dataWinner: { [key: string]: Object }[] = [];
  public selectedSemiFinalist:any;
  public selectedEliminator:any;
  public selectedFinalist:any;
  public selectedWinner:any;

  isShownSemiFinal: boolean = false ;
  isShownEliminator: boolean = false ;
  isShownFinalist: boolean = false ;
  isShownWinner: boolean = false ;
  
  
  constructor(private appService: AppService, public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(PredictSubmit, {
      data: {
        dialogTitle: 'testy'
      }
    });

   // console.log();

  }


  ngOnInit() {
  }
 
  onSelect(team: Team): void {
    
    let selectedSemifinalist: { [key: string]: Object } = { team };
            
    if(this.dataSemi.length < 4)
    {    

        let isPresent = this.dataSemi.some(function(team){ 
        return team.team == selectedSemifinalist.team});

        if(!isPresent) { this.dataSemi.push(selectedSemifinalist) };
       
     
    }
    this.isShownSemiFinal = true;
    this.selectedTeam = team;
    this.selectedSemiFinalist = this.dataSemi;
       
  }

  onSelectFinal(team: Team): void {
    let selectedfinalistObj: { [key: string]: Object } = { team };

    if(this.dataSemi.length != 4)
    {
        return;
    }

    
            
    if(this.dataEliminator.length < 2)
    {
    let isPresentFinal = this.dataFinal.some(function(team){ 
      return team.team == selectedfinalistObj.team});

    let isPresentElim = this.dataEliminator.some(function(team){ 
        return team.team == selectedfinalistObj.team});

     
      if(this.dataFinal.length === 0)
      {
        this.isShownFinalist = true;
        this.dataFinal.push(selectedfinalistObj);
      } else {
        if(!isPresentFinal && !isPresentElim) { 
          this.isShownEliminator = true;
          this.dataEliminator.push(selectedfinalistObj)
         };
      }
       
     this.selectedEliminator = this.dataEliminator; 
     this.selectedFinalist = this.dataFinal; 
    }
  }

  onSelectEliminator(team: Team): void {
    let selectedfinalistObj: { [key: string]: Object } = { team };    

    if(this.dataEliminator.length != 2)
    {
        return;
    }

    if(this.dataFinal.length < 2)
    {
      let isPresentFinal = this.dataFinal.some(function(team){ 
      return team.team == selectedfinalistObj.team});
      if(!isPresentFinal) { this.dataFinal.push(selectedfinalistObj) };
      this.selectedFinalist = this.dataFinal; 
    }
  }

  onSelectWinner(team: Team): void {
    let selectedfinalistObj: { [key: string]: Object } = { team };
    if(this.dataFinal.length != 2)
    {
        return;
    }
    if(this.dataWinner.length === 0)
      {
        this.isShownWinner = true;
        this.dataWinner.push(selectedfinalistObj);
      } 
      this.selectedWinner = this.dataWinner; 
  }

  reset(): void {
    
     this.isShownSemiFinal = false;
     this.isShownEliminator = false;
     this.isShownFinalist = false;
     this.isShownWinner = false;
     this.dataSemi.length = 0;
     this.dataEliminator.length = 0;
     this.dataFinal.length = 0;
     this.dataWinner.length = 0;

  }


  onSubmit() {

    if(this.dataWinner.length == 1) {
      let data = {'semi-finalist': this.dataSemi,
      'Eliminator': this.dataEliminator,
      'Finalist': this.dataFinal,
      'Winner': this.dataWinner,
    } 
  
      this.appService.addUser(JSON.stringify(data)).subscribe();
      this.openDialog();
      this.reset();
    }

    
  }


}
