
let house = document.forms.house;

let h = document.getElementById("h");
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");

let paper = document.getElementById("paper");
let cal = document.getElementById("cal");
let res = document.getElementById("res");

let wp;

function parseone (el) {
  return parseInt(el.children[1].value) || 0;
}
function parsetwo (el) {
  return parseInt(el.children[2].value) || 0;
}
function parsethr (el) {
  return parseInt(el.children[4].value) || 0;
}
function roomw (el) {
  if (parseone(el) == 0 || parsetwo(el) == 0) return 0;
  let i1 = ((parseone(el) % wp) < (wp / 2 - 5)) ? 1 : 0;
  let i2 = ((parsetwo(el) % wp) < (wp / 2 - 5)) ? 1 : 0;
  return parseInt(parseone(el) / wp) * 2 + parseInt(parsetwo(el) / wp) * 2 + 3 - i1 - i2 - parsethr(el);  
}
function roomf (el) {
  if (parseone(el) == 0 || parsetwo(el) == 0) return [0, 0];  
  let cut = ((parseone(el) < parsetwo(el)) ? parseone(el) : parsetwo(el)) + 10;
  let i = (parseone(el) > parsetwo(el)) ? parseone(el) : parsetwo(el);
  let dim = parseInt(i / wp) + 1;
  return [cut, dim];
}

cal.onclick = function () {
  let h1, h2, rw1, rw2, rw3, rw4, rf1, rf2, rf3, rf4, lw, lf;
  if (paper.value == 'sw') {
    wp = 53;
  } else if (paper.value == 'lw') {
    wp = 93;
  } else {
    wp = 106;
  }
  h1 = parseone(h);
  h2 = parsetwo(h);
  rw1 = roomw(r1);
  rf1 = roomf(r1);
  rw2 = roomw(r2);
  rf2 = roomf(r2);
  rw3 = roomw(r3);
  rf3 = roomf(r3);
  rw4 = roomw(r4);
  rf4 = roomf(r4);
  lw = roomw(liv);
  lf = roomf(liv);

  res.innerHTML = "<div>방1 : " + rw1 + "폭 - 천장 " + rf1[0]+ "cm " + rf1[1] + "폭</div>" +
                  "<div>방2 : " + rw2 + "폭 - 천장 " + rf2[0]+ "cm " + rf2[1] + "폭</div>" +
                  "<div>방3 : " + rw3 + "폭 - 천장 " + rf3[0]+ "cm " + rf3[1] + "폭</div>" +
                  "<div>방4 : " + rw4 + "폭 - 천장 " + rf4[0]+ "cm " + rf4[1] + "폭</div>" +
                  "<div>거실 : " + lw + "폭 - 천장 " + lf[0]+ "cm " + lf[1] + "폭</div>" +
                  "<h2>합계 : " + (rw1 + rw2 + rw3 + rw4 + lw) + "폭 - 천장 " + rf4[0]+ "cm " + rf4[1] + "폭</h2>";


}
