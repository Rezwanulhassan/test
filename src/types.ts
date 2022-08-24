export enum FetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type PostData = {
  flight_number: number;
  mission_name: string;
  launch_year:string,
  details:string,
  links:{
    mission_patch:string,
    article_link:string
  }
};
