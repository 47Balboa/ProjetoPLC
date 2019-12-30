import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;
import org.json.simple.JSONObject;

import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main (String[] args){
        RegistoLexer lexer;

        try{
            lexer = new RegistoLexer(CharStreams.fromFileName(System.getProperty("user.dir") + "/src/reg1.txt"));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            RegistoParser parser = new RegistoParser(tokens);
            ParserRuleContext ctx = parser.registo();

            createJsonVisitor cjv = new createJsonVisitor();
            cjv.visit(ctx);
            JSONObject reg = cjv.getObj();

            try (FileWriter file = new FileWriter(System.getProperty("user.dir") + "/src/r1.txt")) {
                file.write(reg.toJSONString());
                System.out.println("Successfully Copied JSON Object to File...");
                System.out.println("\nJSON Object: " + reg);
            }

        } catch (IOException e){
            e.printStackTrace();
        }
    }
}
