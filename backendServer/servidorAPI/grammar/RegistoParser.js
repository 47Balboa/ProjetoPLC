// Generated from Registo.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegistoListener = require('./RegistoListener').RegistoListener;
var RegistoVisitor = require('./RegistoVisitor').RegistoVisitor;

var grammarFileName = "Registo.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013T\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004;\n\u0004\f\u0004\u000e\u0004",
    ">\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u0002\u0002\u0002H\u0002\u001a\u0003\u0002\u0002",
    "\u0002\u0004*\u0003\u0002\u0002\u0002\u00067\u0003\u0002\u0002\u0002",
    "\bA\u0003\u0002\u0002\u0002\nC\u0003\u0002\u0002\u0002\fE\u0003\u0002",
    "\u0002\u0002\u000eG\u0003\u0002\u0002\u0002\u0010I\u0003\u0002\u0002",
    "\u0002\u0012K\u0003\u0002\u0002\u0002\u0014M\u0003\u0002\u0002\u0002",
    "\u0016O\u0003\u0002\u0002\u0002\u0018Q\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0007\u0003\u0002\u0002\u001b\u001c\u0005\u0010\t\u0002\u001c",
    "\u001d\u0007\u0004\u0002\u0002\u001d\u001e\u0005\u0004\u0003\u0002\u001e",
    "\u001f\u0007\u0005\u0002\u0002\u001f \u0007\u0006\u0002\u0002 !\u0005",
    "\u0012\n\u0002!\"\u0007\u0007\u0002\u0002\"#\u0007\u0006\u0002\u0002",
    "#$\u0005\u0014\u000b\u0002$%\u0007\b\u0002\u0002%&\u0007\u0006\u0002",
    "\u0002&\'\u0005\u0006\u0004\u0002\'(\u0007\t\u0002\u0002()\u0005\u0018",
    "\r\u0002)\u0003\u0003\u0002\u0002\u0002*+\u0007\n\u0002\u0002+,\u0007",
    "\u0006\u0002\u0002,-\u0005\n\u0006\u0002-.\u0007\u000b\u0002\u0002.",
    "/\u0007\u0006\u0002\u0002/0\u0005\f\u0007\u000201\u0007\f\u0002\u0002",
    "12\u0007\u0006\u0002\u000223\u0005\u000e\b\u000234\u0007\r\u0002\u0002",
    "45\u0007\u0006\u0002\u000256\u0005\u0016\f\u00026\u0005\u0003\u0002",
    "\u0002\u00027<\u0005\b\u0005\u000289\u0007\u000e\u0002\u00029;\u0005",
    "\b\u0005\u0002:8\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<",
    ":\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002?@\u0007\u000f\u0002\u0002@\u0007\u0003",
    "\u0002\u0002\u0002AB\u0007\u0010\u0002\u0002B\t\u0003\u0002\u0002\u0002",
    "CD\u0007\u0010\u0002\u0002D\u000b\u0003\u0002\u0002\u0002EF\u0007\u0010",
    "\u0002\u0002F\r\u0003\u0002\u0002\u0002GH\u0007\u0012\u0002\u0002H\u000f",
    "\u0003\u0002\u0002\u0002IJ\u0007\u0011\u0002\u0002J\u0011\u0003\u0002",
    "\u0002\u0002KL\u0007\u0010\u0002\u0002L\u0013\u0003\u0002\u0002\u0002",
    "MN\u0007\u0010\u0002\u0002N\u0015\u0003\u0002\u0002\u0002OP\u0007\u0010",
    "\u0002\u0002P\u0017\u0003\u0002\u0002\u0002QR\u0007\u0010\u0002\u0002",
    "R\u0019\u0003\u0002\u0002\u0002\u0003<"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'Email'", "':'", "'Curso'", "'Cadeiras'", 
                     "'Password:'", "'Nome'", "'Apelido'", "'DataNascimento'", 
                     "'Morada'", "';'", "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "TEXT", "NUMBER", "DATE", 
                      "WS" ];

var ruleNames =  [ "registo", "personalData", "cds", "cadeira", "first_name", 
                   "last_name", "birthdate", "studentID", "email", "course", 
                   "location", "password" ];

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
RegistoParser.T__10 = 11;
RegistoParser.T__11 = 12;
RegistoParser.T__12 = 13;
RegistoParser.TEXT = 14;
RegistoParser.NUMBER = 15;
RegistoParser.DATE = 16;
RegistoParser.WS = 17;

RegistoParser.RULE_registo = 0;
RegistoParser.RULE_personalData = 1;
RegistoParser.RULE_cds = 2;
RegistoParser.RULE_cadeira = 3;
RegistoParser.RULE_first_name = 4;
RegistoParser.RULE_last_name = 5;
RegistoParser.RULE_birthdate = 6;
RegistoParser.RULE_studentID = 7;
RegistoParser.RULE_email = 8;
RegistoParser.RULE_course = 9;
RegistoParser.RULE_location = 10;
RegistoParser.RULE_password = 11;


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

RegistoContext.prototype.cds = function() {
    return this.getTypedRuleContext(CdsContext,0);
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

RegistoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitRegisto(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.RegistoContext = RegistoContext;

RegistoParser.prototype.registo = function() {

    var localctx = new RegistoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RegistoParser.RULE_registo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(RegistoParser.T__0);
        this.state = 25;
        this.studentID();
        this.state = 26;
        this.match(RegistoParser.T__1);
        this.state = 27;
        this.personalData();
        this.state = 28;
        this.match(RegistoParser.T__2);
        this.state = 29;
        this.match(RegistoParser.T__3);
        this.state = 30;
        this.email();
        this.state = 31;
        this.match(RegistoParser.T__4);
        this.state = 32;
        this.match(RegistoParser.T__3);
        this.state = 33;
        this.course();
        this.state = 34;
        this.match(RegistoParser.T__5);
        this.state = 35;
        this.match(RegistoParser.T__3);
        this.state = 36;
        this.cds();
        this.state = 37;
        this.match(RegistoParser.T__6);
        this.state = 38;
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

PersonalDataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitPersonalData(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.PersonalDataContext = PersonalDataContext;

RegistoParser.prototype.personalData = function() {

    var localctx = new PersonalDataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RegistoParser.RULE_personalData);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(RegistoParser.T__7);
        this.state = 41;
        this.match(RegistoParser.T__3);
        this.state = 42;
        this.first_name();
        this.state = 43;
        this.match(RegistoParser.T__8);
        this.state = 44;
        this.match(RegistoParser.T__3);
        this.state = 45;
        this.last_name();
        this.state = 46;
        this.match(RegistoParser.T__9);
        this.state = 47;
        this.match(RegistoParser.T__3);
        this.state = 48;
        this.birthdate();
        this.state = 49;
        this.match(RegistoParser.T__10);
        this.state = 50;
        this.match(RegistoParser.T__3);
        this.state = 51;
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


function CdsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_cds;
    return this;
}

CdsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CdsContext.prototype.constructor = CdsContext;

CdsContext.prototype.cadeira = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CadeiraContext);
    } else {
        return this.getTypedRuleContext(CadeiraContext,i);
    }
};

CdsContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterCds(this);
	}
};

CdsContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitCds(this);
	}
};

CdsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitCds(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.CdsContext = CdsContext;

RegistoParser.prototype.cds = function() {

    var localctx = new CdsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RegistoParser.RULE_cds);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.cadeira();
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RegistoParser.T__11) {
            this.state = 54;
            this.match(RegistoParser.T__11);
            this.state = 55;
            this.cadeira();
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(RegistoParser.T__12);
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


function CadeiraContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegistoParser.RULE_cadeira;
    return this;
}

CadeiraContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CadeiraContext.prototype.constructor = CadeiraContext;

CadeiraContext.prototype.TEXT = function() {
    return this.getToken(RegistoParser.TEXT, 0);
};

CadeiraContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.enterCadeira(this);
	}
};

CadeiraContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegistoListener ) {
        listener.exitCadeira(this);
	}
};

CadeiraContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitCadeira(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.CadeiraContext = CadeiraContext;

RegistoParser.prototype.cadeira = function() {

    var localctx = new CadeiraContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RegistoParser.RULE_cadeira);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
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

First_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitFirst_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.First_nameContext = First_nameContext;

RegistoParser.prototype.first_name = function() {

    var localctx = new First_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RegistoParser.RULE_first_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
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

Last_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitLast_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.Last_nameContext = Last_nameContext;

RegistoParser.prototype.last_name = function() {

    var localctx = new Last_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RegistoParser.RULE_last_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
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

BirthdateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitBirthdate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.BirthdateContext = BirthdateContext;

RegistoParser.prototype.birthdate = function() {

    var localctx = new BirthdateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RegistoParser.RULE_birthdate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
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

StudentIDContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitStudentID(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.StudentIDContext = StudentIDContext;

RegistoParser.prototype.studentID = function() {

    var localctx = new StudentIDContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RegistoParser.RULE_studentID);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
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

EmailContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitEmail(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.EmailContext = EmailContext;

RegistoParser.prototype.email = function() {

    var localctx = new EmailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RegistoParser.RULE_email);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
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

CourseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitCourse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.CourseContext = CourseContext;

RegistoParser.prototype.course = function() {

    var localctx = new CourseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RegistoParser.RULE_course);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
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

LocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitLocation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.LocationContext = LocationContext;

RegistoParser.prototype.location = function() {

    var localctx = new LocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RegistoParser.RULE_location);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
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

PasswordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RegistoVisitor ) {
        return visitor.visitPassword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RegistoParser.PasswordContext = PasswordContext;

RegistoParser.prototype.password = function() {

    var localctx = new PasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RegistoParser.RULE_password);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
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
