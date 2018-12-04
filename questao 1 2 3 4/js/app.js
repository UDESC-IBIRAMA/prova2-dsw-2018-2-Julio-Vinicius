const path = 'https://swapi.co/api/vehicles/?search=';

class app{
    constructor(){

        const onResponse = this._onResponse.bind(this);
        const onJsonReady = this._onJsonReady.bind(this);




    }

    _onResponse(msg){
        return msg
    }

    _onJsonReady(json){
        return json;
    }
}