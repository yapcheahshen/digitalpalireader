function newquiz() {
	moveframex(1);
	document.getElementById('mafbc').innerHTML = '<input type="hidden" id="qno" value="1"><input type="hidden" id="Qran" value="0"><input type="hidden" id="Qwan" value="0"><p></p><div class="quizc" style="background-color:'+DPR_prefs['colbkcp']+'"><p><b>Question #<span id="qn"></span>:</b> What is the meaning of "<font id="qq"></font>"?</p></div><p><i id="Qchecka">Choose the right answer below (or use number keys (1-4) to select an answer):</i></p><p><font id="answers"></font></p><div class="quizc" style="background-color:'+DPR_prefs['colbkcp']+'"><p><table width=100%><tr><td>Right Answers: <b id="Qra" style="color:'+DPR_prefs['green']+'"></b></td><td>Wrong Answers: <b id="Qwa" style="color:'+DPR_prefs['red']+'"></b></td><td>Percent: <b style="color:white" id="Qpa">&nbsp;--%&nbsp;</b></td></tr><tr><td colspan="3"><hr /></td></tr><tr><td>Total Right Answers: <b id="Qrights"></b></td><td>Left to answer: <b id="Qlefts"></b></td><td><span class="abut obut small" onclick="clearrights()">clear</span></td></tr></table></div>';
	document.getElementById('Qra').innerHTML = '&nbsp;0&nbsp;';
	document.getElementById('Qwa').innerHTML = '&nbsp;0&nbsp;';
	quizme();

}

// full declension

function newDquiz() {
	document.getElementById('mafbc').innerHTML = '<input type="hidden" id="QwhichS"><p class="txt" id="QwhichT">Masculine Nouns with "-A" Stem</p><p class="cite" id="QwhichC">dhamma; noun masc.; "the teaching"</p><table class="dec" id="Qdeclension"><tr><th class="dec"></th><th colspan=2 class = "toprow">SINGULAR</th><th colspan=2 class = "toprow">PLURAL</th></tr><tr><th class="dec">NOM</th><td class="dec"><span id="nomSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="nomSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="nomPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="nomPlt" onfocus="this.value=this.value;" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">ACC</th><td class="dec"><span id="accSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="accSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="accPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="accPlt" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">INST</th><td class="dec"><span id="instSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="instSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="instPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="instPlt" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">DAT</th><td class="dec"><span id="datSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="datSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="datPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="datPlt" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">ABL</th><td class="dec"><span id="ablSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="ablSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="ablPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="ablPlt" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">GEN</th><td class="dec"><span id="genSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="genSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="genPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="genPlt" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">LOC</th><td class="dec"><span id="locSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="locSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="locPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="locPlt" onkeyup="this.value=toUni(this.value);"></td></tr><tr><th class="dec">VOC</th><td class="dec"><span id="vocSins"></span></td><td class="decr"><input class="dect" type="text" value="" id="vocSint" onkeyup="this.value=toUni(this.value);"></td><td class="dec"><span id="vocPls"></span></td><td class="decr"><input class="dect" type="text" value="" id="vocPlt" onkeyup="this.value=toUni(this.value);"></td></tr></table><p class="controls"><button title="Check your answers (1)" onclick="checkAnswers()" class="control" id="QcheckAns" type="button">Check</button><button title="Clear table (2)" onclick="clearAnswers()" class="control" id="Qclear" type="button">Clear</button><button title="Show correct answers (3)" onclick="showAnswers()" class="control" id="Qshow" type="button">Show</button><button title="Get a new declension (4)" onclick="resetTable()" class="control" id="Qnew" type="button">New</button></p>';//<hr /><h2 align=center>Correct Answers:</h2><p id="Qcorrects"></p>';
	resetTable();
}


// single declension

function newDOnequiz() {
	document.getElementById('mafbc').innerHTML = '<input type="hidden" id="QwhichS"><p class="txt" id="QwhichT">Masculine Nouns with "-A" Stem</p><p class="cite" id="QwhichC">dhamma; noun masc.; "the teaching"</p><p id="answer"></p><p class="oneDec">Which declension is <span id="oneDec" class="red"></span>?</p><table class="dec" id="Qdeclension"><tr><th class="toprow">Declension</th><th class="toprow">Number</th></tr><tr><td class="dec"><select size="8" id="declension"><option>Nominative</option><option>Accusative</option><option>Instrumental</option><option>Dative</option><option>Ablative</option><option>Genative</option><option>Locative</option><option>Vocative</option></select></td><td class="decr"><select size="2" id="number"><option>Singular</option><option>Plural</option></select></td></tr></table><p class="controls"><button title="Check your answers (1)" onclick="checkAnswer2()" class="control" id="QcheckAns" type="button">Check</button><button title="Show correct answer (3)" onclick="showAnswer2()" class="control" id="Qshow" type="button">Show</button><button title="Get a new declension (4)" onclick="getDeclension()" class="control" id="Qnew" type="button">New</button></p>'; //<hr /><h2 align=center>Correct Answers:</h2><p id="Qcorrects"></p>';
	getDeclension();
}

function quizme() {
	
	// remember rights
	var rights = [];
	var srights;
	if(fileExists('DPTEST')) {
		srights = readFile("DPTEST");
		if(srights) {
			if(/,/.exec(srights[0])) rights=srights.join(',').split(',');
			else rights = srights;
			if(srights.join('') == '') document.getElementById('Qrights').innerHTML = 0;
			else document.getElementById('Qrights').innerHTML = rights.length;
		}
	}
    
	var quiza = new Array();
	var quizeachwrong = new Array();
	var quizanswersout = '';
	var quizrandomright=Math.floor(Math.random()*20926);
	if (rights.length > 20925) {
		alertFlash('Congratulations, you\'ve completed the entire dictionary!','RGBa(0,255,0,0.8)');
		clearrights();
	}
	else while (("|" + rights.join("|") + "|").indexOf('|'+quizrandomright+'|') > -1) { // in case we got it right before
		quizrandomright=Math.floor(Math.random()*20926);
	}	
	var qtmp2 = 0;
	
	var quizrightorder=Math.floor(Math.random()*4);
	for (quizcpd in yt){
		quiza.push(quizcpd);
	}
	document.getElementById('Qlefts').innerHTML = quiza.length - rights.length;
	for (qtmp = 0; qtmp < 3; qtmp++) {
		quizeachwrong[qtmp]=Math.floor(Math.random()*20926);
		while (quizeachwrong[qtmp] == quizrandomright) { // in case we got the same one again!
			quizeachwrong[qtmp]=Math.floor(Math.random()*20926);
		}
	}
	
	var questionout =  quiza[quizrandomright].replace(/,/g, '.');
	questionout =  toUni(questionout.replace(/`n/g, '"n'));

	document.getElementById('qn').innerHTML = document.getElementById('qno').value;
	document.getElementById('qq').innerHTML = questionout;
	
	var ytthis = yt[quiza[quizrandomright]];
	
	var formatanswerwrong = '';
	var formatanswer = ytthis[2];
	var formatanswerout = ytthis[2];
	if (ytthis[1].length > 0) formatanswerout += ' (' + ytthis[1] + ')';
	for (qtmp = 0; qtmp < 4; qtmp++) {
		if (qtmp == quizrightorder) {
			quizanswersout += '<p><span class="abut obut" id="Qa'+(qtmp+1)+'" onclick="answerquiz(1,\'' + questionout + ' = ' + formatanswerout + '\',' + quizrandomright + ')">'+(qtmp+1)+'</span> '+formatanswer+'</p>';
		}
		else {
			ytthis = yt[quiza[quizeachwrong[qtmp2]]];
			formatanswerwrong = ytthis[2];
			quizanswersout += '<p><span class="abut obut" id="Qa'+(qtmp+1)+'" onclick="answerquiz(0,\'' + questionout + ' = ' + formatanswerout + '\')">'+(qtmp+1)+'</span> '+formatanswerwrong+'</p>';
			qtmp2++;
		}
	}
	document.getElementById('answers').innerHTML = quizanswersout;
}

function answerquiz(right,answer,numb) {
	document.getElementById('qn').innerHTML = ++document.getElementById('qno').value;
	if (right == 1) {
		document.getElementById('Qchecka').innerHTML = '<span style="color:green">Right! &nbsp;' + answer + '</span>';
		document.getElementById('Qra').innerHTML = '&nbsp;'+ (++document.getElementById('Qran').value) + '&nbsp;';
		
		// add right to list of rights
		if(fileExists('DPTEST')) {
			var rightfile = readFile('DPTEST');
			if(rightfile.join('') == '') rightfile = [numb];
            else rightfile.push(numb);
            var outfile = rightfile.join('\n');
            if(/,/.exec(outfile)) outfile = outfile.split(',').join('\n');
            writeFile('DPTEST', outfile , "UTF-8");
        }
		else {
            writeFile('DPTEST', ""+numb + '\n', "UTF-8");
        }
	}	
	else {
		document.getElementById('Qchecka').innerHTML ='<span style="color:red">Wrong! &nbsp;' + answer + '</span>';
		document.getElementById('Qwa').innerHTML = '&nbsp;'+(++document.getElementById('Qwan').value) + '&nbsp;';
	}

	var percentr = Number(document.getElementById('Qran').value) / (Number(document.getElementById('Qran').value) + Number(document.getElementById('Qwan').value))*100;

	var colorpc = 0;
	if (percentr <= 50) {
		colorpc = Math.round(percentr/50*255);
		colorpc = colorpc.toString(16).toUpperCase();
		if (colorpc.length == 1) colorpc = '0'+colorpc;
		document.getElementById('Qpa').style.color = '#'+ 'FF' + colorpc + '00';
	}
	else {
		colorpc = Math.round((percentr - 50)/50*255)*(-1)+255;
		colorpc = colorpc.toString(16).toUpperCase();
		if (colorpc.length == 1) colorpc = '0'+colorpc;
		document.getElementById('Qpa').style.color = '#' + colorpc +'FF' + '00';
	}
	document.getElementById('Qpa').innerHTML = '&nbsp;'+Math.round(percentr) + '%&nbsp;';
	quizme();
}

function clearrights() {
    document.getElementById('Qra').innerHTML = 0;
    document.getElementById('Qran').value = 0;
    document.getElementById('Qwa').innerHTML = 0;
    document.getElementById('Qwan').value = 0;
    document.getElementById('Qpa').innerHTML = "";
	document.getElementById('Qrights').innerHTML = 0;
    
	writeFile("DPTEST","","UTF-8");
}

var correctDec = [];

correctDec['ratt'] = [];
correctDec['ratt']['nomSin'] = ['ratti'];
correctDec['ratt']['nomPl'] = ['rattiyo','rattī'];
correctDec['ratt']['accSin'] = ['rattiṃ'];
correctDec['ratt']['accPl'] = ['rattiyo','rattī'];
correctDec['ratt']['instSin'] = ['rattiyā'];
correctDec['ratt']['instPl'] = ['rattīhi'];
correctDec['ratt']['datSin'] = ['rattiyā'];
correctDec['ratt']['datPl'] = ['rattīnaṃ'];
correctDec['ratt']['ablSin'] = ['rattiyā'];
correctDec['ratt']['ablPl'] = ['rattīhi'];
correctDec['ratt']['genSin'] = ['rattiyā'];
correctDec['ratt']['genPl'] = ['rattīnaṃ'];
correctDec['ratt']['locSin'] = ['rattiyā','rattiyaṃ'];
correctDec['ratt']['locPl'] = ['rattīsu'];
correctDec['ratt']['vocSin'] = ['ratti'];
correctDec['ratt']['vocPl'] = ['rattiyo','rattī'];
	
correctDec['sāl'] = [];
correctDec['sāl']['nomSin'] = ['sālā'];
correctDec['sāl']['nomPl'] = ['sālā','sālāyo'];
correctDec['sāl']['accSin'] = ['sālaṃ'];
correctDec['sāl']['accPl'] = ['sālā','sālāyo'];
correctDec['sāl']['instSin'] = ['sālāya'];
correctDec['sāl']['instPl'] = ['sālāhi'];
correctDec['sāl']['datSin'] = ['sālāya'];
correctDec['sāl']['datPl'] = ['sālānaṃ'];
correctDec['sāl']['ablSin'] = ['sālāya'];
correctDec['sāl']['ablPl'] = ['sālāhi'];
correctDec['sāl']['genSin'] = ['sālāya'];
correctDec['sāl']['genPl'] = ['sālānaṃ'];
correctDec['sāl']['locSin'] = ['sālāya','sālāyaṃ'];
correctDec['sāl']['locPl'] = ['sālāsu'];
correctDec['sāl']['vocSin'] = ['sāle'];
correctDec['sāl']['vocPl'] = ['sālā','sālāyo'];

correctDec['nad'] = [];
correctDec['nad']['nomSin'] = ['nadī'];
correctDec['nad']['nomPl'] = ['nadiyo','nadī'];
correctDec['nad']['accSin'] = ['nadiṃ'];
correctDec['nad']['accPl'] = ['nadiyo','nadī'];
correctDec['nad']['instSin'] = ['nadiyā'];
correctDec['nad']['instPl'] = ['nadīhi'];
correctDec['nad']['datSin'] = ['nadiyā'];
correctDec['nad']['datPl'] = ['nadīnaṃ'];
correctDec['nad']['ablSin'] = ['nadiyā'];
correctDec['nad']['ablPl'] = ['nadīhi'];
correctDec['nad']['genSin'] = ['nadiyā'];
correctDec['nad']['genPl'] = ['nadīnaṃ'];
correctDec['nad']['locSin'] = ['nadiyā','nadiyaṃ'];
correctDec['nad']['locPl'] = ['nadīsu'];
correctDec['nad']['vocSin'] = ['nadi'];
correctDec['nad']['vocPl'] = ['nadiyo','nadī'];

correctDec['dhamm'] = [];
correctDec['dhamm']['nomSin'] = ['dhammo'];
correctDec['dhamm']['nomPl'] = ['dhammā'];
correctDec['dhamm']['accSin'] = ['dhammaṃ'];
correctDec['dhamm']['accPl'] = ['dhamme'];
correctDec['dhamm']['instSin'] = ['dhammena'];
correctDec['dhamm']['instPl'] = ['dhammehi'];
correctDec['dhamm']['datSin'] = ['dhammāya','dhammassa'];
correctDec['dhamm']['datPl'] = ['dhammānaṃ'];
correctDec['dhamm']['ablSin'] = ['dhammā','dhammasmā','dhammamhā'];
correctDec['dhamm']['ablPl'] = ['dhammehi'];
correctDec['dhamm']['genSin'] = ['dhammassa'];
correctDec['dhamm']['genPl'] = ['dhammānaṃ'];
correctDec['dhamm']['locSin'] = ['dhamme','dhammasmiṃ','dhammamhi'];
correctDec['dhamm']['locPl'] = ['dhammesu'];
correctDec['dhamm']['vocSin'] = ['dhamma'];
correctDec['dhamm']['vocPl'] = ['dhammā'];

correctDec['mun'] = [];
correctDec['mun']['nomSin'] = ['muni'];
correctDec['mun']['nomPl'] = ['munayo','munī'];
correctDec['mun']['accSin'] = ['muniṃ'];
correctDec['mun']['accPl'] = ['munayo','munī'];
correctDec['mun']['instSin'] = ['muninā'];
correctDec['mun']['instPl'] = ['munīhi'];
correctDec['mun']['datSin'] = ['munino','munissa'];
correctDec['mun']['datPl'] = ['munīnaṃ'];
correctDec['mun']['ablSin'] = ['muninā','munismā','munimhā'];
correctDec['mun']['ablPl'] = ['munīhi'];
correctDec['mun']['genSin'] = ['munino','munissa'];
correctDec['mun']['genPl'] = ['munīnaṃ'];
correctDec['mun']['locSin'] = ['munismiṃ','munimhi'];
correctDec['mun']['locPl'] = ['munīsu'];
correctDec['mun']['vocSin'] = ['muni'];
correctDec['mun']['vocPl'] = ['munayo','munī'];

correctDec['bandh'] = [];
correctDec['bandh']['nomSin'] = ['bandhu'];
correctDec['bandh']['nomPl'] = ['bandhavo','bandhū'];
correctDec['bandh']['accSin'] = ['bandhuṃ'];
correctDec['bandh']['accPl'] = ['bandhavo','bandhū'];
correctDec['bandh']['instSin'] = ['bandhunā'];
correctDec['bandh']['instPl'] = ['bandhūhi'];
correctDec['bandh']['datSin'] = ['bandhuno','bandhussa'];
correctDec['bandh']['datPl'] = ['bandhūnaṃ'];
correctDec['bandh']['ablSin'] = ['bandhunā','bandhusmā','bandhumhā'];
correctDec['bandh']['ablPl'] = ['bandhūhi'];
correctDec['bandh']['genSin'] = ['bandhuno','bandhussa'];
correctDec['bandh']['genPl'] = ['bandhūnaṃ'];
correctDec['bandh']['locSin'] = ['bandhusmiṃ','bandhumhi'];
correctDec['bandh']['locPl'] = ['bandhūsu'];
correctDec['bandh']['vocSin'] = ['bandhu'];
correctDec['bandh']['vocPl'] = ['bandhavo','bandhū'];

correctDec['rūp'] = [];
correctDec['rūp']['nomSin'] = ['rūpaṃ'];
correctDec['rūp']['nomPl'] = ['rūpāni','rūpā'];
correctDec['rūp']['accSin'] = ['rūpaṃ'];
correctDec['rūp']['accPl'] = ['rūpāni','rūpe'];
correctDec['rūp']['instSin'] = ['rūpena'];
correctDec['rūp']['instPl'] = ['rūpehi'];
correctDec['rūp']['datSin'] = ['rūpāya','rūpassa'];
correctDec['rūp']['datPl'] = ['rūpānaṃ'];
correctDec['rūp']['ablSin'] = ['rūpā','rūpasmā','rūpamhā'];
correctDec['rūp']['ablPl'] = ['rūpehi'];
correctDec['rūp']['genSin'] = ['rūpassa'];
correctDec['rūp']['genPl'] = ['rūpānaṃ'];
correctDec['rūp']['locSin'] = ['rūpe','rūpasmiṃ','rūpamhi'];
correctDec['rūp']['locPl'] = ['rūpesu'];
correctDec['rūp']['vocSin'] = ['rūpa'];
correctDec['rūp']['vocPl'] = ['rūpāni','rūpā'];

correctDec['cakkh'] = [];
correctDec['cakkh']['nomSin'] = ['cakkhu','cakkhuṃ'];
correctDec['cakkh']['nomPl'] = ['cakkhūni','cakkhū'];
correctDec['cakkh']['accSin'] = ['cakkhu','cakkhuṃ'];
correctDec['cakkh']['accPl'] = ['cakkhūni','cakkhū'];
correctDec['cakkh']['instSin'] = ['cakkhunā'];
correctDec['cakkh']['instPl'] = ['cakkhūhi'];
correctDec['cakkh']['datSin'] = ['cakkhuno','cakkhussa'];
correctDec['cakkh']['datPl'] = ['cakkhūnaṃ'];
correctDec['cakkh']['ablSin'] = ['cakkhunā','cakkhusmā','cakkhumhā'];
correctDec['cakkh']['ablPl'] = ['cakkhūhi'];
correctDec['cakkh']['genSin'] = ['cakkhuno','cakkhussa'];
correctDec['cakkh']['genPl'] = ['cakkhūnaṃ'];
correctDec['cakkh']['locSin'] = ['cakkhusmiṃ','cakkhumhi'];
correctDec['cakkh']['locPl'] = ['cakkhūsu'];
correctDec['cakkh']['vocSin'] = ['cakkhu','cakkhuṃ'];
correctDec['cakkh']['vocPl'] = ['cakkhūni','cakkhū'];

correctDec['ma'] = [];
correctDec['ma']['nomSin'] = ['ahaṃ'];
correctDec['ma']['nomPl'] = ['mayaṃ','amhe'];
correctDec['ma']['accSin'] = ['maṃ','mamaṃ'];
correctDec['ma']['accPl'] = ['amhe','asme','asmākaṃ','amhākaṃ','amhaṃ'];
correctDec['ma']['instSin'] = ['mayā'];
correctDec['ma']['instPl'] = ['amhehi'];
correctDec['ma']['datSin'] = ['mama','mayhaṃ','mamaṃ','amhaṃ'];
correctDec['ma']['datPl'] = ['amhākaṃ','asmākaṃ','amhaṃ'];
correctDec['ma']['ablSin'] = ['mayā'];
correctDec['ma']['ablPl'] = ['amhehi'];
correctDec['ma']['genSin'] = ['mama','mayhaṃ','mamaṃ','amhaṃ'];
correctDec['ma']['genPl'] = ['amhākaṃ','asmākaṃ','amhaṃ'];
correctDec['ma']['locSin'] = ['mayi'];
correctDec['ma']['locPl'] = ['amhesu'];
correctDec['ma']['vocSin'] = [''];
correctDec['ma']['vocPl'] = [''];

correctDec['tva'] = [];
correctDec['tva']['nomSin'] = ['tvaṃ','tuvaṃ'];
correctDec['tva']['nomPl'] = ['tumhe'];
correctDec['tva']['accSin'] = ['tvaṃ','taṃ','tuvaṃ'] ;
correctDec['tva']['accPl'] = ['tumhe','tumhākaṃ'];
correctDec['tva']['instSin'] = ['tvayā','tayā'];
correctDec['tva']['instPl'] = ['tumhehi','tumhebhi'];
correctDec['tva']['datSin'] = ['tava','tuyhaṃ','tavaṃ','tumhaṃ'];
correctDec['tva']['datPl'] = ['tumhākaṃ','tumhaṃ'];
correctDec['tva']['ablSin'] = ['tvayā'];
correctDec['tva']['ablPl'] = ['tumhehi','tumhebhi'];
correctDec['tva']['genSin'] = ['tava','tuyhaṃ','tavaṃ','tumhaṃ'];
correctDec['tva']['genPl'] = ['tumhākaṃ','tumhaṃ'];
correctDec['tva']['locSin'] = ['tvayi','tayi'];
correctDec['tva']['locPl'] = ['tumhesu'];
correctDec['tva']['vocSin'] = [''];
correctDec['tva']['vocPl'] = [''];

correctDec['sa'] = [];
correctDec['sa']['nomSin'] = ['sā'];
correctDec['sa']['nomPl'] = ['tā'];
correctDec['sa']['accSin'] = ['taṃ'];
correctDec['sa']['accPl'] = ['tā'];
correctDec['sa']['instSin'] = ['tāya'];
correctDec['sa']['instPl'] = ['tāhi'];
correctDec['sa']['datSin'] = ['tāya','tassā','tissā','tissāya'];
correctDec['sa']['datPl'] = ['tāsaṃ','tāsānaṃ'];
correctDec['sa']['ablSin'] = ['tāya'];
correctDec['sa']['ablPl'] = ['tāhi'];
correctDec['sa']['genSin'] = ['tāya','tassā','tissā','tissāya'];
correctDec['sa']['genPl'] = ['tāsaṃ','tāsānaṃ'];
correctDec['sa']['locSin'] = ['tāya','tayaṃ','tissaṃ'];
correctDec['sa']['locPl'] = ['tāsu'];
correctDec['sa']['vocSin'] = [''];
correctDec['sa']['vocPl'] = [''];

correctDec['so'] = [];
correctDec['so']['nomSin'] = ['so','sa'];
correctDec['so']['nomPl'] = ['te'];
correctDec['so']['accSin'] = ['taṃ'];
correctDec['so']['accPl'] = ['te'];
correctDec['so']['instSin'] = ['tena'];
correctDec['so']['instPl'] = ['tehi','tebhi'];
correctDec['so']['datSin'] = ['tassa'];
correctDec['so']['datPl'] = ['tesaṃ','tesānaṃ'];
correctDec['so']['ablSin'] = ['tasmā','tamhā'];
correctDec['so']['ablPl'] = ['tehi','tebhi'];
correctDec['so']['genSin'] = ['tassa'];
correctDec['so']['genPl'] = ['tesaṃ','tesānaṃ'];
correctDec['so']['locSin'] = ['tasmiṃ','tamhi'];
correctDec['so']['locPl'] = ['tesu'];
correctDec['so']['vocSin'] = [''];
correctDec['so']['vocPl'] = [''];

correctDec['ta'] = [];
correctDec['ta']['nomSin'] = ['taṃ'];
correctDec['ta']['nomPl'] = ['tāni'];
correctDec['ta']['accSin'] = ['taṃ'];
correctDec['ta']['accPl'] = ['tāni'];
correctDec['ta']['instSin'] = ['tena'];
correctDec['ta']['instPl'] = ['tehi','tebhi'];
correctDec['ta']['datSin'] = ['tassa'];
correctDec['ta']['datPl'] = ['tesaṃ','tesānaṃ'];
correctDec['ta']['ablSin'] = ['tasmā','tamhā'];
correctDec['ta']['ablPl'] = ['tehi','tebhi'];
correctDec['ta']['genSin'] = ['tassa'];
correctDec['ta']['genPl'] = ['tesaṃ','tesānaṃ'];
correctDec['ta']['locSin'] = ['tasmiṃ','tamhi'];
correctDec['ta']['locPl'] = ['tesu'];
correctDec['ta']['vocSin'] = [''];
correctDec['ta']['vocPl'] = [''];


var decls = [];
decls.push('nomSin');
decls.push('nomPl');
decls.push('accSin');
decls.push('accPl');
decls.push('instSin');
decls.push('instPl');
decls.push('datSin');
decls.push('datPl');
decls.push('ablSin');
decls.push('ablPl');
decls.push('genSin');
decls.push('genPl');
decls.push('locSin');
decls.push('locPl');
decls.push('vocSin');
decls.push('vocPl');

var declsToNo = [];
declsToNo['nomSin'] = [0,0];
declsToNo['nomPl'] = [0,1];
declsToNo['accSin'] = [1,0];
declsToNo['accPl'] = [1,1];
declsToNo['instSin'] = [2,];
declsToNo['instPl'] = [2,1];
declsToNo['datSin'] = [3,0];
declsToNo['datPl'] = [3,1];
declsToNo['ablSin'] = [4,0];
declsToNo['ablPl'] = [4,1];
declsToNo['genSin'] = [5,0];
declsToNo['genPl'] = [5,1];
declsToNo['locSin'] = [6,0];
declsToNo['locPl'] = [6,1];
declsToNo['vocSin'] = [7,0];
declsToNo['vocPl'] = [7,1];

var declNo = [];
declNo.push(['nomSin','nomPl']);
declNo.push(['accSin','accPl']);
declNo.push(['instSin','instPl']);
declNo.push(['datSin','datPl']);
declNo.push(['ablSin','ablPl']);
declNo.push(['genSin','genPl']);
declNo.push(['locSin','locPl']);
declNo.push(['vocSin','vocPl']);


var words = [];
words.push(['ratt','ratt','Feminine Nouns with "-I" Stem','ratti; noun fem.; "night"']);
words.push(['sāl','sāl','Feminine Nouns with "-Ā" Stem','sāla; noun fem.; "public hall"']);
words.push(['nad','nad','Feminine Nouns with "-Ī" Stem','nadī; noun fem.; "river"']);
words.push(['dhamm','dhamm','Masculine Nouns with "-A" Stem','dhamma; noun masc.; "the teaching"']);
words.push(['mun','mun','Masculine Nouns with "-I" Stem','muni; noun masc.; "sage"']);
words.push(['bandh','bandh','Masc Nouns with "-U" Stem','bandhu; noun masc.; "kinsman, relative"']);
words.push(['rūp','rūp','Neuter Nouns with "-A" Stem','rūpa; noun masc.; "material form"']);
words.push(['cakkh','cakkh','Neuter Nouns with "-U" Stem','cakkhu; noun neut..; "eye"']);
words.push(['ma','','1st Person Pronoun','1st Person Pronoun']);
words.push(['tva','','2nd Person Pronoun','2nd Person Pronoun']);
words.push(['sa','','Demonstrative Pronoun','3rd person feminine']);
words.push(['so','','Demonstrative Pronoun','3rd person masculine']);
words.push(['ta','','Demonstrative Pronoun','3rd person neuter']);

/*

var out='';

for (i in words) {
	out+= "words.push(['"+words[i][0]+"','"+words[i][1]+"','"+allT[i]+"','"+allC[i]+"']);<br/>";
}
*/

function resetTable()  {

	if(Drights.length == words.length) {
		alert('done'); 
		rights = [];
	}
	if (document.getElementById('Qshow').innerHTML == 'Hide') hideAnswers();
	var rn=Math.floor(Math.random()*12);
	while(Drights[rn] == 1) {
		rn=Math.floor(Math.random()*12);
	}
	document.getElementById('QwhichS').value = rn
	document.getElementById('QwhichT').innerHTML = words[rn][2];
	document.getElementById('QwhichC').innerHTML = words[rn][3];
	var stem = words[rn][0];
	addStems(stem,rn);
	clearAnswers();
	showRights();
}

function addStems(stem,rn) {
	for (i in decls) {
		document.getElementById(decls[i]+'s').innerHTML = words[rn][1];
		if (correctDec[stem][decls[i]][0] == '') document.getElementById(decls[i]+'t').disabled = 'true';
		else document.getElementById(decls[i]+'t').disabled = ''; 
	}
}

var Drights = [];

function checkAnswers() {
	var wrong = 0;
	for (i in decls) {
		var right = 0;
		var rn = document.getElementById('QwhichS').value;
		var stem = words[rn][0];
		var thisa = document.getElementById(decls[i]+'t');
		for (j in correctDec[stem][decls[i]]) {
			if (correctDec[stem][decls[i]][j] == '') {
				thisa.style.backgroundColor = '';
				right = 1;
				break;
			}
			if (rstems[stem]+thisa.value == correctDec[stem][decls[i]][j]) {
				thisa.style.backgroundColor = '#5F5';
				right = 1;
				break;
			}
			else {
				thisa.style.backgroundColor = '#F55';
			}
		}
		if (right == 0) wrong = 1;
	}
	if (wrong == 0) {
		Drights[rn] = 1;
	}
	showRights();
}

function showRights() {
	document.getElementById('Qcorrects').innerHTML = '';
	for (i in Drights) {
		document.getElementById('Qcorrects').innerHTML += words[i][0]+'-<br />';
	}
	if (document.getElementById('Qcorrects').innerHTML != '') document.getElementById('Qcorrects').innerHTML += '<br /><span class="abut obut tiny" title="Reset right answers" onclick="rights = []; showRights();" id="resetRights">Reset</span>';
}

function clearAnswers() {
	var rn = document.getElementById('QwhichS').value;
	var stem = words[rn][0];
	for (i in decls) {
		document.getElementById(decls[i]+'t').value = '';
		document.getElementById(decls[i]+'t').style.backgroundColor = '';
	}
}			

function showAnswers() {
	
	document.getElementById('Qshow').innerHTML = 'Hide';
	document.getElementById('Qshow').onclick = function () { hideAnswers() };
	var rn = document.getElementById('QwhichS').value;
	var stem = words[rn][0];
	for (i in decls) {
		document.getElementById(decls[i]+'t').style.backgroundColor = '';
		document.getElementById(decls[i]+'t').style.display = 'none';
		document.getElementById(decls[i]+'s').innerHTML = correctDec[stem][decls[i]].join(', ');
	}
}
function hideAnswers() {
	document.getElementById('Qshow').innerHTML = 'Show';
	document.getElementById('Qshow').onclick = function() { showAnswers() };
	for (i in decls) {
		document.getElementById(decls[i]+'t').style.backgroundColor = 'white';
		document.getElementById(decls[i]+'t').style.display = 'block';
		document.getElementById(decls[i]+'s').innerHTML = '';
	}
	var rn = document.getElementById('QwhichS').value;
	var stem = words[rn][0];
	addStems(stem,rn);
}

var G_oneDec = [0,0,0];

function getDeclension() {
	$('#declension')[0].selectedIndex = -1;
	$('#number')[0].selectedIndex = -1;
	var rn=Math.floor(Math.random()*12);
	var rn2=Math.floor(Math.random()*16);
	var stem = words[rn][0];
	var alts = correctDec[stem][decls[rn2]];
	var rn3=Math.floor(Math.random()*alts.length);
	var oneWord = alts[rn3];
	if(!oneWord) {
		return getDeclension();
	}
	G_oneDec = [stem,oneWord,rn2];
	$('#QwhichT').html(words[rn][2]);
	$('#QwhichC').html(words[rn][3]);
	$('#oneDec').html(alts[rn3]);
}


function checkAnswer2() {
	var dec = $('#declension')[0].selectedIndex;
	var num = $('#number')[0].selectedIndex;
	var alts = correctDec[G_oneDec[0]][declNo[dec][num]];
	for(i in alts) {
		if(alts[i] == G_oneDec[1]) {
			$('#answer').html('<span class="green">Right!</span>');
			getDeclension();
			return
		}
	}
	$('#answer').html('<span class="red">Wrong!</span>');
}

function showAnswer2(cnt){
	$('#declension')[0].selectedIndex = -1;
	$('#number')[0].selectedIndex = -1;

	if(!cnt)
		cnt = 0;
	if(cnt == 3)
		return;
		
	setTimeout(function(){showAnswerBounce(cnt)},500);
}

function showAnswerBounce(cnt) {
	cnt++;
	var d = declsToNo[decls[G_oneDec[2]]];
	$('#declension')[0].selectedIndex = d[0];
	$('#number')[0].selectedIndex = d[1];
	setTimeout(function(){showAnswer2(cnt)},500);
}