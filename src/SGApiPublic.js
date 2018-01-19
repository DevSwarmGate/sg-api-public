const SGApi_abstract = require('sg-api-abstract'),
    _makeApi = require('./_makeApi');

module.exports = class SGApiPublic extends SGApi_abstract{
    constructor(token,option){
        super(token,'ApiPublic');
        this._config = this._init(option);
    }

    _init(option){
        if(option !== undefined){
            for(let o in option){
                this[`_${o}`] = option[o];
            }
        }
        return _makeApi(this);
    }

    request(aname,data,cb){
        let submit_data = this._config[aname],
            url = null;

        if(data !== null && data !== undefined && data !== ''){
            submit_data.data = data;
        }
        url = super.getApiUrl(aname,submit_data.urlData);
        super.request(url,submit_data,cb);
    }
};
