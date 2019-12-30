// Generated from C:/Users/Asus/Desktop/Registo/src\Registo.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RegistoParser}.
 */
public interface RegistoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RegistoParser#registo}.
	 * @param ctx the parse tree
	 */
	void enterRegisto(RegistoParser.RegistoContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#registo}.
	 * @param ctx the parse tree
	 */
	void exitRegisto(RegistoParser.RegistoContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#personalData}.
	 * @param ctx the parse tree
	 */
	void enterPersonalData(RegistoParser.PersonalDataContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#personalData}.
	 * @param ctx the parse tree
	 */
	void exitPersonalData(RegistoParser.PersonalDataContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#first_name}.
	 * @param ctx the parse tree
	 */
	void enterFirst_name(RegistoParser.First_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#first_name}.
	 * @param ctx the parse tree
	 */
	void exitFirst_name(RegistoParser.First_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#last_name}.
	 * @param ctx the parse tree
	 */
	void enterLast_name(RegistoParser.Last_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#last_name}.
	 * @param ctx the parse tree
	 */
	void exitLast_name(RegistoParser.Last_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#birthdate}.
	 * @param ctx the parse tree
	 */
	void enterBirthdate(RegistoParser.BirthdateContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#birthdate}.
	 * @param ctx the parse tree
	 */
	void exitBirthdate(RegistoParser.BirthdateContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#studentID}.
	 * @param ctx the parse tree
	 */
	void enterStudentID(RegistoParser.StudentIDContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#studentID}.
	 * @param ctx the parse tree
	 */
	void exitStudentID(RegistoParser.StudentIDContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#email}.
	 * @param ctx the parse tree
	 */
	void enterEmail(RegistoParser.EmailContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#email}.
	 * @param ctx the parse tree
	 */
	void exitEmail(RegistoParser.EmailContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#course}.
	 * @param ctx the parse tree
	 */
	void enterCourse(RegistoParser.CourseContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#course}.
	 * @param ctx the parse tree
	 */
	void exitCourse(RegistoParser.CourseContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#location}.
	 * @param ctx the parse tree
	 */
	void enterLocation(RegistoParser.LocationContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#location}.
	 * @param ctx the parse tree
	 */
	void exitLocation(RegistoParser.LocationContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegistoParser#password}.
	 * @param ctx the parse tree
	 */
	void enterPassword(RegistoParser.PasswordContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegistoParser#password}.
	 * @param ctx the parse tree
	 */
	void exitPassword(RegistoParser.PasswordContext ctx);
}