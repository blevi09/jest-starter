import { TestWatcher } from "@jest/core";
import { AttandanceList } from "./AttandanceList";
import {GenderGuesser} from "./GenderGuesser";

describe('Test for GenderGuesser', () => {
    let name;
    beforeAll(() =>{
        name = new GenderGuesser();
    
});

test('GenderGuesser name Tim', ()=> {
    name.getGuess('tim').then((result) =>{
        expect(result).resolves;
    });
});

test('tim is male', () => {
    name.getGuess('tim').then(result => {
        expect(result).arrayContaining('male');
    });
});
});



describe('Test for AttandanceList', () =>{
    let attandance;
    beforeAll(() => {
        attandance = new AttandanceList();
    });

test('Attandance list is empty' , () =>{
    expect(attandance.names).toStrictEqual([]);
});

test('name is added', () => {
    expect(attandance.add("levi")).not.toBeNull();
})
});
