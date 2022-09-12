import { Component, OnInit,Input } from '@angular/core';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'; 
import { Commune } from 'src/app/models/commune.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})


export class CommuneTableComponent implements OnInit {
  @Input() communes: Commune[] = [];
  @Input() communesIsLoaded: boolean = false; 
  @Input() communesIsLoading: boolean = false;
 
  faArrowUpLong=faArrowUpLong;


  currentPage: number = 1;
  search: string = "";
  constructor() { }

  ngOnInit(): void {
  }


getLength(): number{
  return this.communes
  .filter(commune => commune.nom.toLowerCase().includes(this.search.toLowerCase())).length;
}

getCommunes(): Commune[]{
  return this.communes
  .filter(commune => commune.nom.toLowerCase().includes(this.search.toLowerCase()))
  .slice((this.currentPage - 1) * 20, this.currentPage * 20)
}


population(): Commune[] { 
  return this.communes 
  .sort ((a,b) =>{ //le sort associe le a et b avec population et les identifis de type number
  return a.population-b.population
    
  })
  .reverse() //pour orienté le tri du tableau du plus grand au plus petit 
}
}