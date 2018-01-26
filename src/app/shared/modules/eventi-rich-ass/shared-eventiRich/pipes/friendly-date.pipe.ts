import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'friendlyDate'
})
export class FriendlyDatePipe implements PipeTransform {

  /**
   * Restituisce la data in forma friendly. La data odierna diventa 'oggi', la data di ieri diventa 'ieri', altrimenti scrive la data nel formato 'dd/mm' se è di quest'anno, nel formato 'dd/mm/yy' se è in un anno diverso.
   * @param date la data da trasformare
   * @param oreMin se diverso da zero, indica il numero di ore al di sotto del quale l'indicazione della data viene completamente soppressa
   * Il numero di ore viene trasformato in secondi e viene confrontato con la data dello stato del mezzo risultante dal servizio.
   * 
   */
  transform(date: Date, oreMin: number = 0): string {
    let dataMinima = moment().subtract(oreMin, "hours");
    if (oreMin > 0 && moment(date).isAfter(dataMinima) && moment(date).isSame(Date.now(), 'day'))
      return "";

    if (moment(date).add(-1, 'days').isSame(Date.now(), 'day'))
      return "Domani";

    if (moment(date).isSame(Date.now(), 'day'))
      return "Oggi";

    if (moment(date)
      .add(1, 'days')
      .isSame(Date.now(), 'day'))
      return "Ieri";

    if (moment(date)
      .isSame(Date.now(), 'year'))
      return moment(date).format("DD/MM");

    return moment(date).format("DD/MM/YY");
  }
}

