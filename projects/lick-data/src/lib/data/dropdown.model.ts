export class Dropdown {

  public index?;

  constructor(public id: string, public name: string, public link?: string) { }

  static restoreData(data: any) {
    data.id = (data.id) ? data.id : null;
    data.name = (data.name) ? data.name : null;
    data.link = (data.link) ? data.link : null;
  }
}

export class Dropdowns {

  professions?= [];
  addressTypes?= [];
  countries?= [];
  creditCardTypes?= [];
}
