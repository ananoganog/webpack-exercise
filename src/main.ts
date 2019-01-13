var logoSrc = require('./content/logo_2.png');
import {EmphasizeMessage} from './emphasize';

const logo = document.createElement('img');
logo.src = logoSrc;
document.getElementById('logoContainer').appendChild(logo);

const welcomeMessage : string = "Hello world";
const emphasizedMessage : string = EmphasizeMessage(welcomeMessage);

const messageWraper = document.getElementById('main');
messageWraper.innerHTML = emphasizedMessage;
