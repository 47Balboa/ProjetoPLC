import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;

import java.io.IOException;

public class Main {
    public static void main (String[] args){
        RegistoLexer lexer;

        try{
            lexer = new RegistoLexer(CharStreams.fromFileName(System.getProperty("user.dir") + "/src/reg1.txt"));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            RegistoParser parser = new RegistoParser(tokens);
            ParserRuleContext ctx = parser.registo();


        } catch (IOException e){
            e.printStackTrace();
        }
    }
}