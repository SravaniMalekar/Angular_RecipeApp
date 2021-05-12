export class User{
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date ){

    }

    //getter- accessed like a property
    //code runs when property is accessed
    //no overwrite
    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null
        }
        return this._token;
    }
}