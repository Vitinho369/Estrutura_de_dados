import rpn from "../../src/Lista1/Questao_6";


test("3 + 4",
    () =>{
        expect(rpn("3+4")).toBe("34+");
    }
);

test("3 + 4 * 5",
    () =>{
        expect(rpn("3+4*5")).toBe("345*+");
    }
);

test("(a+(b*c))",
    () =>{
        expect(rpn("(a+(b*c))")).toBe("abc*+");
    }
);

test("((a+b)*(z+x))",
    () =>{
        expect(rpn("((a+b)*(z+x))")).toBe("ab+zx+*");
    }
);

test("((a+t)*((b+(a+c))^(c+d)))",
    () =>{
        expect(rpn("((a+t)*((b+(a+c))^(c+d)))")).toBe("at+bac++cd+^*");
    }
);

test("a+b*c-d",
    () =>{
        expect(rpn("a+b*c-d")).toBe("abc*+d-");
    }
);

test("(a+b)+c/d",
    () =>{
        expect(rpn("(a+b)+c/d")).toBe("ab+cd/+");
    }
);

test("a*b-(c-d)+e",
    () =>{
        expect(rpn("a*b-(c-d)+e")).toBe("ab*cd--e+");
    }
);