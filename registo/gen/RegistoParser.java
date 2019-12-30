// Generated from C:/Users/Asus/Desktop/registo/src\Registo.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RegistoParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		TEXT=10, NUMBER=11, DATE=12, WS=13;
	public static final int
		RULE_registo = 0, RULE_personalData = 1, RULE_first_name = 2, RULE_last_name = 3, 
		RULE_birthdate = 4, RULE_studentID = 5, RULE_email = 6, RULE_course = 7, 
		RULE_location = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"registo", "personalData", "first_name", "last_name", "birthdate", "studentID", 
			"email", "course", "location"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "']'", "'Email'", "':'", "'Curso'", "'Nome'", "'Apelido'", 
			"'DataNascimento'", "'Morada'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "TEXT", "NUMBER", 
			"DATE", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Registo.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RegistoParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class RegistoContext extends ParserRuleContext {
		public StudentIDContext studentID() {
			return getRuleContext(StudentIDContext.class,0);
		}
		public PersonalDataContext personalData() {
			return getRuleContext(PersonalDataContext.class,0);
		}
		public EmailContext email() {
			return getRuleContext(EmailContext.class,0);
		}
		public CourseContext course() {
			return getRuleContext(CourseContext.class,0);
		}
		public RegistoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_registo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterRegisto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitRegisto(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitRegisto(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RegistoContext registo() throws RecognitionException {
		RegistoContext _localctx = new RegistoContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_registo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(18);
			match(T__0);
			setState(19);
			studentID();
			setState(20);
			match(T__1);
			setState(21);
			personalData();
			setState(22);
			match(T__2);
			setState(23);
			match(T__3);
			setState(24);
			email();
			setState(25);
			match(T__4);
			setState(26);
			match(T__3);
			setState(27);
			course();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PersonalDataContext extends ParserRuleContext {
		public First_nameContext first_name() {
			return getRuleContext(First_nameContext.class,0);
		}
		public Last_nameContext last_name() {
			return getRuleContext(Last_nameContext.class,0);
		}
		public BirthdateContext birthdate() {
			return getRuleContext(BirthdateContext.class,0);
		}
		public LocationContext location() {
			return getRuleContext(LocationContext.class,0);
		}
		public PersonalDataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_personalData; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterPersonalData(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitPersonalData(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitPersonalData(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PersonalDataContext personalData() throws RecognitionException {
		PersonalDataContext _localctx = new PersonalDataContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_personalData);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			match(T__5);
			setState(30);
			match(T__3);
			setState(31);
			first_name();
			setState(32);
			match(T__6);
			setState(33);
			match(T__3);
			setState(34);
			last_name();
			setState(35);
			match(T__7);
			setState(36);
			match(T__3);
			setState(37);
			birthdate();
			setState(38);
			match(T__8);
			setState(39);
			match(T__3);
			setState(40);
			location();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class First_nameContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(RegistoParser.TEXT, 0); }
		public First_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_first_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterFirst_name(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitFirst_name(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitFirst_name(this);
			else return visitor.visitChildren(this);
		}
	}

	public final First_nameContext first_name() throws RecognitionException {
		First_nameContext _localctx = new First_nameContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_first_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Last_nameContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(RegistoParser.TEXT, 0); }
		public Last_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_last_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterLast_name(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitLast_name(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitLast_name(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Last_nameContext last_name() throws RecognitionException {
		Last_nameContext _localctx = new Last_nameContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_last_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BirthdateContext extends ParserRuleContext {
		public TerminalNode DATE() { return getToken(RegistoParser.DATE, 0); }
		public BirthdateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_birthdate; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterBirthdate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitBirthdate(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitBirthdate(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BirthdateContext birthdate() throws RecognitionException {
		BirthdateContext _localctx = new BirthdateContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_birthdate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(DATE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StudentIDContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(RegistoParser.NUMBER, 0); }
		public StudentIDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_studentID; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterStudentID(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitStudentID(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitStudentID(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StudentIDContext studentID() throws RecognitionException {
		StudentIDContext _localctx = new StudentIDContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_studentID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmailContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(RegistoParser.TEXT, 0); }
		public EmailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_email; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterEmail(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitEmail(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitEmail(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EmailContext email() throws RecognitionException {
		EmailContext _localctx = new EmailContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_email);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CourseContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(RegistoParser.TEXT, 0); }
		public CourseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_course; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterCourse(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitCourse(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitCourse(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CourseContext course() throws RecognitionException {
		CourseContext _localctx = new CourseContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_course);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocationContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(RegistoParser.TEXT, 0); }
		public LocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_location; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).enterLocation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RegistoListener ) ((RegistoListener)listener).exitLocation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RegistoVisitor ) return ((RegistoVisitor<? extends T>)visitor).visitLocation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LocationContext location() throws RecognitionException {
		LocationContext _localctx = new LocationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_location);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\17;\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n"+
		"\3\n\2\2\13\2\4\6\b\n\f\16\20\22\2\2\2\61\2\24\3\2\2\2\4\37\3\2\2\2\6"+
		",\3\2\2\2\b.\3\2\2\2\n\60\3\2\2\2\f\62\3\2\2\2\16\64\3\2\2\2\20\66\3\2"+
		"\2\2\228\3\2\2\2\24\25\7\3\2\2\25\26\5\f\7\2\26\27\7\4\2\2\27\30\5\4\3"+
		"\2\30\31\7\5\2\2\31\32\7\6\2\2\32\33\5\16\b\2\33\34\7\7\2\2\34\35\7\6"+
		"\2\2\35\36\5\20\t\2\36\3\3\2\2\2\37 \7\b\2\2 !\7\6\2\2!\"\5\6\4\2\"#\7"+
		"\t\2\2#$\7\6\2\2$%\5\b\5\2%&\7\n\2\2&\'\7\6\2\2\'(\5\n\6\2()\7\13\2\2"+
		")*\7\6\2\2*+\5\22\n\2+\5\3\2\2\2,-\7\f\2\2-\7\3\2\2\2./\7\f\2\2/\t\3\2"+
		"\2\2\60\61\7\16\2\2\61\13\3\2\2\2\62\63\7\r\2\2\63\r\3\2\2\2\64\65\7\f"+
		"\2\2\65\17\3\2\2\2\66\67\7\f\2\2\67\21\3\2\2\289\7\f\2\29\23\3\2\2\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}