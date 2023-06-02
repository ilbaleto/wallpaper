
let house = document.getElementById("house");

let _ht = document.getElementById("ht");
let _hx = document.getElementById("hx");
let _r1x = document.getElementById("r1x");
let _r1y = document.getElementById("r1y");
let _r2x = document.getElementById("r2x");
let _r2y = document.getElementById("r2y");
let _r3x = document.getElementById("r3x");
let _r3y = document.getElementById("r3y");
let _r4x = document.getElementById("r4x");
let _r4y = document.getElementById("r4y");
let _l1x = document.getElementById("l1x");
let _l1y = document.getElementById("l1y");
let _l2x = document.getElementById("l2x");
let _l2y = document.getElementById("l2y");
let _l3x = document.getElementById("l3x");
let _l3y = document.getElementById("l3y");
let _l4x = document.getElementById("l4x");
let _l4y = document.getElementById("l4y");

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
 let re = /^0평/;
 return (re.test(el)) ? '' : el;
}

function addStorageItem () {
  let docFrag = document.createDocumentFragment();
  let option = document.createElement("option");
  option.textContent = locKey.value;
  docFrag.appendChild(option);
  saved_select.appendChild(docFrag);
}

function addStorageAll () {
  let docFrag = document.createDocumentFragment();
  for (let i = 0; i < storage.length; i++) {
    let option = document.createElement("option");
    option.textContent = storage.key(i);
    docFrag.appendChild(option);
  }
  saved_select.appendChild(docFrag);  
}


window.addEventListener("load", function() {

  addStorageAll();

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
  let select = (_select.value == '53') ? 53 : (_select.value == '93') ? 93 : 106;
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


  let r1cText = `${r1_ceilPP}평[${r1_ceil_roll}롤]`;
  let r1sText = `${r1_sidePP}평[${r1_side_roll}롤][${r1_side_cake}폭]`;
  let r2cText = `${r2_ceilPP}평[${r2_ceil_roll}롤]`;
  let r2sText = `${r2_sidePP}평[${r2_side_roll}롤][${r2_side_cake}폭]`;
  let r3cText = `${r3_ceilPP}평[${r3_ceil_roll}롤]`;
  let r3sText = `${r3_sidePP}평[${r3_side_roll}롤][${r3_side_cake}폭]`;
  let r4cText = `${r4_ceilPP}평[${r4_ceil_roll}롤]`;
  let r4sText = `${r4_sidePP}평[${r4_side_roll}롤][${r4_side_cake}폭]`;
  let l1cText = `${l1_ceilPP}평[${l1_ceil_roll}롤]`;
  let l1sText = `${l1_sidePP}평[${l1_side_roll}롤][${l1_side_cake}폭]`;
  let l2cText = `${l2_ceilPP}평[${l2_ceil_roll}롤]`;
  let l2sText = `${l2_sidePP}평[${l2_side_roll}롤][${l2_side_cake}폭]`;
  let l3cText = `${l3_ceilPP}평[${l3_ceil_roll}롤]`;
  let l3sText = `${l3_sidePP}평[${l3_side_roll}롤][${l3_side_cake}폭]`;
  let l4cText = `${l4_ceilPP}평[${l4_ceil_roll}롤]`;
  let l4sText = `${l4_sidePP}평[${l4_side_roll}롤][${l4_side_cake}폭]`;

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

  if (storage.getItem(saved_select.value)) {
    let data = JSON.parse(storage.getItem(saved_select.value));
    locKey.value = data.location;
    _ht.value = data.ht;
    _hx.value = data.hx;
    _r1x.value = data.r1x;
    _r1y.value = data.r1y;
    _r2x.value = data.r2x;
    _r2y.value = data.r2y;
    _r3x.value = data.r3x;
    _r3y.value = data.r3y;
    _r4x.value = data.r4x;
    _r4y.value = data.r4y;
    _l1x.value = data.l1x;
    _l1y.value = data.l1y;
    _l2x.value = data.l2x;
    _l2y.value = data.l2y;
    _l3x.value = data.l3x;
    _l3y.value = data.l3y;
    _l4x.value = data.l4x;
    _l4y.value = data.l4y;
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
  } else {
    locKey.value = '';
    _ht.value = '';
    _hx.value = '';
    _r1x.value = '';
    _r1y.value = '';
    _r2x.value = '';
    _r2y.value = '';
    _r3x.value = '';
    _r3y.value = '';
    _r4x.value = '';
    _r4y.value = '';
    _l1x.value = '';
    _l1y.value = '';
    _l2x.value = '';
    _l2y.value = '';
    _l3x.value = '';
    _l3y.value = '';
    _l4x.value = '';
    _l4y.value = '';
    r1c.textContent = '';
    r1s.textContent = '';
    r2c.textContent = '';
    r2s.textContent = '';
    r3c.textContent = '';
    r3s.textContent = '';
    r4c.textContent = '';
    r4s.textContent = '';
    l1c.textContent = '';
    l1s.textContent = '';
    l2c.textContent = '';
    l2s.textContent = '';
    l3c.textContent = '';
    l3s.textContent = '';
    l4c.textContent = '';
    l4s.textContent = '';
    _select.value = '53'; 
  }

});


savebtn.onclick = function () {

  if (locKey.value) {
    for (let i=0; i<storage.length; i++) {
      if (storage.key(i) == locKey.value) return;
    }

    let myData = {
      location: locKey.value,
      ht: _ht.value,
      hx: _hx.value,
      r1x: _r1x.value,
      r1y: _r1y.value,
      r2x: _r2x.value,
      r2y: _r2y.value,
      r3x: _r3x.value,
      r3y: _r3y.value,
      r4x: _r4x.value,
      r4y: _r4y.value,
      l1x: _l1x.value,
      l1y: _l1y.value,
      l2x: _l2x.value,
      l2y: _l2y.value,
      l3x: _l3x.value,
      l3y: _l3y.value,
      l4x: _l4x.value,
      l4y: _l4y.value,
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

    storage.setItem( locKey.value, JSON.stringify(myData));
    addStorageItem();
  }


}