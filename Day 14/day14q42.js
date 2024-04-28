"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let $magicians = ['Kareem', 'Kaleem', 'Kamran', 'Jabbar'];
function $show_magicians($magicians) {
    $magicians.forEach(magician => {
        console.log(magician);
    });
}
$show_magicians($magicians);
function make_greate($magicians) {
    for (let i = 0; i < $magicians.length; i++) {
        $magicians[i] = $magicians[i] + ' the Greate';
    }
    ;
}
make_greate($magicians);
$show_magicians($magicians);
