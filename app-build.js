"bundle";!function(){var a=System.amdDefine;a("app/components/about/about.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".about {\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.14), 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12);\n  padding: 1em; }\n\n@media screen and (min-width: 64em) {\n  .about {\n    margin: 1em; } }\n\n@media screen and (max-width: 64em) {\n  .about {\n    margin: 0.5em; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/about/about.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="app/components/resume-section/resume-section.html"></require><require from="./about.css"></require><resume-section title="about" identifier="about"><div class="about no-print-shadow"><h2>Summary</h2><p style="margin: 0">${resume.about.summary}</p></div></resume-section></template>'})}(),System.register("app/components/about/about.js",["aurelia-framework","app/services/resumeService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.ResumeService}],execute:function(){a("About",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){this.resume=this.resumeService.getResume()},a}())||g)),a("About",h)}}}),function(){var a=System.amdDefine;a("app/components/contact-header/contact-header.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".qr-code {\n  height: 35px;\n  width: 35px;\n  margin-left: 5em; }\n\n.print-page-header {\n  display: table;\n  line-height: 1em;\n  width: 100%;\n  height: 100%;\n  table-layout: fixed; }\n\n.print-header-field {\n  display: table-cell;\n  border-right: 1px solid #000;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 16px;\n  font-weight: 600; }\n"})}(),function(){var a=System.amdDefine;a("app/components/contact-header/contact-header.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="./contact-header.css"></require><div class="print-only"><div class="print-page-header"><span class="print-header-field">${resume.about.name}</span><span class="print-header-field" style="font-size: 14px">${resume.about.email}</span><span class="print-header-field">${resume.about.phone}</span><img class="qr-code" src="images/resume-qr.png"></div><hr></div></template>'})}(),System.register("app/components/contact-header/contact-header.js",["aurelia-framework","app/services/resumeService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.ResumeService}],execute:function(){a("ContactHeader",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){this.resume=this.resumeService.getResume()},a}())||g)),a("ContactHeader",h)}}}),function(){var a=System.amdDefine;a("app/components/contact/contact.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".contact {\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.14), 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12);\n  padding: 1em;\n  font-size: 1.5em; }\n  .contact span {\n    display: block; }\n  .contact i {\n    color: #3f51b5; }\n\n@media screen and (min-width: 64em) {\n  .contact {\n    margin: 1em; } }\n\n@media screen and (max-width: 64em) {\n  .contact {\n    margin: 0.5em; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/contact/contact.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="app/components/resume-section/resume-section.html"></require><require from="./contact.css"></require><resume-section title="contact" identifier="contact" look="no-print"><div class="contact no-print-shadow"><span><i class="fa fa-envelope"></i> ${resume.about.email}</span> <span><i class="fa fa-phone"></i> ${resume.about.phone}</span> <span><a href="${resume.about.github}" target="_blank"><i class="fa fa-github"></i></a></span></div></resume-section></template>'})}(),System.register("app/components/contact/contact.js",["aurelia-framework","app/services/resumeService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.ResumeService}],execute:function(){a("Contact",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){this.resume=this.resumeService.getResume()},a}())||g)),a("Contact",h)}}}),function(){var a=System.amdDefine;a("app/components/education-card/education-card.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".education-card {\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.14), 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12);\n  padding: 1em; }\n  .education-card h2 {\n    display: inline-block;\n    text-decoration: underline; }\n  .education-card a {\n    color: #616161; }\n  .education-card i {\n    color: #3f51b5; }\n"})}(),function(){var a=System.amdDefine;a("app/components/education-card/education-card.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template bindable="education"><require from="./education-card.css"></require><div class="education-card no-print-shadow"><div><h2><a href="${education.link}" target="_blank">${education.school}</a></h2><span>- ${education.location}</span></div><div><span style="display: block"><i class="fa fa-calendar"></i> ${education.date}</span> <span style="display: block">${education.degree}</span></div></div></template>'})}(),function(){var a=System.amdDefine;a("app/components/education/education.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return"@media screen and (min-width: 64em) {\n  .education-section {\n    margin: 1.5em; } }\n\n@media screen and (max-width: 64em) {\n  .education-section {\n    margin: 0.5em; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/education/education.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="app/components/resume-section/resume-section.html"></require><require from="./education.css"></require><require from="app/components/education-card/education-card.html"></require><resume-section title="education" identifier="education"><div class="education-section"><education-card repeat.for="e of resume.education" education.bind="e"></education-card></div></resume-section></template>'})}(),System.register("app/components/education/education.js",["aurelia-framework","app/services/resumeService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.ResumeService}],execute:function(){a("Education",(g=d(f),i=g(h=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){this.resume=this.resumeService.getResume()},a}())||h)),a("Education",i)}}}),function(){var a=System.amdDefine;a("app/components/experience-card/experience-card.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".experience-card {\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.14), 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12); }\n\n.experience-card-content {\n  padding: 1.2em; }\n\n.experience-card-header {\n  margin: 0 1em; }\n  .experience-card-header a {\n    color: #616161; }\n  .experience-card-header h2 {\n    display: inline-block;\n    text-decoration: underline; }\n  .experience-card-header i {\n    color: #3f51b5; }\n\nh2 {\n  margin: 0; }\n\n.experience-date {\n  display: block; }\n\n@media screen and (max-width: 64em) {\n  .experience-card-header h2 {\n    font-size: 1em;\n    margin: 0.5em 0; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/experience-card/experience-card.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="./experience-card.css"></require><require from="app/components/project-card/project-card"></require><div class="experience-card no-print-shadow"><div class="experience-card-header"><a href="${experience.link}" target="_blank"><h2>${experience.company}</h2></a><span>- ${experience.location}</span> <span class="experience-date"><i class="fa fa-calendar"></i> ${experience.date}</span></div><div class="experience-card-content"><project-card repeat.for="p of experience.projects" project.bind="p"></project-card></div></div></template>'})}(),System.register("app/components/experience-card/experience-card.js",["aurelia-framework"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g;return{setters:[function(a){d=a.bindable}],execute:function(){a("ExperienceCard",(e=d("experience"),g=e(f=function a(){c(this,a)})||f)),a("ExperienceCard",g)}}}),function(){var a=System.amdDefine;a("app/components/experience/experience.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return"@media screen and (min-width: 64em) {\n  .experience-section {\n    margin: 1.5em; } }\n\n@media screen and (max-width: 64em) {\n  .experience-section {\n    margin: 0.5em; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/experience/experience.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="app/components/resume-section/resume-section.html"></require><require from="./experience.css"></require><require from="app/components/experience-card/experience-card"></require><resume-section title="experience" identifier="experience"><div class="experience-section" repeat.for="e of resume.experience"><experience-card experience.bind="e"></experience-card></div></resume-section></template>'})}(),System.register("app/components/experience/experience.js",["aurelia-framework","app/services/resumeService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.ResumeService}],execute:function(){a("Experience",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){this.resume=this.resumeService.getResume()},a}())||g)),a("Experience",h)}}}),function(){var a=System.amdDefine;a("app/components/page-menu/page-menu.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".nav {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden; }\n  .nav li {\n    color: #E0E0E0; }\n  .nav a {\n    color: #E0E0E0;\n    height: 100%;\n    width: 100%;\n    text-decoration: none; }\n\n@media screen and (min-width: 64em) {\n  .navbar {\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 300px;\n    background-color: #000033;\n    color: #E0E0E0; }\n  .navbar-header {\n    padding: 1em;\n    white-space: nowrap;\n    overflow: hidden;\n    background-color: #039BE5;\n    height: 5em; }\n    .navbar-header .avatar {\n      height: 4rem;\n      width: 4rem;\n      display: inline-block; }\n    .navbar-header .navbar-header-title {\n      display: inline-block;\n      padding-left: 0.5em; }\n      .navbar-header .navbar-header-title h1 {\n        padding: 0;\n        margin: 0; }\n  .nav li {\n    height: 2.5em;\n    padding: 0 1em;\n    line-height: 2.5em; }\n  .nav span {\n    font-size: 1.3em;\n    font-weight: 500;\n    padding-left: 1em;\n    height: 100%; }\n  .nav a:hover {\n    color: #039BE5; }\n  .nav a:active, .nav a:focus {\n    color: #E0E0E0; }\n  .menu-sm {\n    display: none; }\n  .active {\n    background-color: black; }\n  .page-content {\n    margin-left: 300px; } }\n\n@media screen and (max-width: 64em) {\n  .navbar {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    min-height: 50px;\n    background-color: #222629; }\n  .nav i {\n    display: none; }\n  .nav li {\n    display: none; }\n  .menu-sm {\n    display: inline-block;\n    line-height: 50px;\n    vertical-align: middle;\n    color: #E0E0E0;\n    font-size: 1em;\n    width: 100%;\n    padding: 0 0.5em; }\n    .menu-sm button {\n      color: #E0E0E0;\n      font-size: 1.2em;\n      background-color: #222629;\n      border: 0 #222629; }\n  .menu-sm-title {\n    position: absolute;\n    right: 1em; }\n  .expand li {\n    display: block;\n    margin: 1em; }\n  .navbar-header {\n    display: none; }\n  .page-content {\n    margin-top: 50px; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/page-menu/page-menu.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="./page-menu.css"></require><nav class="navbar no-print"><div class="navbar-header"><img class="avatar" src="images/avatar.png"><div class="navbar-header-title"><h1>Michael Hill</h1><span>Software Systems Engineer</span></div></div><div class="menu-sm"><button click.trigger="_onToggleMenuClick()"><i class="fa fa-bars"></i></button> <span class="menu-sm-title">Michael Hill</span></div><ul class="${navClass}" click.delegate="_onMenuItemClick()"><li><a href="#about"><i class="fa fa-pencil" style="color: #FFFF00"></i><span>About</span></a></li><li><a href="#skills"><i class="fa fa-wrench" style="color: #e600e5"></i><span>Skills</span></a></li><li><a href="#experience"><i class="fa fa-th-list" style="color: #e60000"></i><span>Experience</span></a></li><li><a href="#projects"><i class="fa fa-laptop" style="color: #0052cc"></i><span>Projects</span></a></li><li><a href="#education"><i class="fa fa-graduation-cap" style="color: #FF5722"></i><span>Education</span></a></li><li><a href="#contact"><i class="fa fa-envelope" style="color: #00cc00"></i><span>Contact</span></a></li></ul></nav></template>'})}(),System.register("app/components/page-menu/page-menu.js",["aurelia-router","aurelia-framework"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.Router},function(a){e=a.inject}],execute:function(){a("PageMenu",(f=e(d),h=f(g=function(){function a(b){c(this,a),this.router=b,this.showMenu=!0,this.navClass="nav"}return a.prototype._onToggleMenuClick=function(){"nav"==this.navClass?this.navClass+=" expand":this.navClass="nav"},a.prototype._onMenuItemClick=function(){return this._onToggleMenuClick(),!0},a}())||g)),a("PageMenu",h)}}}),function(){var a=System.amdDefine;a("app/components/project-card/project-card.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".project-header h3 {\n  margin: 0.5em 0;\n  color: #616161;\n  font-weight: 400;\n  font-size: 1.2em; }\n\n.project-header span {\n  display: block; }\n\n.project-card {\n  margin: 0.5em 0;\n  padding: 0 0.5em;\n  border-radius: 5px;\n  border: 2px solid #616161; }\n  .project-card i {\n    color: #3f51b5; }\n\n.project-content {\n  margin: 0.5em 0; }\n  .project-content span {\n    display: block; }\n\n@media print {\n  .project-card {\n    border: none; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/project-card/project-card.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="./project-card.css"></require><div class="project-card"><div class="project-header"><h3>${project.name}</h3><span if.bind="project.date"><i class="fa fa-calendar"></i> ${project.date}</span> <span if.bind="project.role"><i class="fa fa-tag"></i> ${project.role}</span></div><hr><div class="project-content"><div><span>${project.description}</span></div><hr><div><table><tr repeat.for="w of project.work"><td style="vertical-align: top"><i class="fa fa-dot-circle-o"></i></td><td><span>${w}</span></td></tr></table></div></div></div></template>'})}(),System.register("app/components/project-card/project-card.js",["aurelia-framework"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g;return{setters:[function(a){d=a.bindable}],execute:function(){a("ProjectCard",(e=d("project"),g=e(f=function a(){c(this,a)})||f)),a("ProjectCard",g)}}}),function(){var a=System.amdDefine;a("app/components/projects/projects.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".project-section {\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.14), 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12);\n  padding: 1em; }\n  .project-section span {\n    display: block; }\n  .project-section i {\n    color: #3f51b5; }\n\n@media screen and (min-width: 64em) {\n  .project-section {\n    margin: 1em; } }\n\n@media screen and (max-width: 64em) {\n  .project-section {\n    margin: 0.5em; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/projects/projects.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template bindable="projects"><require from="app/components/resume-section/resume-section.html"></require><require from="./projects.css"></require><require from="app/components/project-card/project-card"></require><resume-section title="projects" identifier="projects"><div class="project-section no-print-shadow" repeat.for="p of resume.projects"><project-card project.bind="p"></project-card></div></resume-section></template>'})}(),System.register("app/components/projects/projects.js",["aurelia-framework","app/services/resumeService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.ResumeService}],execute:function(){a("Projects",(g=d(f),i=g(h=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){this.resume=this.resumeService.getResume()},a}())||h)),a("Projects",i)}}}),function(){var a=System.amdDefine;a("app/components/resume-section/resume-section.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return'.section-header {\n  height: 7em;\n  background-color: #039BE5;\n  color: #E0E0E0;\n  width: 100%; }\n\n.section-title {\n  line-height: 2.5em;\n  vertical-align: middle;\n  font-size: 3em;\n  font-weight: 500;\n  padding-right: 1rem;\n  text-transform: capitalize; }\n\n.section-part h2 {\n  margin: 0;\n  padding: 19px 0; }\n\n@media screen and (min-width: 64em) {\n  .section-part {\n    padding: 0 1.5rem 1.5rem 1.5rem; } }\n\n@media screen and (max-width: 64em) {\n  section:before {\n    display: block;\n    content: " ";\n    margin-top: -50px;\n    height: 50px;\n    visibility: hidden; }\n  .section-header {\n    height: 50px;\n    background-color: #039BE5;\n    color: #E0E0E0;\n    width: 100%; }\n  .section-title {\n    line-height: 2em;\n    vertical-align: middle;\n    font-size: 1.5em;\n    font-weight: 500;\n    padding-right: 1rem;\n    text-transform: capitalize; }\n  .section-part {\n    padding: 0.5rem; } }\n'})}(),function(){var a=System.amdDefine;a("app/components/resume-section/resume-section.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template bindable="identifier, title, look"><require from="./resume-section.css"></require><section id="${identifier}" title="" class="${look}"><div class="section-header"><span class="section-title pull-right">${title}</span></div><slot></slot></section></template>'})}(),function(){var a=System.amdDefine;a("app/components/skill-card/skill-card.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return".skill-card-footer {\n  text-align: center;\n  overflow: hidden; }\n\n.skill-card-img {\n  text-align: center;\n  font-size: 3em; }\n\n.skill-card {\n  display: inline-block;\n  background-color: #fff;\n  box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.14), 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.12); }\n\n@media screen and (min-width: 64em) {\n  .skill-card {\n    margin: 0.5rem;\n    height: 8.25rem;\n    width: 6.25rem; }\n  .skill-card-img {\n    height: 6.25rem;\n    width: 6.25rem; }\n    .skill-card-img > img {\n      height: 6.25rem;\n      width: 6.25rem; }\n  .skill-card-img {\n    line-height: 7rem;\n    vertical-align: middle; }\n  .skill-card-footer {\n    padding: 0.5rem 0; } }\n\n@media screen and (max-width: 64em) {\n  .skill-card {\n    margin: 0.3rem;\n    height: 6rem;\n    width: 4.75rem; }\n  .skill-card-img, img {\n    height: 4.75rem;\n    width: 4.75rem; }\n  .skill-card-img {\n    line-height: 5rem;\n    vertical-align: middle;\n    font-size: 2em; }\n  .skill-card-footer {\n    padding: 0.2rem 0;\n    font-size: 0.7em; } }\n"})}(),function(){var a=System.amdDefine;a("app/components/skill-card/skill-card.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="./skill-card.css"></require><div class="skill-card no-print"><div class="skill-card-img" id.bind="skill"><div style="padding-top: 0.7em" show.bind="!imageLoaded"><div class="${loaderStyle}" style="font-size: 5px; position: relative; top: 50%; left: 50%; margin-top: 0"></div></div><img show.bind="imageLoaded" style="z-index: 1000" src.bind="imageData"></div><div class="skill-card-footer"><span>${skillName || skill}</span></div></div></template>'})}(),System.register("app/components/skill-card/skill-card.js",["aurelia-framework","app/services/imageService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j,k;return{setters:[function(a){d=a.inject,e=a.bindable},function(a){f=a.ImageService}],execute:function(){a("SkillCard",(g=e("skill"),h=e("loaderStyle"),i=d(f),k=g(j=h(j=i(j=function(){function a(b){c(this,a),this.imageService=b,this.imageData="",this.loaderStyle="loader"}return a.prototype.attached=function(){var a=this;this.imageService.getSkillName(this.skill).then(function(b){a.skillName=b}),this.imageService.getSkillImage(this.skill).then(function(b){a.imageLoaded=!0,a.imageData=b})},a}())||j)||j)||j)),a("SkillCard",k)}}}),function(){var a=System.amdDefine;a("app/components/skills/skills.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="app/components/resume-section/resume-section.html"></require><require from="app/components/skill-card/skill-card"></require><resume-section title="skills" identifier="skills"><div class="section-part"><h2>Languages</h2><span class="print-only">${languages | skillList}</span><skill-card repeat.for="l of languages" skill.bind="l" loader-style="${_getColor($index)}"></skill-card></div><div class="section-part"><h2>Technologies</h2><span class="print-only">${technologies | skillList}</span><skill-card repeat.for="t of technologies" skill.bind="t" loader-style="${_getColor($index)}"></skill-card></div><div class="section-part"><h2>Tools</h2><span class="print-only">${tools | skillList}</span><skill-card repeat.for="t of tools" skill.bind="t" loader-style="${_getColor($index)}"></skill-card></div><div class="section-part"><h2>Data</h2><span class="print-only">${data | skillList}</span><skill-card repeat.for="d of data" skill.bind="d" loader-style="${_getColor($index)}"></skill-card></div><div class="section-part"><h2>Processes</h2><span class="print-only">${processes | skillList}</span><skill-card repeat.for="p of processes" skill.bind="p" loader-style="${_getColor($index)}"></skill-card></div></resume-section></template>'})}(),System.register("app/services/resumeService.js",["aurelia-framework","aurelia-fetch-client","resume.json!text"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.HttpClient},function(a){f=a.default}],execute:function(){a("ResumeService",(g=d(e,f),i=g(h=function(){function a(b,d){c(this,a),this.client=b,this.resume=JSON.parse(d)}return a.prototype.getResume=function(){return this.resume},a}())||h)),a("ResumeService",i)}}}),System.register("app/services/imageService.js",["aurelia-framework","aurelia-fetch-client","imageMap.json!text"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.HttpClient},function(a){f=a.default}],execute:function(){a("ImageService",(g=d(e,f),i=g(h=function(){function a(b,d){c(this,a),this.client=b,this.imageMap=JSON.parse(d)}return a.prototype.getSkillImage=function(a){if(null!=a){var b=this.imageMap[a].path;return null!=b?this.client.fetch(b).then(function(a){return a.blob()}).then(function(a){return URL.createObjectURL(a)}):Promise.reject(new Error("image not found"))}return Promise.reject(new Error("no key specified"))},a.prototype.getSkillName=function(a){return null!=a?Promise.resolve(this.imageMap[a].name):Promise.reject(new Error("no key specified"))},a.getSkillName=function(a){var b=JSON.parse(f);return b[a].name},a}())||h)),a("ImageService",i)}}}),System.register("app/components/skills/skills.js",["aurelia-framework","app/services/resumeService","app/services/imageService"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i,j;return{setters:[function(a){d=a.inject},function(a){e=a.ResumeService},function(a){f=a.ImageService}],execute:function(){a("Skills",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.resumeService=b}return a.prototype.attached=function(){var a=this;this.resume=this.resumeService.getResume(),this.languages=[],this.technologies=[],this.tools=[],this.data=[],this.processes=[];for(var b=this.resume.experience,c=Array.isArray(b),d=0,b=c?b:b[Symbol.iterator]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{if(d=b.next(),d.done)break;e=d.value}for(var f=e,g=f.projects,h=Array.isArray(g),i=0,g=h?g:g[Symbol.iterator]();;){var j;if(h){if(i>=g.length)break;j=g[i++]}else{if(i=g.next(),i.done)break;j=i.value}var k=j;this.languages=this.languages.concat(k.skills.languages.filter(function(b){return a.languages.indexOf(b)==-1})),this.technologies=this.technologies.concat(k.skills.technologies.filter(function(b){return a.technologies.indexOf(b)==-1})),this.tools=this.tools.concat(k.skills.tools.filter(function(b){return a.tools.indexOf(b)==-1})),this.data=this.data.concat(k.skills.data.filter(function(b){return a.data.indexOf(b)==-1})),this.processes=this.processes.concat(k.skills.processes.filter(function(b){return a.processes.indexOf(b)==-1}))}}for(var l=this.resume.projects,m=Array.isArray(l),n=0,l=m?l:l[Symbol.iterator]();;){var o;if(m){if(n>=l.length)break;o=l[n++]}else{if(n=l.next(),n.done)break;o=n.value}var p=o;this.languages=this.languages.concat(p.skills.languages.filter(function(b){return a.languages.indexOf(b)==-1})),this.technologies=this.technologies.concat(p.skills.technologies.filter(function(b){return a.technologies.indexOf(b)==-1})),this.tools=this.tools.concat(p.skills.tools.filter(function(b){return a.tools.indexOf(b)==-1})),this.data=this.data.concat(p.skills.data.filter(function(b){return a.data.indexOf(b)==-1})),this.processes=this.processes.concat(p.skills.processes.filter(function(b){return a.processes.indexOf(b)==-1}))}},a.prototype._getColor=function(a){var b=parseInt(a/4);switch(a-=4*b){case 1:return"loader-success";case 2:return"loader-warn";case 3:return"loader-danger";default:return"loader"}},a}())||h)),a("Skills",i),a("SkillListValueConverter",j=function(){function a(){c(this,a)}return a.prototype.toView=function(a){var b=[];if(null!=a)for(var c=a,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){var g;if(d){if(e>=c.length)break;g=c[e++]}else{if(e=c.next(),e.done)break;g=e.value}var h=g;b.push(f.getSkillName(h))}return b.join(", ")},a}()),a("SkillListValueConverter",j)}}}),System.register("app/main.js",["aurelia-polyfills","whatwg-fetch","aurelia-framework","aurelia-logging-console"],function(a,b){"use strict";function c(a){a.use.standardConfiguration(),a.start().then(function(a){return a.setRoot("app/pages/app",document.body)})}var d,e;return a("configure",c),{setters:[function(a){},function(a){},function(a){d=a.LogManager},function(a){e=a.ConsoleAppender}],execute:function(){d.addAppender(new e),d.setLevel(d.logLevel.warn)}}}),function(){var a=System.amdDefine;a("app/pages/app.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><require from="app/components/page-menu/page-menu"></require><require from="app/components/about/about"></require><require from="app/components/skills/skills"></require><require from="app/components/experience/experience"></require><require from="app/components/projects/projects"></require><require from="app/components/education/education"></require><require from="app/components/contact/contact"></require><require from="app/components/contact-header/contact-header"></require><page-menu></page-menu><div class="page-content"><contact-header></contact-header><about></about><skills></skills><experience></experience><projects></projects><education></education><contact></contact></div></template>'})}(),System.register("app/pages/app.js",["aurelia-framework","aurelia-router","aurelia-fetch-client"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.Router},function(a){f=a.HttpClient}],execute:function(){a("App",(g=d(e,f),i=g(h=function a(b,d){c(this,a),this.router=b,this.httpClient=d,this.router.configure(function(a){a.title="Michael Hill",a.mapUnknownRoutes("pages/app")})})||h)),a("App",i)}}}),function(){var a=System.amdDefine;a("app/styles/site.css!github:systemjs/plugin-text@0.0.11.js",[],function(){return'body {\n  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.42857143;\n  padding: 0;\n  margin: 0;\n  background-color: #E0E0E0; }\n\n.pull-right {\n  float: right; }\n\n.print-only {\n  display: none; }\n\n.loader, .loader-success, .loader-warn, .loader-danger {\n  border: 1em solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 1em solid #039BE5;\n  border-bottom: 1em solid #039BE5;\n  width: 7.5em;\n  height: 7.5em;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin-top: -4.75em;\n  margin-left: -4.75em; }\n\n.loader-success {\n  border-top-color: #4CAF50;\n  border-bottom-color: #4CAF50; }\n\n.loader-warn {\n  border-top-color: #FFEB3B;\n  border-bottom-color: #FFEB3B; }\n\n.loader-danger {\n  border-top-color: #F44336;\n  border-bottom-color: #F44336; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n\n@media print {\n  body {\n    font-size: 12px; }\n  .no-print {\n    display: none !important; }\n  .print-only {\n    display: initial; }\n  .no-print-shadow {\n    box-shadow: none !important; } }\n'})}();