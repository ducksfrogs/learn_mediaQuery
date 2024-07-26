const { series } = require('gulp');


function transpile(cb) {
	cb();
}

function bundle(cb) {
	cb();
}

exports.build = series(transpile, bundle);

