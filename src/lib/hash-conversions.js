// import { compressToBase64, decompressFromBase64 } from 'lz-string';

import pkg from 'lz-string';
const compressToBase64 = pkg.compressToBase64;
const decompressFromBase64 = pkg.decompressFromBase64; 

export function objectToHash(anyObject) {
	return compressToBase64(JSON.stringify(anyObject));
}

export function hashToObject(hash) {
	const jsObject = JSON.parse(decompressFromBase64(hash));

	if (!jsObject || jsObject.constructor !== Object) {
		throw new Error('Decoded hash should be an object.');
	}

	return jsObject;
}
