beforeAll(() => {
    console.log("Before All");
    
});

afterAll(() => {
    console.log("After All");
    
});

beforeEach(() => {
    console.log("Before Each");
});

afterEach(() => {
    console.log("After Each");
});

test('test Outer', () => {
    console.log("test outer");
});

describe('Inner', () => {

    beforeAll(() => {
        console.log("Before All inner");
        
    });
    
    afterAll(() => {
        console.log("After All inner");
        
    });
    
    beforeEach(() => {
        console.log("Before Each inner");
    });
    
    afterEach(() => {
        console.log("After Each inner");
    });
    

    test('test Inner', () => {
        console.log("test inner");
    });
});