// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `whoami && notes
            
            Name: Luís Miguel da Conceição Rodrigues
            Education: Master of Information Systems and Computer Engineering @ Instituto Superior Técnico
            Master's fields of suty: Cyber Security and Disributed Systems 

            ### TODO 
            >> grow 📈
            >> learn 📚
            >> give back ❤️
            >> lots and lots of life root shells 🐱‍💻`;
  var speed = 30;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(element, event) {
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
// for (var i = 0; i<btns.length; i++) {
//   btns[i].addEventListener('click', function(event) {
//     smoothScrollTo(sections[i], event);
//   });
// }
  btns[0].addEventListener('click', function (event) {
    smoothScrollTo(sections[0], event);
  });

  btns[1].addEventListener('click', function (event) {
    smoothScrollTo(sections[1], event);
  });

  btns[2].addEventListener('click', function (event) {
    smoothScrollTo(sections[2], event);
  });

  btns[3].addEventListener('click', function (event) {
    smoothScrollTo(sections[3], event);
  });
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

var proj = {
  "ABD" : "<p><b>Name:</b> Automatic bug detection in R" + "<br><b>Context:</b> Masters thesis " + "<br><b>Objective:</b> Revolutionizing the R language debugging process making it more efficient, easier and practical by implementing a timeless-debugging pardigm" + "<br><b>Technologies:</b> C, R, HTML5, CSS3, JavaScript, BootStrap4, JQuery, JSON" +"<br><b>Value given:</b> Visualize the result of each executed instruction for a given script arbitrarly, at any time, with a single program execution and considerable low overheads" + "<br><b>Key features:</b><ul><li>Graph visualization of executed contexts, their correlations and the instructions executed in each </li><li>Data correlation between instruction (data precedence)</li><li>Compreehensive and by-statement branch analysis</li><li>Data oriented visualization</li><li>Low overheads</li><li>One execution, multiple analysis</li><li>Arbitrary instruction analysis </li> </ul>"+"</p>",
  
  "LTWM" : "<p><b>Name:</b> Lu Tiling Window Manager (LTWM)" + "<br><b>Context:</b> Personal project" + "<br><b>Objective:</b> Automatically manage open windows, into well defined zones, depending on the zones arrangement mode (for Windows 10)" +"<br><b>Technologies:</b> C#, JSON" +"<br><b>Value given:</b> More efficiency when working by removing the need to resize and relocate windows manually"+ "<br><b>Key features:</b><ul><li>Multiple workspaces (not mirrored)</li><li>Multiple zones per workspace</li><li>Dedicated minimalist panel to replace windows taskbar</li><li> Multiple arrangement modes (for each zone) </li><li> Integrates the windows task icons (battery, sound, etc) in the panel</li><li>Highly configurable </li><li> Minimalist program runner</li></ul>" + "</p>",


  "VD" : "<p><b>Name:</b> Vulnerabilities detection" + ""+ "<br><b>Context:</b> Masters course - Software security " + "<br><b>Objective:</b> Detect vulnerabilities based on JSON dumps from programs assembly instructions" +              "<br><b>Technologies:</b> Python, JSON" + "<br><b>Value given:</b> Identifies the type of vulnerability, how it occured and what memory areas it affected" + "<br><b>Key features:</b><ul><li>Memory and CPU registers emulation</li><li> Detects memory corruption</li><li>Detects memory invalid accesses (read/writes)</li> <li> Detects tampering of CPU registers </li> </ul> " +"</p>" ,

  "DDOS" : "<p><b>Name:</b> DDoS mitigation" + "<br><b>Context:</b> Masters course - Networks and Software security " + "<br><b>Objective:</b> Detect and mitigate DDoS attacks based on upcoming traffic and payloads" + "<br><b>Technologies:</b> Linux, iptables, apache, IDS (snort), Virtual Machines, Python" + "<br><b>Value given:</b> Automated DDoS detection through snort IDS community rules and redirection of traffic uppon start/end of an attack" + "<br><b>Key features:</b><ul><li>Multiple (chained) virtual machines with strict traffic rules</li><li> Simulates traffic redirection to a cloud provider (to mitigate the bandwidth requirements)</li> <li> Restricts of incomming traffic in the webserver machine (just accepted connections from the IDS machine) </li> <li> Extensive list of rules applied in the IDS </li></ul> "+ "</p>",

  "AWS" : "<p><b>Name:</b> AWS S3 instrumentation"  + "<br><b>Context:</b> Masters course - Cloud computing and Virtualization" + "<br><b>Objective:</b> Manage AWS S3 space automatically" + "<br><b>Technologies:</b> AWS s3, DynamoDB, HTTP, Java, BIT (instrumentation)" + "<br><b>Value given:</b> Automatic AWS S3 space management with a load balancer that supports the spawning/killing of instances, on-demand" +"<br><b>Key features:</b><ul><li>Automatic and hand written load balancing</li><li>Request processing power needed prediction, based on requests history and heuristics</li><li>Tracks tasks' progress through big data tables</li>Fine tuned thresholds for spawning/killing instances</li></ul>"+ "</p>"
  
}
var prev_clicked = "ABD"

function showProj(id){
  
  if(id==prev_clicked) return;
  document.getElementById(prev_clicked).style.textDecoration = "none"
  document.getElementById(id).style.textDecoration = "underline"
  

  document.getElementById("proj_desc").innerHTML = proj[id];

  prev_clicked = id;
}

window.onload = function () {
  document.getElementById(prev_clicked).style.textDecoration = "underline"
  document.getElementById("proj_desc").innerHTML = proj[prev_clicked];
}
