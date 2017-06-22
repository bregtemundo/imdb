/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      'angular2-swiper': 'node_modules/angular2-swiper',
      'swiper': 'node_modules/swiper',
      'jquery': 'node_modules/jquery',
      'scrollreveal': 'node_modules/scrollreveal',
      'ng-scrollreveal': 'node_modules/ng-scrollreveal',
      'ng2-youtube-player': 'node_modules/ng2-youtube-player'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-swiper': {
        main: 'dist/index.js',
        defaultExtension: 'js'
      },
      swiper: {
        main: 'dist/js/swiper.js',
        defaultExtension: 'js'
      },
      jquery: {
        main: 'dist/jquery.min.js'
      },
      scrollreveal: {
        main: 'dist/scrollreveal.min.js'
      },
      'ng-scrollreveal': {
        main: 'bundles/ng-scrollreveal.umd.js'
      },
      'ng2-youtube-player': {
        main: 'bundles/ng2-youtube-player.umd.min.js'
      }
    }
  });
})(this);
