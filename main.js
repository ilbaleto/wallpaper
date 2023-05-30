
let house = document.getElementById("house");

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
let _l1x = document.querySelector("#l1 input:nth-of-type(1)");
let _l1y = document.querySelector("#l1 input:nth-of-type(2)");
let _l2x = document.querySelector("#l2 input:nth-of-type(1)");
let _l2y = document.querySelector("#l2 input:nth-of-type(2)");
let _l3x = document.querySelector("#l3 input:nth-of-type(1)");
let _l3y = document.querySelector("#l3 input:nth-of-type(2)");
let _l4x = document.querySelector("#l4 input:nth-of-type(1)");
let _l4y = document.querySelector("#l4 input:nth-of-type(2)");

let r1c = document.getElementById("r1c");
let r1s = document.getElementById("r1s");
let r2c = document.getElementById("r2c");
let r2s = document.getElementById("r2s");
let r3c = document.getElementById("r3c");
let r3s = document.getElementById("r3s");
let r4c = document.getElementById("r4c");
let r4s = document.getElementById("r4s");
let l1c = document.getElementById("l1c");
let l1s = document.getElementById("l1s");
let l2c = document.getElementById("l2c");
let l2s = document.getElementById("l2s");
let l3c = document.getElementById("l3c");
let l3s = document.getElementById("l3s");
let l4c = document.getElementById("l4c");
let l4s = document.getElementById("l4s");

let saved_select = document.getElementById("saved");
let _select = document.getElementById("select");
let savebtn = document.getElementById("savebtn");

let locKey = document.getElementById("location");
let storage = localStorage;


function valueNum (el) {
  return parseInt(el.value) || 0;
}

function matchRexZero (el) {
 let re = /^0/;
 return (re.test(el)) ? '' : el;
}


window.addEventListener("load", function() {

  let docFrag = document.createDocumentFragment();
  for (let i = 0; i < storage.length; i++) {
    let option = document.createElement("option");
    option.textContent = storage.key(i);
    docFrag.appendChild(option);
  }
  saved_select.appendChild(docFrag);


});


house.addEventListener('change', function(e) {
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
  let l1x = valueNum(_l1x);
  let l1y = valueNum(_l1y);
  let l2x = valueNum(_l2x);
  let l2y = valueNum(_l2y);
  let l3x = valueNum(_l3x);
  let l3y = valueNum(_l3y);
  let l4x = valueNum(_l4x);
  let l4y = valueNum(_l4y);
  let select = (_select.value == 'sw') ? 53 : (_select.value == 'lw') ? 93 : 106;
  let roll_size = (select == 53) ? 1250 : (select == 93) ? 1775 : 1560;
  let cut_roll = parseInt(roll_size / ht);


  let r1_ceil = r1x * r1y;
  let r1_side = (r1x + r1y) * 2 * ht;
  let r1_ceilPP = +(r1_ceil / 33000).toFixed(2);
  let r1_sidePP = +(r1_side /33000).toFixed(2);
  let r1_ceil_roll = +(r1_ceil / (roll_size * select)).toFixed(2);
  let r1_side_cake = Math.ceil(r1_side / (ht * select));
  let r1_side_roll = +(r1_side_cake / cut_roll).toFixed(2);

  let r2_ceil = r2x * r2y;
  let r2_side = (r2x + r2y) * 2 * ht;
  let r2_ceilPP = +(r2_ceil / 33000).toFixed(2);
  let r2_sidePP = +(r2_side /33000).toFixed(2);
  let r2_ceil_roll = +(r2_ceil / (roll_size * select)).toFixed(2);
  let r2_side_cake = Math.ceil(r2_side / (ht * select));
  let r2_side_roll = +(r2_side_cake / cut_roll).toFixed(2);

  let r3_ceil = r3x * r3y;
  let r3_side = (r3x + r3y) * 2 * ht;
  let r3_ceilPP = +(r3_ceil / 33000).toFixed(2);
  let r3_sidePP = +(r3_side /33000).toFixed(2);
  let r3_ceil_roll = +(r3_ceil / (roll_size * select)).toFixed(2);
  let r3_side_cake = Math.ceil(r3_side / (ht * select));
  let r3_side_roll = +(r3_side_cake / cut_roll).toFixed(2);

  let r4_ceil = r4x * r4y;
  let r4_side = (r4x + r4y) * 2 * ht;
  let r4_ceilPP = +(r4_ceil / 33000).toFixed(2);
  let r4_sidePP = +(r4_side /33000).toFixed(2);
  let r4_ceil_roll = +(r4_ceil / (roll_size * select)).toFixed(2);
  let r4_side_cake = Math.ceil(r4_side / (ht * select));
  let r4_side_roll = +(r4_side_cake / cut_roll).toFixed(2);

  let l1_ceil = l1x * l1y;
  let l1_side = (l1x + l1y) * 2 * ht;
  let l1_ceilPP = +(l1_ceil / 33000).toFixed(2);
  let l1_sidePP = +(l1_side /33000).toFixed(2);
  let l1_ceil_roll = +(l1_ceil / (roll_size * select)).toFixed(2);
  let l1_side_cake = Math.ceil(l1_side / (ht * select));
  let l1_side_roll = +(l1_side_cake / cut_roll).toFixed(2);

  let l2_ceil = l2x * l2y;
  let l2_side = (l2x + l2y) * 2 * ht;
  let l2_ceilPP = +(l2_ceil / 33000).toFixed(2);
  let l2_sidePP = +(l2_side /33000).toFixed(2);
  let l2_ceil_roll = +(l2_ceil / (roll_size * select)).toFixed(2);
  let l2_side_cake = Math.ceil(l2_side / (ht * select));
  let l2_side_roll = +(l2_side_cake / cut_roll).toFixed(2);

  let l3_ceil = l3x * l3y;
  let l3_side = (l3x + l3y) * 2 * ht;
  let l3_ceilPP = +(l3_ceil / 33000).toFixed(2);
  let l3_sidePP = +(l3_side /33000).toFixed(2);
  let l3_ceil_roll = +(l3_ceil / (roll_size * select)).toFixed(2);
  let l3_side_cake = Math.ceil(l3_side / (ht * select));
  let l3_side_roll = +(l3_side_cake / cut_roll).toFixed(2);

  let l4_ceil = l4x * l4y;
  let l4_side = (l4x + l4y) * 2 * ht;
  let l4_ceilPP = +(l4_ceil / 33000).toFixed(2);
  let l4_sidePP = +(l4_side /33000).toFixed(2);
  let l4_ceil_roll = +(l4_ceil / (roll_size * select)).toFixed(2);
  let l4_side_cake = Math.ceil(l4_side / (ht * select));
  let l4_side_roll = +(l4_side_cake / cut_roll).toFixed(2);


  r1cText = `${r1_ceilPP}평[${r1_ceil_roll}롤]`;
  r1sText = `${r1_sidePP}평[${r1_side_roll}롤][${r1_side_cake}폭]`;
  r2cText = `${r2_ceilPP}평[${r2_ceil_roll}롤]`;
  r2sText = `${r2_sidePP}평[${r2_side_roll}롤][${r2_side_cake}폭]`;
  r3cText = `${r3_ceilPP}평[${r3_ceil_roll}롤]`;
  r3sText = `${r3_sidePP}평[${r3_side_roll}롤][${r3_side_cake}폭]`;
  r4cText = `${r4_ceilPP}평[${r4_ceil_roll}롤]`;
  r4sText = `${r4_sidePP}평[${r4_side_roll}롤][${r4_side_cake}폭]`;
  l1cText = `${l1_ceilPP}평[${l1_ceil_roll}롤]`;
  l1sText = `${l1_sidePP}평[${l1_side_roll}롤][${l1_side_cake}폭]`;
  l2cText = `${l2_ceilPP}평[${l2_ceil_roll}롤]`;
  l2sText = `${l2_sidePP}평[${l2_side_roll}롤][${l2_side_cake}폭]`;
  l3cText = `${l3_ceilPP}평[${l3_ceil_roll}롤]`;
  l3sText = `${l3_sidePP}평[${l3_side_roll}롤][${l4_side_cake}폭]`;
  l4cText = `${l4_ceilPP}평[${l4_ceil_roll}롤]`;
  l4sText = `${l4_sidePP}평[${l4_side_roll}롤][${l4_side_cake}폭]`;

  r1c.textContent = matchRexZero(r1cText);
  r1s.textContent = matchRexZero(r1sText);
  r2c.textContent = matchRexZero(r2cText);
  r2s.textContent = matchRexZero(r2sText);
  r3c.textContent = matchRexZero(r3cText);
  r3s.textContent = matchRexZero(r3sText);
  r4c.textContent = matchRexZero(r4cText);
  r4s.textContent = matchRexZero(r4sText);
  l1c.textContent = matchRexZero(l1cText);
  l1s.textContent = matchRexZero(l1sText);
  l2c.textContent = matchRexZero(l2cText);
  l2s.textContent = matchRexZero(l2sText);
  l3c.textContent = matchRexZero(l3cText);
  l3s.textContent = matchRexZero(l3sText);
  l4c.textContent = matchRexZero(l4cText);
  l4s.textContent = matchRexZero(l4sText);



});

saved_select.addEventListener('change', function(e) {

  if (!storage.getItem(saved_select.value)) return;

  let data = JSON.parse(storage.getItem(saved_select.value))

  locKey.value = data.location;
  h.children[1].value = data.ht;
  h.children[2].value = data.hx;
  r1.children[1].value = data.r1x;
  r1.children[2].value = data.r1y;
  r2.children[1].value = data.r2x;
  r2.children[2].value = data.r2y;
  r3.children[1].value = data.r3x;
  r3.children[2].value = data.r3y;
  r4.children[1].value = data.r4x;
  r4.children[2].value = data.r4y;
  l1.children[1].value = data.l1x;
  l1.children[2].value = data.l1y;
  l2.children[1].value = data.l2x;
  l2.children[2].value = data.l2y;
  l3.children[1].value = data.l3x;
  l3.children[2].value = data.l3y;
  l4.children[1].value = data.l4x;
  l4.children[2].value = data.l4y;
  r1c.textContent = data.r1c;
  r1s.textContent = data.r1s;
  r2c.textContent = data.r2c;
  r2s.textContent = data.r2s;
  r3c.textContent = data.r3c;
  r3s.textContent = data.r3s;
  r4c.textContent = data.r4c;
  r4s.textContent = data.r4s;
  l1c.textContent = data.l1c;
  l1s.textContent = data.l1s;
  l2c.textContent = data.l2c;
  l2s.textContent = data.l2s;
  l3c.textContent = data.l3c;
  l3s.textContent = data.l3s;
  l4c.textContent = data.l4c;
  l4s.textContent = data.l4s;
  _select.value = data._select;

});


savebtn.onclick = function () {

  let myData = {
    location: locKey.value,
    ht: h.children[1].value,
    hx: h.children[2].value,
    r1x: r1.children[1].value,
    r1y: r1.children[2].value,
    r2x: r2.children[1].value,
    r2y: r2.children[2].value,
    r3x: r3.children[1].value,
    r3y: r3.children[2].value,
    r4x: r4.children[1].value,
    r4y: r4.children[2].value,
    l1x: l1.children[1].value,
    l1y: l1.children[2].value,
    l2x: l2.children[1].value,
    l2y: l2.children[2].value,
    l3x: l3.children[1].value,
    l3y: l3.children[2].value,
    l4x: l4.children[1].value,
    l4y: l4.children[2].value,
    r1c: r1c.textContent,
    r1s: r1s.textContent,
    r2c: r2c.textContent,
    r2s: r2s.textContent,
    r3c: r3c.textContent,
    r3s: r3s.textContent,
    r4c: r4c.textContent,
    r4s: r4s.textContent,
    l1c: l1c.textContent,
    l1s: l1s.textContent,
    l2c: l2c.textContent,
    l2s: l2s.textContent,
    l3c: l3c.textContent,
    l3s: l3s.textContent,
    l4c: l4c.textContent,
    l4s: l4s.textContent,
    _select: _select.value
  };

  if (locKey.value) {
    storage.setItem( locKey.value, JSON.stringify(myData));
  }

}