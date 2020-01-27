// Generated from Registo.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var User = require('../models/users')

// This class defines a complete generic visitor for a parse tree produced by RegistoParser.

function RegistoVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RegistoVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RegistoVisitor.prototype.constructor = RegistoVisitor;

// Visit a parse tree produced by RegistoParser#registo.
RegistoVisitor.prototype.visitRegisto = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#personalData.
RegistoVisitor.prototype.visitPersonalData = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#cds.
RegistoVisitor.prototype.visitCds = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#cadeira.
RegistoVisitor.prototype.visitCadeira = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#first_name.
RegistoVisitor.prototype.visitFirst_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#last_name.
RegistoVisitor.prototype.visitLast_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#birthdate.
RegistoVisitor.prototype.visitBirthdate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#studentID.
RegistoVisitor.prototype.visitStudentID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#email.
RegistoVisitor.prototype.visitEmail = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#course.
RegistoVisitor.prototype.visitCourse = function(ctx) {
  curso = ctx.getText()
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#location.
RegistoVisitor.prototype.visitLocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RegistoParser#password.
RegistoVisitor.prototype.visitPassword = function(ctx) {
  
  return this.visitChildren(ctx);
};

RegistoVisitor.prototype.visitChildren = function(ctx) {

  if (!ctx) {
   return;
 }
 
  if (ctx.children) {
   return ctx.children.map(child => {
         if (child.children && child.children.length != 0) {
           return child.accept(this);
         } else {
           return child.getText();
         }
       });
     }
}



exports.RegistoVisitor = RegistoVisitor;