export class MyException extends Error {

}

export const callMe = (name) =>{
    if (name === "Eko") {
        throw new MyException("Waduh ada apa ini");
        
    } else {
        return "OK";
    }
}