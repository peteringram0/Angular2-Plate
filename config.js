System.config({
  "transpiler": "traceur",
  "traceurOptions": {
    "annotations": true,
    "memberVariables": true,
    "types": true
  },
  "paths": {
    "*": "*.js",
    "github:*": "../jspm_packages/github/*.js",
    "npm:*": "../jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular2": "npm:angular2@2.0.0-alpha.21",
    "gulp": "npm:gulp@3.8.11",
    "gulp-eslint": "npm:gulp-eslint@0.11.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular2@2.0.0-alpha.21": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rtts_assert": "npm:rtts_assert@2.0.0-alpha.21",
      "rx": "npm:rx@2.5.1",
      "traceur": "npm:traceur@0.0.87",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zone.js": "npm:zone.js@0.4.3"
    },
    "npm:argparse@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash": "npm:lodash@3.8.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sprintf-js": "npm:sprintf-js@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:asn1.js@1.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:beeper@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:bufferstreams@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:camelcase-keys@1.0.0": {
      "camelcase": "npm:camelcase@1.0.2",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:chalk@0.5.1": {
      "ansi-styles": "npm:ansi-styles@1.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@0.1.0",
      "strip-ansi": "npm:strip-ansi@0.3.0",
      "supports-color": "npm:supports-color@0.2.0"
    },
    "npm:chalk@1.0.0": {
      "ansi-styles": "npm:ansi-styles@2.0.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "strip-ansi": "npm:strip-ansi@2.0.1",
      "supports-color": "npm:supports-color@1.3.1"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@0.1.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:clone@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:concat-stream@1.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.1",
      "create-ecdh": "npm:create-ecdh@2.0.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:dateformat@1.0.11": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "meow": "npm:meow@3.1.0"
    },
    "npm:debug@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:defaults@1.0.2": {
      "clone": "npm:clone@0.1.19"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:doctrine@0.6.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "esutils": "npm:esutils@1.1.6",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:end-of-stream@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:es5-ext@0.10.7": {
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:es6-iterator@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-symbol": "npm:es6-symbol@2.0.1"
    },
    "npm:es6-map@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-set": "npm:es6-set@0.1.1",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-set@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-symbol@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:es6-symbol@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:es6-weak-map@0.1.4": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@2.0.1"
    },
    "npm:escope@3.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "es6-map": "npm:es6-map@0.1.1",
      "es6-weak-map": "npm:es6-weak-map@0.1.4",
      "esrecurse": "npm:esrecurse@3.1.1",
      "estraverse": "npm:estraverse@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:eslint@0.20.0": {
      "chalk": "npm:chalk@1.0.0",
      "concat-stream": "npm:concat-stream@1.4.8",
      "debug": "npm:debug@2.1.3",
      "doctrine": "npm:doctrine@0.6.4",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "escope": "npm:escope@3.0.1",
      "espree": "npm:espree@2.0.2",
      "estraverse": "npm:estraverse@2.0.0",
      "estraverse-fb": "npm:estraverse-fb@1.3.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "globals": "npm:globals@6.4.1",
      "js-yaml": "npm:js-yaml@3.3.0",
      "minimatch": "npm:minimatch@2.0.7",
      "mkdirp": "npm:mkdirp@0.5.0",
      "object-assign": "npm:object-assign@2.0.0",
      "optionator": "npm:optionator@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "strip-json-comments": "npm:strip-json-comments@1.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "text-table": "npm:text-table@0.2.0",
      "user-home": "npm:user-home@1.1.1",
      "xml-escape": "npm:xml-escape@1.0.0"
    },
    "npm:espree@2.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esrecurse@3.1.1": {
      "estraverse": "npm:estraverse@3.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse-fb@1.3.1": {
      "estraverse": "npm:estraverse@3.1.0"
    },
    "npm:estraverse@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:estraverse@3.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:event-emitter@0.3.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "events": "github:jspm/nodelibs-events@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:findup-sync@0.2.1": {
      "glob": "npm:glob@4.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:first-chunk-stream@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:flagged-respawn@0.3.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:gaze@0.5.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "globule": "npm:globule@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob-stream@3.1.18": {
      "glob": "npm:glob@4.3.5",
      "glob2base": "npm:glob2base@0.0.12",
      "minimatch": "npm:minimatch@2.0.7",
      "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through2": "npm:through2@0.6.5",
      "unique-stream": "npm:unique-stream@1.0.0"
    },
    "npm:glob-watcher@0.0.6": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "gaze": "npm:gaze@0.5.1"
    },
    "npm:glob2base@0.0.12": {
      "find-index": "npm:find-index@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@3.1.21": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "graceful-fs": "npm:graceful-fs@1.2.3",
      "inherits": "npm:inherits@1.0.0",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@4.3.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.7",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globals@6.4.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:globule@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.1.21",
      "lodash": "npm:lodash@1.0.2",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:graceful-fs@1.2.3": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:graceful-fs@3.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:gulp-eslint@0.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferstreams": "npm:bufferstreams@1.0.1",
      "eslint": "npm:eslint@0.20.0",
      "gulp-util": "npm:gulp-util@3.0.4",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through2": "npm:through2@0.6.5"
    },
    "npm:gulp-util@3.0.4": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.2",
      "beeper": "npm:beeper@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@1.0.0",
      "dateformat": "npm:dateformat@1.0.11",
      "lodash._reescape": "npm:lodash._reescape@3.0.0",
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.template": "npm:lodash.template@3.5.1",
      "minimist": "npm:minimist@1.1.1",
      "multipipe": "npm:multipipe@0.1.2",
      "object-assign": "npm:object-assign@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@0.6.5",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:gulp@3.8.11": {
      "archy": "npm:archy@1.0.0",
      "chalk": "npm:chalk@0.5.1",
      "deprecated": "npm:deprecated@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gulp-util": "npm:gulp-util@3.0.4",
      "interpret": "npm:interpret@0.3.10",
      "liftoff": "npm:liftoff@2.0.3",
      "minimist": "npm:minimist@1.1.1",
      "orchestrator": "npm:orchestrator@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pretty-hrtime": "npm:pretty-hrtime@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "semver": "npm:semver@4.3.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tildify": "npm:tildify@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "v8flags": "npm:v8flags@2.0.5",
      "vinyl-fs": "npm:vinyl-fs@0.3.13"
    },
    "npm:has-ansi@0.1.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@1.0.3": {
      "ansi-regex": "npm:ansi-regex@1.1.1",
      "get-stdin": "npm:get-stdin@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:indent-string@1.2.1": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "repeating": "npm:repeating@1.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-utf8@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:js-yaml@3.3.0": {
      "argparse": "npm:argparse@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima": "npm:esprima@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:levn@0.2.5": {
      "prelude-ls": "npm:prelude-ls@1.1.1",
      "type-check": "npm:type-check@0.3.1"
    },
    "npm:liftoff@2.0.3": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "extend": "npm:extend@2.0.1",
      "findup-sync": "npm:findup-sync@0.2.1",
      "flagged-respawn": "npm:flagged-respawn@0.3.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@1.1.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash._basetostring@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.escape@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.0"
    },
    "npm:lodash.isarray@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.isnative@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.keys@3.0.7": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.2",
      "lodash.isnative": "npm:lodash.isnative@3.0.2"
    },
    "npm:lodash.template@3.5.1": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.7",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.0.0",
      "lodash.isnative": "npm:lodash.isnative@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.0.7",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.templatesettings@3.1.0": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.0.0"
    },
    "npm:lodash@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@3.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:meow@3.1.0": {
      "camelcase-keys": "npm:camelcase-keys@1.0.0",
      "indent-string": "npm:indent-string@1.2.1",
      "minimist": "npm:minimist@1.1.1",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.6.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@2.0.7": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optionator@0.5.0": {
      "deep-is": "npm:deep-is@0.1.3",
      "fast-levenshtein": "npm:fast-levenshtein@1.0.6",
      "levn": "npm:levn@0.2.5",
      "prelude-ls": "npm:prelude-ls@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "type-check": "npm:type-check@0.3.1",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:orchestrator@0.3.7": {
      "end-of-stream": "npm:end-of-stream@0.1.5",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sequencify": "npm:sequencify@0.0.7",
      "stream-consume": "npm:stream-consume@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ordered-read-streams@0.1.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@3.0.0": {
      "asn1.js": "npm:asn1.js@1.0.4",
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:repeating@1.1.2": {
      "is-finite": "npm:is-finite@1.0.0",
      "meow": "npm:meow@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rsvp@3.0.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:rtts_assert@2.0.0-alpha.21": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:rx@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:semver@2.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:semver@4.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map-support@0.2.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@0.3.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-ansi@2.0.1": {
      "ansi-regex": "npm:ansi-regex@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-bom@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-utf8": "npm:is-utf8@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-json-comments@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@1.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:tildify@1.0.0": {
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:timers-browserify@1.4.0": {
      "process": "npm:process@0.10.1"
    },
    "npm:traceur@0.0.87": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.3.5",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rsvp": "npm:rsvp@3.0.18",
      "semver": "npm:semver@2.3.2",
      "source-map-support": "npm:source-map-support@0.2.10",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-check@0.3.1": {
      "prelude-ls": "npm:prelude-ls@1.1.1"
    },
    "npm:unique-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:v8flags@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:vinyl-fs@0.3.13": {
      "defaults": "npm:defaults@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob-stream": "npm:glob-stream@3.1.18",
      "glob-watcher": "npm:glob-watcher@0.0.6",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "strip-bom": "npm:strip-bom@1.0.0",
      "through2": "npm:through2@0.6.5",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:vinyl@0.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@0.2.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

