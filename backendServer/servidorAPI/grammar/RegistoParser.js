// Generated from Registo.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegistoListener = require('./RegistoListener').RegistoListener;
var grammarFileName = "Registo.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010A\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0002\u00026\u0002\u0016",
    "\u0003\u0002\u0002\u0002\u0004#\u0003\u0002\u0002\u0002\u00060\u0003",
    "\u0002\u0002\u0002\b2\u0003\u0002\u0002\u0002\n4\u0003\u0002\u0002\u0002",
    "\f6\u0003\u0002\u0002\u0002\u000e8\u0003\u0002\u0002\u0002\u0010:\u0003",
    "\u0002\u0002\u0002\u0012<\u0003\u0002\u0002\u0002\u0014>\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002\u0017\u0018\u0005\f",
    "\u0007\u0002\u0018\u0019\u0007\u0004\u0002\u0002\u0019\u001a\u0005\u0004",
    "\u0003\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b\u001c\u0007\u0006",
    "\u0002\u0002\u001c\u001d\u0005\u000e\b\u0002\u001d\u001e\u0007\u0007",
    "\u0002\u0002\u001e\u001f\u0007\u0006\u0002\u0002\u001f \u0005\u0010",
    "\t\u0002 !\u0007\b\u0002\u0002!\"\u0005\u0014\u000b\u0002\"\u0003\u0003",
    "\u0002\u0002\u0002#$\u0007\t\u0002\u0002$%\u0007\u0006\u0002\u0002%",
    "&\u0005\u0006\u0004\u0002&\'\u0007\n\u0002\u0002\'(\u0007\u0006\u0002",
    "\u0002()\u0005\b\u0005\u0002)*\u0007\u000b\u0002\u0002*+\u0007\u0006",
    "\u0002\u0002+,\u0005\n\u0006\u0002,-\u0007\f\u0002\u0002-.\u0007\u0006",
    "\u0002\u0002./\u0005\u0012\n\u0002/\u0005\u0003\u0002\u0002\u000201",
    "\u0007\r\u0002\u00021\u0007\u0003\u0002\u0002\u000223\u0007\r\u0002",
    "\u00023\t\u0003\u0002\u0002\u000245\u0007\u000f\u0002\u00025\u000b\u0003",
    "\u0002\u0002\u000267\u0007\u000e\u0002\u00027\r\u0003\u0002\u0002\u0002",
    "89\u0007\r\u0002\u00029\u000f\u0003\u0002\u0002\u0002:;\u0007\r\u0002",
    "\u0002;\u0011\u0003\u0002\u0002\u0002<=\u0007\r\u0002\u0002=\u0013\u0003",
    "\u0002\u0002\u0002>?\u0007\r\u0002\u0002?\u0015\u0003\u0002\u0002\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'Email'", "':'", "'Curso'", "'Password:'", 
                     "'Nome'", "'Apelido'", "'DataNascimento'", "'Morada'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "TEXT", "NUMBER", "DATE", "WS" ];

var ruleNames =  [ "registo", "personalData", "first_name", "last_name", 
                   "birthdate", "studentID", "email", "course", "location", 
                   "password" ];

function RegistoParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RegistoParser.prototype = Object.create(antlr4.Parser.prototype);
RegistoParser.prototype.constructor = RegistoParser;

Object.defineProperty(RegistoParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RegistoParser.EOF = antlr4.Token.EOF;
RegistoParser.T__0 = 1;
RegistoParser.T__1 = 2;
RegistoParser.T__2 = 3;
RegistoParser.T__3 = 4;
RegistoParser.T__4 = 5;
RegistoParser.T__5 = 6;
RegistoParser.T__6 = 7;
RegistoParser.T__7 = 8;
RegistoParser.T__8 = 9;
RegistoParser.T__9 = 10;
RegistoParser.TEXT = 11;
RegistoParser.NUMBER = 12;
RegistoParser.DATE = 13;
RegistoParser.WS = 14;

RegistoParser.RULE_registo = 0;
RegistoParser.RULE_personalData = 1;
RegistoParser.RULE_first_name = 2;
RegistoParser.RULE_last_name = 3;
RegistoParser.RULE_birthdate = 4;
RegistoParser.RULE_studentID = 5;
RegistoParser.RULE_email = 6;
RegistoParser.RULE_course = 7;
RegistoParser.RULE_location = 8;
RegistoParser.RULE_password = 9;


function RegistoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_registo;
    return this;
}

RegistoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegistoContext.prototype.constructor = RegistoContext;

RegistoContext.prototype.studentID = function() {
    return this.getTypedRuleContext(StudentIDContext,0);
};

RegistoContext.prototype.personalData = function() {
    return this.getTypedRuleContext(PersonalDataContext,0);
};

RegistoContext.prototype.email = function() {
    return this.getTypedRuleContext(EmailContext,0);
};

RegistoContext.prototype.course = function() {
    return this.getTypedRuleContext(CourseContext,0);
};

RegistoContext.prototype.password = function() {
    return this.getTypedRuleContext(PasswordContext,0);
};

RegistoContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterRegisto(this);
	}
};

RegistoContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitRegisto(this);
	}
};




RegistoParser.RegistoContext = RegistoContext;

RegistoParser.prototype.registo = function() {

    var localctx = new RegistoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RegistoParser.RULE_registo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(RegistoParser.T__0);
        this.state = 21;
        this.studentID();
        this.state = 22;
        this.match(RegistoParser.T__1);
        this.state = 23;
        this.personalData();
        this.state = 24;
        this.match(RegistoParser.T__2);
        this.state = 25;
        this.match(RegistoParser.T__3);
        this.state = 26;
        this.email();
        this.state = 27;
        this.match(RegistoParser.T__4);
        this.state = 28;
        this.match(RegistoParser.T__3);
        this.state = 29;
        this.course();
        this.state = 30;
        this.match(RegistoParser.T__5);
        this.state = 31;
        this.password();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PersonalDataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_personalData;
    return this;
}

PersonalDataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PersonalDataContext.prototype.constructor = PersonalDataContext;

PersonalDataContext.prototype.first_name = function() {
    return this.getTypedRuleContext(First_nameContext,0);
};

PersonalDataContext.prototype.last_name = function() {
    return this.getTypedRuleContext(Last_nameContext,0);
};

PersonalDataContext.prototype.birthdate = function() {
    return this.getTypedRuleContext(BirthdateContext,0);
};

PersonalDataContext.prototype.location = function() {
    return this.getTypedRuleContext(LocationContext,0);
};

PersonalDataContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterPersonalData(this);
	}
};

PersonalDataContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitPersonalData(this);
	}
};




RegistoParser.PersonalDataContext = PersonalDataContext;

RegistoParser.prototype.personalData = function() {

    var localctx = new PersonalDataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RegistoParser.RULE_personalData);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(RegistoParser.T__6);
        this.state = 34;
        this.match(RegistoParser.T__3);
        this.state = 35;
        this.first_name();
        this.state = 36;
        this.match(RegistoParser.T__7);
        this.state = 37;
        this.match(RegistoParser.T__3);
        this.state = 38;
        this.last_name();
        this.state = 39;
        this.match(RegistoParser.T__8);
        this.state = 40;
        this.match(RegistoParser.T__3);
        this.state = 41;
        this.birthdate();
        this.state = 42;
        this.match(RegistoParser.T__9);
        this.state = 43;
        this.match(RegistoParser.T__3);
        this.state = 44;
        this.location();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function First_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_first_name;
    return this;
}

First_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
First_nameContext.prototype.constructor = First_nameContext;

First_nameContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

First_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterFirst_name(this);
	}
};

First_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitFirst_name(this);
	}
};




RegistoParser.First_nameContext = First_nameContext;

RegistoParser.prototype.first_name = function() {

    var localctx = new First_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RegistoParser.RULE_first_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(RegistoParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Last_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_last_name;
    return this;
}

Last_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Last_nameContext.prototype.constructor = Last_nameContext;

Last_nameContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

Last_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterLast_name(this);
	}
};

Last_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitLast_name(this);
	}
};




RegistoParser.Last_nameContext = Last_nameContext;

RegistoParser.prototype.last_name = function() {

    var localctx = new Last_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RegistoParser.RULE_last_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(RegistoParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BirthdateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_birthdate;
    return this;
}

BirthdateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BirthdateContext.prototype.constructor = BirthdateContext;

BirthdateContext.prototype.DATE = function() {
    return this.getToken(RegistoParser.DATE, 0);
};

BirthdateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterBirthdate(this);
	}
};

BirthdateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitBirthdate(this);
	}
};




RegistoParser.BirthdateContext = BirthdateContext;

RegistoParser.prototype.birthdate = function() {

    var localctx = new BirthdateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RegistoParser.RULE_birthdate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(RegistoParser.DATE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StudentIDContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_studentID;
    return this;
}

StudentIDContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StudentIDContext.prototype.constructor = StudentIDContext;

StudentIDContext.prototype.NUMBER = function() {
    return this.getToken(RegistoParser.NUMBER, 0);
};

StudentIDContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterStudentID(this);
	}
};

StudentIDContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitStudentID(this);
	}
};




RegistoParser.StudentIDContext = StudentIDContext;

RegistoParser.prototype.studentID = function() {

    var localctx = new StudentIDContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RegistoParser.RULE_studentID);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(RegistoParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_email;
    return this;
}

EmailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmailContext.prototype.constructor = EmailContext;

EmailContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

EmailContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterEmail(this);
	}
};

EmailContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitEmail(this);
	}
};




RegistoParser.EmailContext = EmailContext;

RegistoParser.prototype.email = function() {

    var localctx = new EmailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RegistoParser.RULE_email);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(RegistoParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CourseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_course;
    return this;
}

CourseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CourseContext.prototype.constructor = CourseContext;

CourseContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

CourseContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterCourse(this);
	}
};

CourseContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitCourse(this);
	}
};




RegistoParser.CourseContext = CourseContext;

RegistoParser.prototype.course = function() {

    var localctx = new CourseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RegistoParser.RULE_course);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(RegistoParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_location;
    return this;
}

LocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocationContext.prototype.constructor = LocationContext;

LocationContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

LocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterLocation(this);
	}
};

LocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitLocation(this);
	}
};




RegistoParser.LocationContext = LocationContext;

RegistoParser.prototype.location = function() {

    var localctx = new LocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RegistoParser.RULE_location);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(RegistoParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PasswordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_password;
    return this;
}

PasswordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PasswordContext.prototype.constructor = PasswordContext;

PasswordContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

PasswordContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterPassword(this);
	}
};

PasswordContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitPassword(this);
	}
};




RegistoParser.PasswordContext = PasswordContext;

RegistoParser.prototype.password = function() {

    var localctx = new PasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RegistoParser.RULE_password);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(RegistoParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RegistoParser = RegistoParser;
