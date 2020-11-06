export interface IEvent {
    id:number;
    name:string;
    date:Date;
    time:string;
    price:number;
    image_url:string;
    location?: {
        address:string;
        city:string;
        country:string;
    },
    sessions?: ISession[]

}

export interface ISession {
    id:number;
    name:string;
    presenter:string;
    duration:number;
    level:string;
    abstract:string;
    voters:string[]
}