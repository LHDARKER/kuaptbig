import ServerBase from './ServerBase'

class HttpService extends ServerBase{
	constructor(){
		super()
		this.$$path = {
			userRegister: '/user/register',
			userLogin: '/user/login',
			alltea: '/teaac/all'
		} 	
	}

	userRegister(params, data){return this.postRequest(this.$$path.userRegister, params, data)}
	userLogin(params, data){return this.postRequest(this.$$path.userLogin, params, data)}
	getalltea(params, data){return this.getRequest(this.$$path.alltea, params, data)}
}

const $HttpService = new HttpService;

export default $HttpService