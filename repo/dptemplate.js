/*
<html>
<head>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
</head>
  <body>
<div id="contentone" style="display:none">
  <div id='headerTitle'>test</div>
  <div id='LongDesc'>This is a depiction of a cydia package. The URL of this page should be set as the "Depiction" element of the <code>DEBIAN/control</code> file, and it contains more information than the regular "Description" entry. There\'s info on package maintainence, settings, &amp;c.</div>
  <div id='ShortDesc'>This is another bit of information, split by the line above. This may be trivial information or integral to the package\'s instructions.</div>
  <div id='ThisVersionChange'>First release!</div>
  <div id='OtherVersionChange'>More changes!</div>
  <div id='KnownIssues'>No current issues.</div>
</div>

<!-- include this everywhere you want the standard design template from here... -->
<script type="text/javascript" src="../../dptemplate.js"></script>
<link rel="stylesheet" type="text/css" href="../../new-depiction/depiction.css" />
<script type="text/javascript" src="../../new-depiction/depiction.css"></script>
<noscript>
As this website uses JavaScript to generate a semi-dynamically created page, you need to activate JavaScript!
</noscript>
<!-- ...until here! -->
  </body>
</html>
*/

var content = document.getElementById('content').innerHTML;
/* [[ BEGIN VARIABLES ]] */
var useFooterItems = true; // Should you use footer items?
var personalLinks = false; // My website links
var screenshotsBtn = false; // Show screenshots button
var headerTitle = true; // Adds a header to the top of the screen
var longDesc = true; // Long Description of package
var shortDesc = true; // Short Description of package
var openInCydia = false; // Short open in cydia button?
var inThisVer = true; // Changes in the current version
var changelogBtn = false; // Changes to the package
var knownIssues = true; // Display the packages known issues
var footerText = true; // Footer Text Shows at Bottom of Screen

var getVars = useFooterItems && personalLinks || screenshotsBtn; // Returns if 2 or more vars are true
/* [[ END VARIABLES ]] */

/* [[ BEGIN DEFINITIONS ]] */
var h3footeritems;
var prsnlnk;
var scrnshtsbtn;
var apndtxt;
var hr;
var headertitle;
var longdesc;
var shortdesc;
var openincydia;
var inthisver;
var changelogbtn;
var knownissues;
var footertext;
/* [[ END DEFINITIONS ]] */

/* [[ BEGIN STRINGS ]] */
var inthisvertitletext = 'In this version';
var openincydiatext = 'View in Cydia';
var changelogbtntext = 'Changelog';
var changeloglink = '../../new-depiction/changelog.html';
var knownissuestext = 'Known&nbsp;Issues';
var reportknownissues = 'Report issues to /u/BannerBomb';
/* [[ END STRINGS ]] */


if (personalLinks) {
  prsnlnk = ' \
  <a href="https://twitter.com/BannerBomb/" target="_blank">Me on Twitter: BannerBomb_</a><br> \
  <a href="https://github.com/BannerBomb/" target="_blank">Me on Github: BannerBomb</a><br> \
  <a href="http://bannerbomb.github.io/" target="_blank">My Website</a> \
  ';
} else {
  prsnlnk = '';
}

if (screenshotsBtn) {
  scrnshtsbtn = ' \
  <a href="#" style="border-style: solid; border-width: 1px;"><button style="background-color: #FFF;">Screenshots</button></a> \
  ';
} else {
  scrnshtsbtn = '';
}

if (headerTitle) {
  var getTitleText = document.getElementById('headerTitle').innerHTML;
  if (getTitleText === '') {
    headertitle = '';
  } else if (getTitleText !== '') {
    headertitle = ' \
    <header> \
    <h1> \
    ' + getTitleText + '\
    </h1> \
    </header> \
    ';
  }
} else {
  headertitle = '';
}

if (longDesc) {
  var getLongDesc = document.getElementById('LongDesc').innerHTML;
  if (getLongDesc === '') {
    longdesc = ''
  } else if (getLongDesc !== '') {
    longdesc = ' \
    <li> \
    ' + getLongDesc + ' \
    </li> \
    ';
  }
} else {
  longdesc = '';
}

if (shortDesc) {
  var getShortDesc = document.getElementById('ShortDesc').innerHTML;
  if (getShortDesc === '') {
    shortdesc = ''
  } else if (getShortDesc !== '') {
    shortdesc = ' \
    <li> \
    ' + getShortDesc + ' \
    </li> \
    ';
  }
} else {
  shortdesc = '';
}


if (openInCydia) {
  openincydia = ' \
  <ul id="cydia-open"> \
  <li> \
  <a href="cydia://url/https://cydia.saurik.com/api/share#?source=" + domain + "&package=" + pack.Package class="button"> \
  ' + openincydiatext + '\
  </a> \
  </li> \
  </ul> \
  ';
} else {
  openincydia = '';
}

if (inThisVer) {
  var getInThisVer = document.getElementById('ThisVersionChange').innerHTML;
  var getOtherVer = document.getElementById('OtherVersionChange').innerHTML;
  if (getInThisVer === '' || getOtherVer === '') {
    inthisver = ''
  } else if (getInThisVer !== '' || getOtherVer !== '') {
  inthisver = ' \
    <h2 id="in-this-version"> \
    ' + inthisvertitletext + ' \
    </h2> \
     <ul> \
      <li> \
       ' + getInThisVer + ' \
      </li> \
      <li> \
       ' + getOtherVer + ' \
      </li> \
     </ul> \
    ';
  }
} else {
  inthisver = '';
}

if (changelogBtn) {
  changelogbtn = ' \
  <ul> \
  <li> \
  <a href=" ' + changeloglink + ' " class="button"> \
  ' + changelogbtntext + ' \
  </a> \
  </li> \
  </ul> \
  ';
} else {
  changelogbtn = '';
}

if (knownIssues) {
  var getKnownIssues = document.getElementById('KnownIssues').innerHTML;
  if (getKnownIssues === '') {
    knownissues = '';
  } else if (getKnownIssues !== '') {
  knownissues = ' \
    <h2 id="known-issues"> \
    ' + knownissuestext + ' \
    </h2> \
      <ul> \
        <li> \
          ' + getKnownIssues + ' \
        </li> \
      </ul> \
    ';
  }
} else {
  knownissues = '';
}

if (footerText) {
  footertext = ' \
  <p class="footer"> \
  ' + reportknownissues + ' \
  </p> \
  ';
} else {
  footertext = '';
}

if (useFooterItems) {
  /* [[ BEGIN GATHERING TEXT TO DISPLAY ]] */
  apndtxt = ' \
  ' + headertitle + '\
  <main id="contentone" role="main"> \
  <ul> \
  ' + longdesc + '\
  ' + shortdesc + '\
  </ul> \
  ' + openincydia + '\
  ' + inthisver + '\
  ' + changelogbtn + '\
  ' + knownissues + '\
  ' + footertext + '\
  </main> \
  ';
  /* [[ END GATHERING TEXT TO DISPLAY ]] */
} else {
  apndtxt = '';
}

var template = ' \
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
  <html> \
    <head> \
      <link rel="stylesheet" type="text/css" href="../../new-depiction/depiction.css" /> \
      <script type="text/javascript" src="../../new-depiction/depiction.css"></script> \
      <meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
      <meta charset="utf-8"> \
      <link rel="shortcut icon" href=""> \
      <meta name="robots" content="index,follow"> \
      <!--<meta http-equiv="cache-control" content="no-cache">--> \
      <title>BannerBomb\'s Cydia repo</title> \
    </head> \
    <body class="depiction"> \
      ' + apndtxt + '\
    </body> \
  </html> \
  ';

document.documentElement.innerHTML = template;
