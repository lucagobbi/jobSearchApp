import {ICompany} from "./ICompany";
import {ILevel} from "./ILevel";

export interface IJobOffer {
  name: string,
  publication_date: string,
  levels: ILevel[],
  company: ICompany
}
