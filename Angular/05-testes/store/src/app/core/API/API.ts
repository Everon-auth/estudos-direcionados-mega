import { environment } from "src/environments/environment";


export class API {

  static readonly BASE_URL = environment.BASE_URL

  static readonly CLIENTS = `${API.BASE_URL}`;
}
