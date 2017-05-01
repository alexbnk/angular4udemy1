export class Host {

  public name: string;
  public ip : string;
  public ha : string;
  public iconUrl : string;
  public type : string;
  public manufacturer: string;
  public location: string;
  public adminUrl: string;
  public adminUser: string;
  public adminPass: string;
  public roles: string;

constructor(name : string, ip: string, ha: string, iconUrl:string, type: string, manufacturer: string, location: string, adminUrl: string, adminUser: string, adminPass: string, roles: string) {
  this.name = name;
  this.ip = ip;
  this.ha = ha ;
  this.iconUrl = iconUrl;
  this.type = type;
  this.manufacturer = manufacturer;
  this.location = location;
  this.adminUrl =  adminUrl;
  this.adminUser = adminUser;
  this.adminPass = adminPass;
  this.roles = roles;
}



}
