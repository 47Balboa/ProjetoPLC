import org.json.simple.JSONObject;

public class createJsonVisitor extends RegistoBaseVisitor<String> {
    private JSONObject obj;

    public createJsonVisitor(){
        this.obj = new JSONObject();
    }

    public JSONObject getObj() {
        return obj;
    }

    @Override
    public String visitRegisto(RegistoParser.RegistoContext ctx) {
        visit(ctx.studentID());
        visit(ctx.personalData());
        visit(ctx.email());
        visit(ctx.course());
        visit(ctx.password());
        return "";
    }

    @Override
    public String visitFirst_name(RegistoParser.First_nameContext ctx) {
        obj.put("nome",ctx.TEXT().getText().substring(1,ctx.TEXT().getText().length()-1));
        return "";
    }

    @Override
    public String visitLast_name(RegistoParser.Last_nameContext ctx) {
        obj.put("apelido",ctx.TEXT().getText().substring(1,ctx.TEXT().getText().length()-1));
        return "";
    }

    @Override
    public String visitPersonalData(RegistoParser.PersonalDataContext ctx) {
        visit(ctx.first_name());
        visit(ctx.last_name());
        visit(ctx.birthdate());
        visit(ctx.location());
        return "";
    }

    @Override
    public String visitBirthdate(RegistoParser.BirthdateContext ctx) {
        obj.put("dataNasc",ctx.DATE().getText());
        return "";
    }

    @Override
    public String visitStudentID(RegistoParser.StudentIDContext ctx) {
        obj.put("id",ctx.NUMBER());
        return "";
    }

    @Override
    public String visitEmail(RegistoParser.EmailContext ctx) {
        obj.put("email",ctx.TEXT().getText().substring(1,ctx.TEXT().getText().length()-1));
        return "";
    }

    @Override
    public String visitCourse(RegistoParser.CourseContext ctx) {
        obj.put("curso",ctx.TEXT().getText().substring(1,ctx.TEXT().getText().length()-1));
        return "";
    }

    @Override
    public String visitLocation(RegistoParser.LocationContext ctx) {
        obj.put("morada",ctx.TEXT().getText().substring(1,ctx.TEXT().getText().length()-1));
        return "";
    }

    @Override
    public String visitPassword(RegistoParser.PasswordContext ctx) {
        obj.put("password",ctx.TEXT().getText().substring(1,ctx.TEXT().getText().length()-1));
        return "";
    }
}
