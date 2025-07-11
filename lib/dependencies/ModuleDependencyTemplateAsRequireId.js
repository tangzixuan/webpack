/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */

class ModuleDependencyTemplateAsRequireId extends ModuleDependency.Template {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(
		dependency,
		source,
		{ runtimeTemplate, moduleGraph, chunkGraph, runtimeRequirements }
	) {
		const dep = /** @type {ModuleDependency} */ (dependency);
		if (!dep.range) return;
		const content = runtimeTemplate.moduleExports({
			module: moduleGraph.getModule(dep),
			chunkGraph,
			request: dep.request,
			weak: dep.weak,
			runtimeRequirements
		});
		source.replace(dep.range[0], dep.range[1] - 1, content);
	}
}

module.exports = ModuleDependencyTemplateAsRequireId;
