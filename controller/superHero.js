// const supertHeros = ['ironMan', "thor", 'captaiAmerica', 'hulk', 'spiderMan']
const Hero = require('../models/Heros')

const sortHeros = async (keys) => {

    try {
        let heros = await Hero.findOne({}, { _id: 0, __v: 0 })
        const {SuperHeros} = heros
        let supertHeros = SuperHeros
        // console.log(SuperHeros, "superHeros");
        let n = []

        for (i of supertHeros) {

            if (i.length == keys.length) {
                n.push(i.toLowerCase())
            }
        }
        return n

    } catch (err) {
        console.log(err);

        return []

    }



}

const getTheHero = (heros, keys) => {

    console.log(heros, "hero ki length");

    if (heros.length) {

        for (hero of heros) {

            const letter = keys.length
            let a;
            for (a = 0; a < letter; a++) {
                if (keys[a].includes(hero[a])) {
                    continue

                } else {
                    break
                }
            }
            if (a == letter) {
                return hero
            }
        }
    }
    return ("nothing")
}





// const kyes = ['ghi','pqr','mno','mno','mno','abc','mno']
// // const kyes = ['stu','ghi','mno','pqr']
// // const kyes = ['ghi', 'stu', 'jkl', 'jkl']

// const a = sortHeros(kyes);
// console.log(a);
// // a = [ 'thor','hulk']
// let k = getTheHero(a, kyes)
// console.log(k);



module.exports = { sortHeros, getTheHero }






//controller



