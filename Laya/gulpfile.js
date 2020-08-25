
const gulp = require("gulp");
// var concat = require('gulp-concat'); 
const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');//typescript2 plugin
const glsl = require('rollup-plugin-glsl');
var child_process = require('child_process');
let workSpaceDir = "./";
const uglify = require('gulp-uglify-es').default;
gulp.task("default", function () {
	// 发布时调用编译功能，判断是否点击了编译选项

	return rollup.rollup({
		input: workSpaceDir + '/src/Main.ts',
		onwarn:(waring,warn)=>{
			if(waring.code == "CIRCULAR_DEPENDENCY"){
				console.log("warnning Circular dependency:");
				console.log(waring);
			}
		},
		treeshake: false, //建议忽略
		plugins: [
			typescript({
				tsconfig:workSpaceDir + "tsconfig.json",
				check: true, //Set to false to avoid doing any diagnostic checks on the code
				tsconfigOverride:{compilerOptions:{removeComments: true}},
				include:/.*.ts/,
				cacheRoot: `${workSpaceDir}.rpt2_cache`,
			}),
			glsl({
				// By default, everything gets included
				include: /.*(.glsl|.vs|.fs)$/,
				sourceMap: true,
				compress:false
			}),
			/*terser({
				output: {
				},
				numWorkers:1,//Amount of workers to spawn. Defaults to the number of CPUs minus 1
				sourcemap: false
			})*/        
		]
	}).then(bundle => {
		return bundle.write({
			file: workSpaceDir + '/bin/js/bundle.js',
			format: 'iife',
			name: 'laya',
			sourcemap: true
		});
	}).catch(err=>{
			console.log(err);
		
	})
});

gulp.task('compile', gulp.series('default'));


// gulp.task('android',function()
// {
// 	var command1 =' layanative2refreshres -p android_studio --path ./release/StrayStarShip';
// 	var child1 = child_process.exec(command1);
// })

// gulp.task('ios',function()
// {
// 	var command1 ='layanative2 refreshres -p ios --path ./release/StrayStarShip';
// 	var child1 = child_process.exec(command1);
// })

// gulp.task('laya', function() {   
//     gulp.src('./bin/libs/*.js')//找到项目下paths变量所定义的script文件  
//     // .pipe(uglify())//压缩  
//     .pipe(concat('laya.min.js'))//输入到all.min.js中  
//     .pipe(gulp.dest('./bin/res/libs/'));//指定目录  
// }); 


// 压缩js
gulp.task("compressJs", function () {
	return gulp.src('./bin/js/bundle.js')
		.pipe(uglify({
			mangle: true
		}))
		.on('error', function (err) {
			console.warn(err.toString());
		})
		.pipe(gulp.dest('./bin/js'));
});