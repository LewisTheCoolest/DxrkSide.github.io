var content = document.getElementById('content').innerHTML;
/* [[ BEGIN VARIABLES ]] */
var useFooterItems = false; // Should you use footer items?
var personalLinks = false; // My website links
var screenshotsBtn = false; // Show screenshots button
var getVars = useFooterItems && personalLinks || screenshotsBtn; // Returns if 2 or more vars are true
/* [[ END VARIABLES ]] */

/* [[ BEGIN DEFINITIONS ]] */
var h3footeritems;
var addbreak;
var prsnlnk;
var scrnshtsbtn;
var apndtxt;
var hr;
/* [[ END DEFINITIONS ]] */

if (getVars) {
  addbreak = '<br>';
  hr = ' \
  <br> \
  <br> \
  <hr> \
  ';
} else {
  addbreak = '';
  hr = '';
}

if (personalLinks) {
  prsnlnk = ' \
  <a href="https://twitter.com/BannerBomb/" target="_blank">Me on Twitter: BannerBomb_</a><br> \
  <a href="https://github.com/BannerBomb/" target="_blank">Me on Github: BannerBomb</a><br> \
  <a href="http://bannerbomb.github.io/" target="_blank">My Website</a> \
  ' + addbreak + '\
  ';
} else {
  prsnlnk = '';
}

if (screenshotsBtn) {
  scrnshtsbtn = ' \
  ' + addbreak + '\
  ';
} else {
  scrnshtsbtn = '';
}

if (useFooterItems) {
  /* [[ BEGIN GATHERING TEXT TO DISPLAY ]] */
  apndtxt = ' \
  ' + prsnlnk + '\
  ' + scrnshtsbtn + '\
  ';
  /* [[ END GATHERING TEXT TO DISPLAY ]] */
} else {
  apndtxt = '';
}



var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>BannerBomb\'s Cydia repo</title> \
</head> \
<body text="#000000" link="#404040" alink="#404040" vlink="#404040" style="background:none;"> \
 \
<div align="center" style="background-color:#77ffff"> \
<h1>BannerBomb\'s Repo</h1> \
</div> \
 \
<div align="center" style="background-color:#FFFFFF;"> \
<table> \
<tr style="width:100%"> \
<td> \
<div style="text-align: justify; font-size:110%; background-color:#FFFFFF; min-width: 300px; max-width: 700px; vertical-align: top;"><br> \
' + content + '\
</div> \
' + hr + '\
<h3> \
' + apndtxt + '\
</h3> \
</td> \
 \
</tr> \
</table> \
';
document.documentElement.innerHTML = template;
