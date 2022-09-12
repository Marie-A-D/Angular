import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commune } from 'src/app/models/commune.model';
import { Departement } from 'src/app/models/departement.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {
  
  departements: Departement[] = []; // J'initialise un tableau pour stocker les infos de l'API
  departementsIsLoading: boolean = false; // définir le chargement des informations
  departementsIsLoaded: boolean = false; //Si les départements sont chargés
  
  //PARTIE POUR LES COMMUNES
  communes: Commune[] = []; 
  communesForGraph: { name: string, value: number }[] = [];
  communesIsLoading: boolean = true; 
  communesIsLoaded: boolean = true; 

  //Pour réaliser un GET, je dois déclarer en PRIVATE le service HttpClient dans le constructor
  constructor(private HttpClient: HttpClient, private toastr: ToastrService) { } //

  /**
   * Fonction qui permet le chargement des départements
   * 
   */
  loadDepartements(): void{ 
    this.departementsIsLoading = true; //Permet de l'état du spinner
    this.toastr.success('Liste des départements chargés', 'Chargement OK')
    //Récupération des données de l'API grâce à une requete GET
     this.HttpClient.get<Departement[]>("https://geo.api.gouv.fr/departements")
     .subscribe( //On doit souscrire aux informations de l'API
      data =>{
        this.departements = data; //Je transfère les données de l'API dans mon tableau vide
        this.departementsIsLoaded = true; //le bouton de chargement disparait 
        this.departementsIsLoading = false; //Un fois les données chargées, le chargement passe à faux
      }
    )
  }

  loadCommunes(codeDepartement:string): void{ 
    this.communesIsLoading = true; 
    this.toastr.success('Liste des communes chargées', 'Chargement OK')
    this.HttpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`)
    
    .subscribe( 
      data =>{
        this.communes = data; 
        this.communesForGraph = data
        .filter(commune => commune.population > 10_000)
        //map transfert les données
        .map(commune =>  {
          return{
            name: commune.nom,
            value: commune.population
          }
        })
        this.communesIsLoaded = true;  
        this.communesIsLoading = false;      
      }
    )
  }

  ngOnInit(): void {
  }






  //return digits  // renvoie [2,0,6,7], OK

  //var croissant=digits.sort();

  //return croissant; // renvoie [0,2,6,7], OK

  //var decroissant=digits;

  //return decroissant; // renvoie [0,2,6,7], OK aussi puisque digits a été trié

  //decroissant.reverse();

  //return decroissant; // renvoie [7,6,2,0], OK

  //return croissant // renvoie [7,6,2,0]

}


