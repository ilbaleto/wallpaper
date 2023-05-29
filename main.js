
let _ht = document.querySelector("#h input:nth-of-type(1)");
let _hx = document.querySelector("#h input:nth-of-type(2)");
let _r1x = document.querySelector("#r1 input:nth-of-type(1)");
let _r1y = document.querySelector("#r1 input:nth-of-type(2)");
let _r2x = document.querySelector("#r2 input:nth-of-type(1)");
let _r2y = document.querySelector("#r2 input:nth-of-type(2)");
let _r3x = document.querySelector("#r3 input:nth-of-type(1)");
let _r3y = document.querySelector("#r3 input:nth-of-type(2)");
let _r4x = document.querySelector("#r4 input:nth-of-type(1)");
let _r4y = document.querySelector("#r4 input:nth-of-type(2)");
let _lvx1 = document.querySelector("#lv input:nth-of-type(1)");
let _lvy1 = document.querySelector("#lv input:nth-of-type(2)");
let _lvx2 = document.querySelector("#lv input:nth-of-type(3)");
let _lvy2 = document.querySelector("#lv input:nth-of-type(4)");
let _lvx3 = document.querySelector("#lv input:nth-of-type(5)");
let _lvy3 = document.querySelector("#lv input:nth-of-type(6)");
let _lvx4 = document.querySelector("#lv input:nth-of-type(7)");
let _lvy4 = document.querySelector("#lv input:nth-of-type(8)");

let _select = document.getElementById("select");
let calbt = document.getElementById("calbt");
let print = document.getElementById("print");


function valueNum (el) {
  return parseInt(el.value) || 0;
}



calbt.onclick = function () {
  let ht = valueNum(_ht);
  let hx = valueNum(_hx);
  let r1x = valueNum(_r1x);
  let r1y = valueNum(_r1y);
  let r2x = valueNum(_r2x);
  let r2y = valueNum(_r2y);
  let r3x = valueNum(_r3x);
  let r3y = valueNum(_r3y);
  let r4x = valueNum(_r4x);
  let r4y = valueNum(_r4y);
  let lvx1 = valueNum(_lvx1);
  let lvy1 = valueNum(_lvy1);
  let lvx2 = valueNum(_lvx2);
  let lvy2 = valueNum(_lvy2);
  let lvx3 = valueNum(_lvx3);
  let lvy3 = valueNum(_lvy3);
  let lvx4 = valueNum(_lvx4);
  let lvy4 = valueNum(_lvy4);
  let select = (_select.value == 'sw') ? 53 : (_select.value == 'lw') ? 93 : 106

  let r_side = (r1x + r1y + r2x + r2y + r3x + r3y + r4x + r4y) * 2 * ht;
  let l_side = (lvx1 + lvy1 + lvx2 + lvy2 + lvx3 + lvy3 + lvx4 + lvy4) * 2 * ht;
  let r_ceil = r1x * r1y + r2x * r2y + r3x * r3y + r4x * r4y;
  let l_ceil = lvx1 * lvy1 + lvx2 * lvy2 + lvx3 * lvy3 + lvx4 * lvy4;
  let r_sidePP = +( r_side / 33000 ).toFixed(2);
  let r_ceilPP =  +( r_ceil / 33000 ).toFixed(2);
  let l_sidePP = +( l_side / 33000 ).toFixed(2);
  let l_ceilPP = +( l_ceil / 33000).toFixed(2);
  let cut_roll, r_side_roll, r_side_cake, l_side_roll, l_side_cake, r_ceil_roll, l_ceil_roll;

  if (select == 53) {
    cut_roll = parseInt(1250 / ht);
    r_side_cake = Math.ceil(r_side / ( ht * 53 ));
    r_side_roll = +(r_side_cake / cut_roll).toFixed(2);
    l_side_cake = Math.ceil(l_side / ( ht * 53 ));
    l_side_roll = +(l_side_cake / cut_roll).toFixed(2);
    r_ceil_roll = +(r_ceil / (1250 * 53)).toFixed(2);
    l_ceil_roll = +(l_ceil / (1250 * 53)).toFixed(2);
  } else if (select == 93) {
    cut_roll = parseInt(1775 / ht);
    r_side_cake = Math.ceil(r_side / ( ht * 93 ));
    r_side_roll = +(r_side_cake / cut_roll).toFixed(2);
    l_side_cake = Math.ceil(l_side / ( ht * 93 ));
    l_side_roll = +(l_side_cake / cut_roll).toFixed(2);
    r_ceil_roll = +(r_ceil / (1775 * 93)).toFixed(2);
    l_ceil_roll = +(l_ceil / (1775 * 93)).toFixed(2);
  } else {
    cut_roll = parseInt(1560 / ht);
    r_side_cake = Math.ceil(r_side / ( ht * 106 ));
    r_side_roll = +(r_side_cake / cut_roll).toFixed(2);
    l_side_cake = Math.ceil(l_side / ( ht * 106 ));
    l_side_roll = +(l_side_cake / cut_roll).toFixed(2);
    r_ceil_roll = +(r_ceil / (1560 * 106)).toFixed(2);
    l_ceil_roll = +(l_ceil / (1560 * 106)).toFixed(2);  
  }

  let s_ceilPP = +(r_ceilPP + l_ceilPP).toFixed(2);
  let s_ceil_roll = +(r_ceil_roll + l_ceil_roll).toFixed(2);
  let s_sidePP = +(r_sidePP + l_sidePP).toFixed(2);
  let s_side_roll = +(r_side_roll + l_side_roll).toFixed(2);
  let s_side_cake = r_side_cake + l_side_cake;


  let resultContext = `
  R_Ceil: ${r_ceilPP}P(${r_ceil_roll}R) R_Side: ${r_sidePP}P(${r_side_roll}R)${r_side_cake}C<br>
  L_Ceil: ${l_ceilPP}P(${l_ceil_roll}R) L_Side: ${l_sidePP}P(${l_side_roll}R)${l_side_cake}C<br>
  S_Ceil: ${s_ceilPP}P(${s_ceil_roll}R) S_Side: ${s_sidePP}P(${s_side_roll}R)${s_side_cake}C
  `;

  print.innerHTML = resultContext;


}