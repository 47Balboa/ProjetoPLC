grammar Registo;


registo : '[' studentID ']' personalData 'Email' ':' email 'Curso' ':' course 'Cadeiras' ':' cds 'Password:' password
        ;

personalData : 'Nome' ':' first_name 'Apelido' ':' last_name 'DataNascimento' ':' birthdate 'Morada' ':' location
             ;

cds : cadeira (';' cadeira)* '.'
    ;

cadeira : TEXT
        ;

first_name : TEXT
           ;
last_name : TEXT
          ;

birthdate : DATE
          ;

studentID : NUMBER
          ;

email : TEXT
      ;

course : TEXT
       ;

location : TEXT
         ;

password : TEXT
         ;

//LEXER
TEXT : '"'~('"')*'"';
NUMBER : [0-9]+;
DATE : [0-9][0-9] '-' [0-9][0-9] '-' [0-9][0-9][0-9][0-9];
WS : [ \t\r\n]+ -> skip;

