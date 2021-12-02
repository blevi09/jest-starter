import axios from "axios";

export class GenderGuesser{

    getGuess(name){
        let genders = axios.get('https://api.genderize.io/?name=' + name);

        return genders;
    }

}