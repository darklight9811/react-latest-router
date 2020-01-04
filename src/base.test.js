//Components
import Router 	from '../src/modules/Router';
import Route 	from "../src/modules/Route";
import Link 	from "../src/modules/Link";
import Switch 	from "../src/modules/Switch";

//Helpers
import { testPath } from "../src/helpers/route";

//Guards
import when 		from '../src/guards/when';
import guest 		from '../src/guards/guest';
import logged 		from '../src/guards/logged';

describe('Components present', () => {
	it('Router', () => {
		expect(Router).toBeTruthy();
	});
	
	it('Route', () => {
		expect(Route).toBeTruthy();
	});

	it('Link', () => {
		expect(Link).toBeTruthy();
	});

	it('Switch', () => {
		expect(Switch).toBeTruthy();
	});
});

describe("Path algorythm", () => {
	it("current: / and route: /", () => {
		expect(testPath("/", "/")).toBeTruthy();
	});

	it("current: /test and route: /", () => {
		expect(testPath("/", "/test")).toBeFalsy();
	});

	it("current: /test and route: /what", () => {
		expect(testPath("/what", "/test")).toBeFalsy();
	});

	it("current: /32 and route: /{id}", () => {
		expect(testPath("/{id}", "/32")).toBeTruthy();
	});
});

describe("Guard methods", () => {

	//When

	it("When guard (truthy)", () => {
		const guarddata = {route:{when:true}, router:{}, context:{}};

		expect(when(null, guarddata)).toBeTruthy();
	});

	it("When guard (falsy)", () => {
		const guarddata = {route:{when:false}, router:{}, context:{}};

		expect(when(null, guarddata)).toBeFalsy();
	});

	//Guest

	it("Guest guard (truthy, doesn't contains auth)", () => {
		const guarddata = {route:{}, router:{}, context:{}};

		expect(guest(null, guarddata)).toBeTruthy();
	});

	it("Guest guard (truthy, contains auth field, but not logged)", () => {
		const guarddata = {route:{}, router:{auth:null}, context:{}};

		expect(guest(null, guarddata)).toBeTruthy();
	});

	it("Guest guard (falsy, contains auth field)", () => {
		const guarddata = {route:{}, router:{auth:{id:2}}, context:{}};

		expect(guest(null, guarddata)).toBeFalsy();
	});

	//Logged

	it("Logged guard (falsy, doesn't contains auth)", () => {
		const guarddata = {route:{}, router:{}, context:{}};

		expect(logged(null, guarddata)).toBeFalsy();
	});

	it("Logged guard (falsy, contains auth field, but not logged)", () => {
		const guarddata = {route:{}, router:{auth:null}, context:{}};

		expect(logged(null, guarddata)).toBeFalsy();
	});

	it("Logged guard (truthy, contains auth field)", () => {
		const guarddata = {route:{}, router:{auth:{id:2}}, context:{}};

		expect(logged(null, guarddata)).toBeTruthy();
	});
});