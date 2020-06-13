import ServerBase from './ServerBase'

class HttpService extends ServerBase{
	constructor(){
		super()
		this.$$path = {
			indexLists: '/index',
			userRegister: '/user/register',
			userLogin: '/user/login'
		} 	
	}
	
	getIndexLists(params, data){return this.getRequest(this.$$path.indexLists, params, data)}
	userRegister(params, data){return this.postRequest(this.$$path.userRegister, params, data)}
	userLogin(params, data){return this.postRequest(this.$$path.userLogin, params, data)}
}

const $HttpService = new HttpService;

export default $HttpService