// Generated from C:/Users/Asus/Desktop/Registo/src\Registo.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link RegistoParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface RegistoVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link RegistoParser#registo}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRegisto(RegistoParser.RegistoContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#personalData}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPersonalData(RegistoParser.PersonalDataContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#first_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFirst_name(RegistoParser.First_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#last_name}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLast_name(RegistoParser.Last_nameContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#birthdate}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBirthdate(RegistoParser.BirthdateContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#studentID}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStudentID(RegistoParser.StudentIDContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#email}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEmail(RegistoParser.EmailContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#course}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCourse(RegistoParser.CourseContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#location}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLocation(RegistoParser.LocationContext ctx);
	/**
	 * Visit a parse tree produced by {@link RegistoParser#password}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPassword(RegistoParser.PasswordContext ctx);
}