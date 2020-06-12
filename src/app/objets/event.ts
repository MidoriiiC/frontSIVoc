import { Volunteering } from './volunteering';

export class Event {
  public id: number;
  public name: string;
  public image: string;
  public linkVideo: string;
  public contentArticle: string;
  public date: string;
  public hour: string;
  public organizer: string;
  public place: string;
  public volunteerings: Array<Volunteering>;
}