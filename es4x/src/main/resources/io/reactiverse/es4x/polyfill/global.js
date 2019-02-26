/**
 *  Copyright 2014-2018 Red Hat, Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License")
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
(function (global) {
  'use strict';

  global.setTimeout = function (callback, timeout) {
    var args = Array.prototype.slice.call(arguments, 2);

    if (Number(timeout) === 0) {
      // special case
      vertx.runOnContext(function (v) {
        callback.apply(global, args);
      });
    } else {
      return vertx.setTimer(Number(timeout), function (t) {
        callback.apply(global, args);
      });
    }
  };

  global.setInterval = function (callback, timeout) {
    var args = Array.prototype.slice.call(arguments, 2);

    if (Number(timeout) === 0) {
      // special case
      vertx.runOnContext(function (v) {
        callback.apply(global, args);
      });
    } else {
      return vertx.setPeriodic(Number(timeout), function (t) {
        callback.apply(global, args);
      });
    }
  };

  global.setImmediate = function (callback) {
    var args = Array.prototype.slice.call(arguments, 1);

    vertx.runOnContext(function (v) {
      callback.apply(global, args);
    });
  };

  global.clearTimeout = function (id) {
    if (id !== undefined) {
      return vertx.cancelTimer(id);
    }
  };

  global.clearInterval = function (id) {
    if (id !== undefined) {
      return vertx.cancelTimer(id);
    }
  };

  global.clearImmediate = function (id) {
    // NO-OP
  };

  const System = Java.type('java.lang.System');

  // process
  var jvmLanguageLevel;
  var pid = undefined;

  try {
    // are we on java > 9
    jvmLanguageLevel = parseInt(System.getProperty('java.specification.version'), 10);
  } catch (e) {
    jvmLanguageLevel = 8;
  }

  if (jvmLanguageLevel >= 9) {
    // try to use the new pid API
    try {
      var ProcessHandle = Java.type('java.lang.ProcessHandle');
      pid = ProcessHandle.current().pid();
    } catch (e) {
      // ignore...
    }
  }

  if (jvmLanguageLevel === 8 || pid === undefined) {
    // try to use the ManagementFactory MXBean
    try {
      var ManagementFactory = Java.type('java.lang.management.ManagementFactory');
      var name = ManagementFactory.getRuntimeMXBean().getName();
      pid = parseInt(name.substring(0, name.indexOf('@')), 10);
    } catch (e) {
      // ignore...
    }
  }

  global.process = {
    env: System.getenv(),
    pid: pid,
    engine: System.getProperty('es4x.engine'),

    exit: function (exitCode) {
      vertx.close(function (res) {
        if (res.failed()) {
          System.exit(-1);
        } else {
          System.exit(exitCode || 0);
        }
      });
    },

    nextTick: function (callback) {
      var args = Array.prototype.slice.call(arguments, 1);
      vertx.runOnContext(function () {
        callback.apply(global, args);
      });
    },

    stdout: System.out,
    stderr: System.err,
    stdin: System.in,
    // non standard
    properties: System.getProperties(),
  }

})(global || this);
