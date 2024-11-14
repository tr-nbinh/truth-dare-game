import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnumerablePage } from '../models/enumerable-page.model';
import { PagingRequestModel } from '../models/paging.model';
import { TruthDareModel } from '../models/truth-dare.model';
import { BaseService } from './base.serivce';
import { Constants } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class TruthDareService extends BaseService {

    constructor(public override http: HttpClient) {
        super(http);
    }

    addTruth(request: TruthDareModel): Observable<any> { 
        return this.post('truth', request);
    }

    removeTruth(request: TruthDareModel): Observable<any> { 
        return this.delete(`truth/${request.id}`);
    }

    getTruthsPaging(request: PagingRequestModel): Observable<EnumerablePage<TruthDareModel>> {  
        return this.get(`truth/paging`, request);
    }

    addDare(request: TruthDareModel): Observable<any> { 
        return this.post('dare', request);
    }

    removeDare(request: TruthDareModel): Observable<any> { 
        return this.delete(`dare/${request.id}`);
    }

    getDaresPaging(request: PagingRequestModel): Observable<EnumerablePage<TruthDareModel>> { 
        return this.get(`dare/paging`, request);
    }

    public getRandomDare(): Observable<TruthDareModel>{
        const index = Math.floor(Math.random() * Constants.truths.length);
        const dare = Constants.dares[index];
        return new Observable(subscriber =>  {
            subscriber.next(dare);
            subscriber.complete();
        }) 
    }

    public getRandomTruth(): Observable<TruthDareModel>{
        const index = Math.floor(Math.random() * Constants.truths.length);
        const truth = Constants.truths[index];
        return new Observable(subscriber =>  {
            subscriber.next(truth);
            subscriber.complete();
        }) 
    }

}
