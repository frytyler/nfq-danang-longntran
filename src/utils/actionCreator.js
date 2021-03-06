import { REQUEST, SUCCESS, FAILURE } from './constants';

export function createRequestTypes(base) {
	return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`;
		return acc;
	}, {});
}

export function createAction(type, payload = {}) {
	return { type, payload };
}