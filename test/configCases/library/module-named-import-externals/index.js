import { readFileSync, writeFileSync as aaa } from 'fs'
import * as path from 'path'
import * as fs from 'fs'

const { writeFileSync = aaa } = {}
console.log({ writeFileSync });


{
	const { writeFileSync = aaa } = {}
	console.log({ writeFileSync });
}

it('should handle external modules with concatenation and caching', () => {
	expect(typeof readFileSync).toBe('function');
	const { writeFileSync = aaa } = {}
	expect(typeof writeFileSync).toBe('function');
	expect(typeof path.join).toBe('function');
});

export { readFileSync, writeFileSync, path, fs }