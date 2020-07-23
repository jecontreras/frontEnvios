import { Component, OnInit } from '@angular/core';
import { UserEnviosService } from 'src/app/servicesComponent/user-envios.service';
import { ToolsService } from '../../services/tools.service';
import { title } from 'process';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.scss']
})
export class PublicoComponent implements OnInit {

  data:any = {};
  disabled:boolean = false;
  leer:any = { activa1: 200 };
  letra:any ={ text: `esto llevara tu negocio a otro nivel ya que el sistema de pago contra entrega aumenta las posiblidades de un mayor numero de ventas ya que esto da seguridad de compra a tus clientes
  NOTA:recaudamos tu dinero y te desembolsamos cada 10 dias haviles (solo cuentan dias de lunes a viernes) (No domingos ni festivos ) 
  Recuerda:en cada desembolso se habra echo efectivo el descuento de fletes de envios, o devoluciones y el valor de costo de cada producto del que allas recibido credito por parte de nuestra fabrica de calzado
  Metodos disponibles para recibir tu desembolso: 
  cuenta de ahorros Bancolombia-ahorro a la mano de bancolombia-nequi
  cuenta de ahorros davivienda-daviplata`};

  foto1: string = "./assets/imagenes/foto1.jpg";
  listaFotos:any = [
    "./assets/imagenes/foto1.jpg",
    "./assets/imagenes/banner1.jpg",
    "./assets/imagenes/banner2.jpg",
    "./assets/imagenes/banner3.jpg",
  ];

  constructor(
    private _userEnvios: UserEnviosService,
    private _tools: ToolsService
  ) { }

  ngOnInit(): void {
    let index:number = 0;
    setInterval(()=>{
      this.foto1 = this.listaFotos[index];
      index++;
      if( index >= 3 ) index = 0;
    },5000);
  }

  registrando(){
    this.disabled = true;
    this._userEnvios.create( this.data ).subscribe( ( res:any )=>{
      console.log( res );
      this._tools.tooast( { title: "Gracias Por registrarse" } );
      this.data = {};
      this.disabled = false;
    },(error)=> this.disabled = false );
  }

}
