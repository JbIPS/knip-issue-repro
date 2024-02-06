import type SignatureService from './SignatureService.js'

export default class MyService implements SignatureService {
	foo(): void {
		console.log('foo')
	}
}
