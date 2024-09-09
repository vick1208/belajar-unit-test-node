test("test toBe",()=>{
    const name = "Rian";
    const hello = `Hi ${name}`;

    expect(hello).toBe("Hi Rian");
});

test('test toEqual', () => {
    let person = {id: "eka"}
    Object.assign(person,{name: "Eka"});

    expect(person).toEqual({id:"eka",name:"Eka"});
});