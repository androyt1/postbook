import { ILocation } from './location';

export interface IAddress{
    street: string
      suite: string
      city: string
      zipcode: string
      geo:ILocation
}