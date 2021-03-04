/**Create an object to hold sprite sheet corordinates
 * and add a letter to refernce
*/
export function HandSigns() {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
    const handPos = [];

    let x = 0;
    let y = 0;

    for (let i = 0; i < letters.length; i++) {

        /**
         * Image is set to half size in css 1200/2 =600x300.
         * There are 8 hands in each row
         * so each time i counts 8 increace y position by 75
         *  75x4=300 
        */

        if (i === 8) {
            y = 75
        }
        if (i === 16) {
            y = 150
        }
        if (i === 24) {
            y = 225

        }

        /** 
         * Image is set to half size in css 1200/2 =600x300.
         * Each time the end of the image width is
         * reached reset x position to zerro
         * */
        if (x === 600) {
            x = 0
        }

        let posObj = { id: i, letter: letters[i], x: x, y: y };
        handPos.push(posObj)
        x += 75
    }

    return handPos
}