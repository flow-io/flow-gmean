/**
*
*	STREAM: geometric mean
*
*
*	DESCRIPTION:
*		- Calculates the geometric mean of streamed data.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var reducer = require( 'flow-reduce' );
	var N = 0;
	var rProduct = 1;

	// FUNCTIONS //

	/**
	* FUNCTION: reduce( gmean, data)
	*	Defines the data reduction.
	*
	* @param {number} gmean = current value
	* @param {number} data - numeric stream data
	* @returns {number} reduced data
	*/
	function reduce ( gmean, x ) {
		N++;
		rProduct = rProduct * x;
		gmean = Math.pow( rProduct, 1/N );
		return gmean;
	} // end FUNCTION reduce()


	// STREAM //

	/**
	* FUNCTION: Stream()
	*	Stream constructor.
	*
	* @returns {Object} Stream instance
	*/
	function Stream() {
		return this;
	} // end FUNCTION Stream()

	/**
	* METHOD: bar()
	*	{{ bar description }}.
	*
	* @returns {Stream} Stream instance
	*/
	Stream.prototype.bar = function() {
		return this;
	}; // end METHOD bar()

	/**
	* METHOD: stream()
	*	{{ method description }}
	*
	* @returns {object} {{type of }} stream
	*/
	Stream.prototype.stream = function() {
		return /*stream*/;
	}; // end METHOD stream()


	// EXPORTS //

	module.exports = function createStream() {
		return new Stream();
	};

})();