(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{372:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("p",[t._v("Logging is a very common feature for all applications. ES4X does not implement a logger, instead it just uses the logger\nfrom the JDK, also known as "),a("em",[t._v("java util logging")]),t._v(" or "),a("em",[t._v("JUL")]),t._v(". Even the "),a("code",[t._v("console")]),t._v(" object is linked to it, so you can disable\nconsole from logging at a specific level at runtime just by using configuration.")]),t._v(" "),a("p",[t._v("In order to customize the logging, create a file "),a("code",[t._v("logging.properties")]),t._v(" with the configuration as you like. The default\nconfiguration is:")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("handlers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("java.util.logging.ConsoleHandler")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("java.util.logging.ConsoleHandler.formatter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("io.reactiverse.es4x.jul.ES4XFormatter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("java.util.logging.ConsoleHandler.level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("FINEST")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(".level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("INFO")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("io.reactiverse.level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("INFO")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("io.vertx.level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("INFO")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("com.hazelcast.level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("INFO")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("io.netty.util.internal.PlatformDependent.level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("SEVERE")]),t._v("\n")])])]),a("p",[t._v("You can see that there is a custom formatter, this is to offer you a "),a("code",[t._v("ANSI")]),t._v(" color logger. If the formatter is disabled all\nlogs will be in plain text without "),a("code",[t._v("ANSI")]),t._v(" codes.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("To only log warning and errors at runtime, including from the "),a("code",[t._v("console")]),t._v(" object, just level up the level on the console\nhandler.")]),t._v(" "),a("p",[t._v("You can even ship the logs to other locations by adding more handlers.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);