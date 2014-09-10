    //chars aceitos
	var lwr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!-´[];.,"?_ç~`{^}Ç\'<>:?';
function casosespeciais (unicode){
	if (unicode == 180){tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#12300;'); return false}	
	if (unicode == 96){tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#65371;'); return false}
	if (unicode == 231){tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#65307;'); return false}		
	if (unicode == 199){tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#65306;'); return false}
	if (unicode == 39){tinymce.dom.Event.cancel(e); return false}
	return true
}

function isValid(parm,val) {
	if (parm == "") return true;
	for (i=0; i<parm.length; i++) {
	if (val.indexOf(parm.charAt(i),0) == -1) return false;
	}
	return true;
}
	
function hiraganafunc(){
	var sucesso = true;
	var caractere = '';
	var i = 0;
	var novocont = '';
	
	var conteudo = document.getElementById('caract').innerHTML;
	conteudo = conteudo.replace(/(\r\n|\n|\r)/gm,"");
	if ((conteudo.charAt(0) == conteudo.charAt(1)) && (conteudo.charAt(0) != 'n')){
		for (i = 1; i < conteudo.length; i++){
			novocont = conteudo.charAt(i);
		}
		document.getElementById('caract').innerHTML = novocont;
		tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#12387;'); //tsu pequeno
		conteudo = novocont;
	}
	if (conteudo != "Ç"){conteudo = conteudo.toLowerCase();}

	
	switch (conteudo) {
        case '1':
            caractere = '&#65297;';
            break;
        case "2":
            caractere = '&#65298;';
            break;
        case '3':
            caractere = '&#65299;';
            break;
        case '4':
            caractere = '&#65300;';
            break;
        case '5':
            caractere = '&#65301;';
            break;
        case '6':
            caractere = '&#65302;';
            break;
        case '7':
            caractere = '&#65303;';
            break;
        case '8':
            caractere = '&#65304;';
            break;
        case '9':
            caractere = '&#65305;';
            break;
        case '0':
            caractere = '&#65296;';
            break;
			
        case '"':
            caractere = '&#65374;';
            break;
        case "'":
            caractere = '&#8216;';
            break;
        case '!':
            caractere = '&#65281;';
            break;
        case '-':
            caractere = '&#12540;';
            break;
        case '_':
            caractere = '&#65343;';
            break;
        case '´':
            caractere = '&#12300;';
            break;
        case '[':
            caractere = '&#12301;';
            break;
		
		case '`':
            caractere = '&#65371;';
            break;
        case '{':
            caractere = '&#65373;';
            break;
			
		case 'ç':
            caractere = '&#65307;';
            break;
        case '~':
            caractere = '&#8217;';
            break;
        case ']':
            caractere = '&#65509;';
            break;
			
		case 'Ç':
            caractere = '&#65306;';
            break;
        case '^':
            caractere = '&#8221;';
            break;
        case '}':
            caractere = '&#65372;';
            break;
			
		case ',':
            caractere = '&#12289;';
            break;
        case '.':
            caractere = '&#12290;';
            break;
        case ';':
            caractere = '&#12539;';
            break;
        case '?':
            caractere = '&#65311;';
            break;
			
		case '<':
            caractere = '&#65308;';
            break;
        case '>':
            caractere = '&#65310;';
            break;
        case ':':
            caractere = '&#65311;';
            break;
			
					
        case 'a':
            caractere = '&#12354;';
            break;
        case 'e':
            caractere = '&#12360;';
            break;
        case 'i':
            caractere = '&#12356;';
            break;
        case 'o':
            caractere = '&#12362;';
            break;
        case 'u':
            caractere = '&#12358;';
            break;
        case 'ka':
            caractere = '&#12363;';
            break;
        case 'ki':
            caractere = '&#12365;';
            break;
        case 'ku':
            caractere = '&#12367;';
            break;
        case 'ke':
            caractere = '&#12369;';
            break;
        case 'ko':
            caractere = '&#12371;';
            break;
        case 'sa':
            caractere = '&#12373;';
            break;
		case 'si':
            caractere = '&#12375;';
            break;
		case 'shi':
            caractere = '&#12375;';
            break;
		case 'su':
            caractere = '&#12377;';
			break;
		case 'se':
            caractere = '&#12379;';
            break;
		case 'so':
            caractere = '&#12381;';
            break;
		case 'ta':
            caractere = '&#12383;';
            break;
		case 'ti':
            caractere = '&#12385;';
            break;
		case 'chi':
            caractere = '&#12385;';
            break;
		case 'ji':
            caractere = '&#12376;';
            break;
		case 'tu':
            caractere = '&#12388;';
            break;
		case 'tsu':
            caractere = '&#12388;';
            break;
		case 'te':
            caractere = '&#12390;';
            break;
		case 'to':
            caractere = '&#12392;';
            break;
		case 'na':
            caractere = '&#12394;';
            break;
		case 'ni':
            caractere = '&#12395;';
            break;
		case 'nu':
            caractere = '&#12396;';
            break;
		case 'ne':
            caractere = '&#12397;';
            break;
		case 'no':
            caractere = '&#12398;';
            break;
		case 'ha':
            caractere = '&#12399;';
            break;
		case 'hi':
            caractere = '&#12402;';
            break;
		case 'hu':
            caractere = '&#12405;';
            break;
		case 'he':
            caractere = '&#12408;';
            break;
		case 'ho':
            caractere = '&#12411;';
            break;
		case 'ma':
            caractere = '&#12414;';
            break;
		case 'mi':
            caractere = '&#12415;';
            break;
		case 'mu':
            caractere = '&#12416;';
            break;
		case 'me':
            caractere = '&#12417;';
            break;
		case 'mo':
            caractere = '&#12418;';
            break;
		case 'ra':
            caractere = '&#12425;';
            break;
		case 'ri':
            caractere = '&#12426;';
            break;
		case 'ru':
            caractere = '&#12427;';
            break;
		case 're':
            caractere = '&#12428;';
            break;
		case 'ro':
            caractere = '&#12429;';
            break;
		case 'ya':
            caractere = '&#12420;';
            break;
		case 'yu':
            caractere = '&#12422;';
            break;
		case 'yo':
            caractere = '&#12424;';
            break;
		case 'wa':
            caractere = '&#12431;';
            break;
		case 'wo':
            caractere = '&#12434;';
            break;
		case 'nn':
            caractere = '&#12435;';
            break;
		case 'ga':
            caractere = '&#12364;';
            break;
		case 'gi':
            caractere = '&#12366;';
            break;
		case 'gu':
            caractere = '&#12368;';
            break;
		case 'ge':
            caractere = '&#12370;';
            break;
		case 'go':
            caractere = '&#12372;';
            break;
		case 'za':
            caractere = '&#12374;';
            break;
		case 'zi':
            caractere = '&#12376;';
            break;
		case 'zu':
            caractere = '&#12378;';
            break;
		case 'ze':
            caractere = '&#12380;';
            break;
		case 'zo':
            caractere = '&#12382;';
            break;
		case 'da':
            caractere = '&#12384;';
            break;
		case 'di':
            caractere = '&#12386;';
            break;
		case 'du':
            caractere = '&#12389;';
            break;
		case 'dzu':
            caractere = '&#12389;';
            break;
		case 'de':
            caractere = '&#12391;';
            break;
		case 'do':
            caractere = '&#12393;';
            break;
		case 'ba':
            caractere = '&#12400;';
            break;
		case 'bi':
            caractere = '&#12403;';
            break;
		case 'bu':
            caractere = '&#12406;';
            break;
		case 'be':
            caractere = '&#12409;';
            break;
		case 'bo':
            caractere = '&#12412;';
            break;
		case 'pa':
            caractere = '&#12401;';
            break;
		case 'pi':
            caractere = '&#12404;';
            break;
		case 'pu':
            caractere = '&#12407;';
            break;
		case 'pe':
            caractere = '&#12410;';
            break;
		case 'po':
            caractere = '&#12413;';
            break;
		case 'fa':
            caractere = '&#12405;&#12353;';
            break;
		case 'fi':
            caractere = '&#12405;&#12355;';
            break;
		case 'fu':
            caractere = '&#12405;';
            break;
		case 'fe':
            caractere = '&#12405;&#12359;';
            break;
		case 'fo':
            caractere = '&#12405;&#12361;';
            break;
		case 'va':
            caractere = '&#12532;&#12353;';
            break;
		case 'vi':
            caractere = '&#12532;&#12355;';
            break;
		case 'vu':
            caractere = '&#12532;';
            break;
		case 've':
            caractere = '&#12532;&#12359;';
            break;
		case 'vo':
            caractere = '&#12532;&#12361;';
            break;
		case 'vya':
            caractere = '&#12532;&#12419;';
            break;
		case 'vyu':
            caractere = '&#12532;&#12421;';
            break;
		case 'vyo':
            caractere = '&#12532;&#12423;';
            break;
		case 'fya':
            caractere = '&#12405;&#12419;';
            break;
		case 'fyu':
            caractere = '&#12405;&#12421;';
            break;
		case 'fyo':
            caractere = '&#12405;&#12423;';
            break;
		case 'kya':
            caractere = '&#12365;&#12419;';
            break;
		case 'kyu':
            caractere = '&#12365;&#12421;';
            break;
		case 'kyo':
            caractere = '&#12365;&#12423;';
            break;
		case 'sha':
            caractere = '&#12375;&#12419;';
            break;
		case 'shu':
            caractere = '&#12375;&#12421;';
            break;
		case 'sho':
            caractere = '&#12375;&#12423;';
            break;
		case 'shya':
            caractere = '&#12375;&#12419;';
            break;
		case 'shyu':
            caractere = '&#12375;&#12421;';
            break;
		case 'shyo':
            caractere = '&#12375;&#12423;';
            break;
		case 'cha':
            caractere = '&#12385;&#12419;';
            break;
		case 'chu':
            caractere = '&#12385;&#12421;';
            break;
		case 'cho':
            caractere = '&#12385;&#12423;';
            break;
		case 'chya':
            caractere = '&#12385;&#12419;';
            break;
		case 'chyu':
            caractere = '&#12385;&#12421;';
            break;
		case 'chyo':
            caractere = '&#12385;&#12423;';
            break;
		case 'nya':
            caractere = '&#12395;&#12419;';
            break;
		case 'nyu':
            caractere = '&#12395;&#12421;';
            break;
		case 'nyo':
            caractere = '&#12395;&#12423;';
            break;
		case 'hya':
            caractere = '&#12402;&#12419;';
            break;
		case 'hyu':
            caractere = '&#12402;&#12421;';
            break;
		case 'hyo':
            caractere = '&#12402;&#12423;';
            break;
		case 'mya':
            caractere = '&#12415;&#12419;';
            break;
		case 'myu':
            caractere = '&#12415;&#12421;';
            break;
		case 'myo':
            caractere = '&#12415;&#12423;';
            break;
		case 'rya':
            caractere = '&#12426;&#12419;';
            break;
		case 'ryu':
            caractere = '&#12426;&#12421;';
            break;
		case 'ryo':
            caractere = '&#12426;&#12423;';
            break;
		case 'gya':
            caractere = '&#12366;&#12419;';
            break;
		case 'gyu':
            caractere = '&#12366;&#12421;';
            break;
		case 'gyo':
            caractere = '&#12366;&#12423;';
            break;
		case 'jya':
            caractere = '&#12376;&#12419;';
            break;
		case 'jyu':
            caractere = '&#12376;&#12421;';
            break;
		case 'jyo':
            caractere = '&#12376;&#12423;';
            break;
		case 'ja':
            caractere = '&#12376;&#12419;';
            break;
		case 'ju':
            caractere = '&#12376;&#12421;';
            break;
		case 'jo':
            caractere = '&#12376;&#12423;';
            break;
		case 'bya':
            caractere = '&#12403;&#12419;';
            break;
		case 'byu':
            caractere = '&#12403;&#12421;';
            break;
		case 'byo':
            caractere = '&#12403;&#12423;';
            break;
		case 'pya':
            caractere = '&#12404;&#12419;';
            break;
		case 'pyu':
            caractere = '&#12404;&#12421;';
            break;
		case 'pyo':
            caractere = '&#12404;&#12423;';
            break;
		
		case 'ca':
            caractere = '&#12363;';
            break;
		case 'ci':
            caractere = '&#12375;';
            break;
		case 'cu':
            caractere = '&#12367;';
            break;
		case 'ce':
            caractere = '&#12379;';
            break;
		case 'co':
            caractere = '&#12371;';
            break;
		case 'la':
            caractere = '&#12353;';
            break;
		case 'li':
            caractere = '&#12355;';
            break;
		case 'lu':
            caractere = '&#12357;';
            break;
		case 'le':
            caractere = '&#12359;';
            break;
		case 'lo':
            caractere = '&#12361;';
            break;
		case 'xa':
            caractere = '&#12353;';
            break;
		case 'xi':
            caractere = '&#12355;';
            break;
		case 'xu':
            caractere = '&#12357;';
            break;
		case 'xe':
            caractere = '&#12359;';
            break;
		case 'xo':
            caractere = '&#12361;';
            break;
		case 'qa':
            caractere = '&#12367;&#12353;';
            break;
		case 'qi':
            caractere = '&#12367;&#12355;';
            break;
		case 'qu':
            caractere = '&#12367;';
            break;
		case 'qe':
            caractere = '&#12367;&#12359;';
            break;
		case 'qo':
            caractere = '&#12367;&#12361;';
            break;

		case 'wi':
            caractere = '&#12358;&#12355;';
            break;
		case 'wu':
            caractere = '&#12358;';
            break;
		case 'we':
            caractere = '&#12358;&#12359;';
            break;
			
		case 'she':
            caractere = '&#12375;&#12359;';
            break;
		case 'che':
            caractere = '&#12385;&#12359;';
            break;

        default:
            // se não for nenhum dos cases acima, então:
            sucesso = false;
			if ((conteudo.charAt(0) == 'n') && (conteudo.length > 1)){		
				for (i = 1; i < conteudo.length; i++){
					novocont = conteudo.charAt(i);
				}
				document.getElementById('caract').innerHTML = novocont;
				tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#12435;'); //letra 'hmm'
				conteudo = novocont;
				hiraganafunc();
			}
    }

	if (sucesso == true){
		document.getElementById('caract').innerHTML = '';
		tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,caractere);
	}
}

	
function katakanafunc(){
	var sucesso = true;
	var caractere = '';
	var i = 0;
	var novocont = '';
	
	var conteudo = document.getElementById('caract').innerHTML;
	conteudo = conteudo.replace(/(\r\n|\n|\r)/gm,"");
	if ((conteudo.charAt(0) == conteudo.charAt(1)) && (conteudo.charAt(0) != 'n')){
		for (i = 1; i < conteudo.length; i++){
			novocont = conteudo.charAt(i);
		}
		document.getElementById('caract').innerHTML = novocont;
		tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#12483;'); //tsu pequeno
		conteudo = novocont;
	}
	if (conteudo != "Ç"){conteudo = conteudo.toLowerCase();}

	
	switch (conteudo) {
        case '1':
            caractere = '&#65297;';
            break;
        case "2":
            caractere = '&#65298;';
            break;
        case '3':
            caractere = '&#65299;';
            break;
        case '4':
            caractere = '&#65300;';
            break;
        case '5':
            caractere = '&#65301;';
            break;
        case '6':
            caractere = '&#65302;';
            break;
        case '7':
            caractere = '&#65303;';
            break;
        case '8':
            caractere = '&#65304;';
            break;
        case '9':
            caractere = '&#65305;';
            break;
        case '0':
            caractere = '&#65296;';
            break;
			
        case '"':
            caractere = '&#65374;';
            break;
        case "'":
            caractere = '&#8216;';
            break;
        case '!':
            caractere = '&#65281;';
            break;
        case '-':
            caractere = '&#12540;';
            break;
        case '_':
            caractere = '&#65343;';
            break;
        case '´':
            caractere = '&#12300;';
            break;
        case '[':
            caractere = '&#12301;';
            break;
		
		case '`':
            caractere = '&#65371;';
            break;
        case '{':
            caractere = '&#65373;';
            break;
			
		case 'ç':
            caractere = '&#65307;';
            break;
        case '~':
            caractere = '&#8217;';
            break;
        case ']':
            caractere = '&#65509;';
            break;
			
		case 'Ç':
            caractere = '&#65306;';
            break;
        case '^':
            caractere = '&#8221;';
            break;
        case '}':
            caractere = '&#65372;';
            break;
			
		case ',':
            caractere = '&#12289;';
            break;
        case '.':
            caractere = '&#12290;';
            break;
        case ';':
            caractere = '&#12539;';
            break;
        case '?':
            caractere = '&#65311;';
            break;
			
		case '<':
            caractere = '&#65308;';
            break;
        case '>':
            caractere = '&#65310;';
            break;
        case ':':
            caractere = '&#65311;';
            break;
			
					
        case 'a':
            caractere = '&#12450;';
            break;
        case 'e':
            caractere = '&#12456;';
            break;
        case 'i':
            caractere = '&#12452;';
            break;
        case 'o':
            caractere = '&#12458;';
            break;
        case 'u':
            caractere = '&#12454;';
            break;
        case 'ka':
            caractere = '&#12459;';
            break;
        case 'ki':
            caractere = '&#12461;';
            break;
        case 'ku':
            caractere = '&#12463;';
            break;
        case 'ke':
            caractere = '&#12465;';
            break;
        case 'ko':
            caractere = '&#12467;';
            break;
        case 'sa':
            caractere = '&#12469;';
            break;
		case 'si':
            caractere = '&#12471;';
            break;
		case 'shi':
            caractere = '&#12471;';
            break;
		case 'su':
            caractere = '&#12473;';
			break;
		case 'se':
            caractere = '&#12475;';
            break;
		case 'so':
            caractere = '&#12477;';
            break;
		case 'ta':
            caractere = '&#12479;';
            break;
		case 'ti':
            caractere = '&#12481;';
            break;
		case 'chi':
            caractere = '&#12481;';
            break;
		case 'ji':
            caractere = '&#12472;';
            break;
		case 'tu':
            caractere = '&#12484;';
            break;
		case 'tsu':
            caractere = '&#12484;';
            break;
		case 'te':
            caractere = '&#12486;';
            break;
		case 'to':
            caractere = '&#12488;'; //aqui
            break;
		case 'na':
            caractere = '&#12490;';
            break;
		case 'ni':
            caractere = '&#12491;';
            break;
		case 'nu':
            caractere = '&#12492;';
            break;
		case 'ne':
            caractere = '&#12493;';
            break;
		case 'no':
            caractere = '&#12494;';
            break;
		case 'ha':
            caractere = '&#12495;';
            break;
		case 'hi':
            caractere = '&#12498;';
            break;
		case 'hu':
            caractere = '&#12501;';
            break;
		case 'he':
            caractere = '&#12504;';
            break;
		case 'ho':
            caractere = '&#12507;';
            break;
		case 'ma':
            caractere = '&#12510;';
            break;
		case 'mi':
            caractere = '&#12511;';
            break;
		case 'mu':
            caractere = '&#12512;';
            break;
		case 'me':
            caractere = '&#12513;';
            break;
		case 'mo':
            caractere = '&#12514;';
            break;
		case 'ra':
            caractere = '&#12521;';
            break;
		case 'ri':
            caractere = '&#12522;';
            break;
		case 'ru':
            caractere = '&#12523;';
            break;
		case 're':
            caractere = '&#12524;';
            break;
		case 'ro':
            caractere = '&#12525;';
            break;
		case 'ya':
            caractere = '&#12516;';
            break;
		case 'yu':
            caractere = '&#12518;';
            break;
		case 'yo':
            caractere = '&#12520;';
            break;
		case 'wa':
            caractere = '&#12527;';
            break;
		case 'wo':
            caractere = '&#12530;';
            break;
		case 'nn':
            caractere = '&#12531;';
            break;
		case 'ga':
            caractere = '&#12460;';
            break;
		case 'gi':
            caractere = '&#12462;';
            break;
		case 'gu':
            caractere = '&#12464;';
            break;
		case 'ge':
            caractere = '&#12466;';
            break;
		case 'go':
            caractere = '&#12468;'; //ki
            break;
		case 'za':
            caractere = '&#12470;';
            break;
		case 'zi':
            caractere = '&#12472;';
            break;
		case 'zu':
            caractere = '&#12474;';
            break;
		case 'ze':
            caractere = '&#12476;';
            break;
		case 'zo':
            caractere = '&#12478;';
            break;
		case 'da':
            caractere = '&#12480;';
            break;
		case 'di':
            caractere = '&#12482;';
            break;
		case 'du':
            caractere = '&#12485;';
            break;
		case 'dzu':
            caractere = '&#12485;';
            break;
		case 'de':
            caractere = '&#12487;';
            break;
		case 'do':
            caractere = '&#12489;';
            break;
		case 'ba':
            caractere = '&#12496;';
            break;
		case 'bi':
            caractere = '&#12499;';
            break;
		case 'bu':
            caractere = '&#12502;';
            break;
		case 'be':
            caractere = '&#12505;';
            break;
		case 'bo':
            caractere = '&#12508;';
            break;
		case 'pa':
            caractere = '&#12497;';
            break;
		case 'pi':
            caractere = '&#12500;';
            break;
		case 'pu':
            caractere = '&#12503;';
            break;
		case 'pe':
            caractere = '&#12506;';
            break;
		case 'po':
            caractere = '&#12509;';
            break;
		case 'fa':
            caractere = '&#12501;&#12449;';
            break;
		case 'fi':
            caractere = '&#12501;&#12451;';
            break;
		case 'fu':
            caractere = '&#12501;';
            break;
		case 'fe':
            caractere = '&#12501;&#12455;';
            break;
		case 'fo':
            caractere = '&#12501;&#12457;';
            break;
		case 'va':
            caractere = '&#12532;&#12449;';
            break;
		case 'vi':
            caractere = '&#12532;&#12451;';
            break;
		case 'vu':
            caractere = '&#12532;';
            break;
		case 've':
            caractere = '&#12532;&#12455;';
            break;
		case 'vo':
            caractere = '&#12532;&#12457;';
            break;
		case 'vya':
            caractere = '&#12532;&#12515;';
            break;
		case 'vyu':
            caractere = '&#12532;&#12517;';
            break;
		case 'vyo':
            caractere = '&#12532;&#12519;';
            break;
		case 'fya':
            caractere = '&#12501;&#12515;';
            break;
		case 'fyu':
            caractere = '&#12501;&#12517;';
            break;
		case 'fyo':
            caractere = '&#12501;&#12519;';
            break;
		case 'kya':
            caractere = '&#12461;&#12515;';
            break;
		case 'kyu':
            caractere = '&#12461;&#12517;';
            break;
		case 'kyo':
            caractere = '&#12461;&#12519;';
            break;
		case 'sha':
            caractere = '&#12471;&#12515;';
            break;
		case 'shu':
            caractere = '&#12471;&#12517;';
            break;
		case 'sho':
            caractere = '&#12471;&#12519;';
            break;
		case 'shya':
            caractere = '&#12471;&#12515;';
            break;
		case 'shyu':
            caractere = '&#12471;&#12517;';
            break;
		case 'shyo':
            caractere = '&#12471;&#12519;';
            break;
		case 'cha':
            caractere = '&#12481;&#12515;';
            break;
		case 'chu':
            caractere = '&#12481;&#12517;';
            break;
		case 'cho':
            caractere = '&#12481;&#12519;';
            break;
		case 'chya':
            caractere = '&#12481;&#12515;';
            break;
		case 'chyu':
            caractere = '&#12481;&#12517;';
            break;
		case 'chyo':
            caractere = '&#12481;&#12519;';
            break;
		case 'nya':
            caractere = '&#12491;&#12515;';
            break;
		case 'nyu':
            caractere = '&#12491;&#12517;';
            break;
		case 'nyo':
            caractere = '&#12491;&#12519;';
            break;
		case 'hya':
            caractere = '&#12498;&#12515;';
            break;
		case 'hyu':
            caractere = '&#12498;&#12517;';
            break;
		case 'hyo':
            caractere = '&#12498;&#12519;';
            break;
		case 'mya':
            caractere = '&#12511;&#12515;';
            break;
		case 'myu':
            caractere = '&#12511;&#12517;';
            break;
		case 'myo':
            caractere = '&#12511;&#12519;';
            break;
		case 'rya':
            caractere = '&#12522;&#12515;';
            break;
		case 'ryu':
            caractere = '&#12522;&#12517;';
            break;
		case 'ryo':
            caractere = '&#12522;&#12519;';
            break;
		case 'gya':
            caractere = '&#12462;&#12515;';
            break;
		case 'gyu':
            caractere = '&#12462;&#12517;';
            break;
		case 'gyo':
            caractere = '&#12462;&#12519;';
            break;
		case 'jya':
            caractere = '&#12472;&#12515;';
            break;
		case 'jyu':
            caractere = '&#12472;&#12517;';
            break;
		case 'jyo':
            caractere = '&#12472;&#12519;';
            break;
		case 'ja':
            caractere = '&#12472;&#12515;';
            break;
		case 'ju':
            caractere = '&#12472;&#12517;';
            break;
		case 'jo':
            caractere = '&#12472;&#12519;';
            break;
		case 'bya':
            caractere = '&#12499;&#12515;';
            break;
		case 'byu':
            caractere = '&#12499;&#12517;';
            break;
		case 'byo':
            caractere = '&#12499;&#12519;';
            break;
		case 'pya':
            caractere = '&#12500;&#12515;';
            break;
		case 'pyu':
            caractere = '&#12500;&#12517;';
            break;
		case 'pyo':
            caractere = '&#12500;&#12519;';
            break;
		
		case 'ca':
            caractere = '&#12459;';
            break;
		case 'ci':
            caractere = '&#12471;';
            break;
		case 'cu':
            caractere = '&#12463;';
            break;
		case 'ce':
            caractere = '&#12475;';
            break;
		case 'co':
            caractere = '&#12467;';
            break;
		case 'la':
            caractere = '&#12449;';
            break;
		case 'li':
            caractere = '&#12451;';
            break;
		case 'lu':
            caractere = '&#12453;';
            break;
		case 'le':
            caractere = '&#12455;';
            break;
		case 'lo':
            caractere = '&#12457;';
            break;
		case 'xa':
            caractere = '&#12449;';
            break;
		case 'xi':
            caractere = '&#12451;';
            break;
		case 'xu':
            caractere = '&#12453;';
            break;
		case 'xe':
            caractere = '&#12455;';
            break;
		case 'xo':
            caractere = '&#12457;';
            break;
		case 'qa':
            caractere = '&#12463;&#12449;';
            break;
		case 'qi':
            caractere = '&#12463;&#12451;';
            break;
		case 'qu':
            caractere = '&#12463;';
            break;
		case 'qe':
            caractere = '&#12463;&#12455;';
            break;
		case 'qo':
            caractere = '&#12463;&#12457;';
            break;

		case 'wi':
            caractere = '&#12454;&#12451;';
            break;
		case 'wu':
            caractere = '&#12454;';
            break;
		case 'we':
            caractere = '&#12454;&#12455;';
            break;
			
		case 'she':
            caractere = '&#12471;&#12455;';
            break;
		case 'che':
            caractere = '&#12481;&#12455;';
            break;

        default:
            // se não for nenhum dos cases acima, então:
            sucesso = false;
			if ((conteudo.charAt(0) == 'n') && (conteudo.length > 1)){		
				for (i = 1; i < conteudo.length; i++){
					novocont = conteudo.charAt(i);
				}
				document.getElementById('caract').innerHTML = novocont;
				tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,'&#12531;'); //letra 'hmm'
				conteudo = novocont;
				hiraganafunc();
			}
    }

	if (sucesso == true){
		document.getElementById('caract').innerHTML = '';
		tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,caractere);
	}
}


function passaralfa(string, e, alfa){

	var nova = document.getElementById('caract').innerHTML;

	if ((isValid(string, lwr)) == true){
		document.getElementById('caract').innerHTML += string;
		nova = document.getElementById('caract').innerHTML;
		//verificar tamanho do campo superior
			
		if (nova.length > 4){
			var texto = nova.charAt(0)+nova.charAt(1)+nova.charAt(2)+nova.charAt(3);
			tinyMCE.execInstanceCommand('elm3',"mceInsertContent",false,texto);
			document.getElementById('caract').innerHTML= nova.charAt(4);
		}else{
			if (alfa == 'hiragana'){hiraganafunc();}
			if (alfa == 'katakana'){katakanafunc();}
		}
		
		//cancela o evento keypress
		tinymce.dom.Event.cancel(e);
	}
	
}