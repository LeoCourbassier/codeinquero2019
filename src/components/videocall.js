import React from 'react';
import ReactDOM from 'react-dom';
import './Vydio/index.css';
import VidyoConnector from './Vydio/VidyoConnector';

const host              = getUrlParameterByName("host", "prod.vidyo.io");
const token             = getUrlParameterByName("token", "cHJvdmlzaW9uAGRlbmlzdGF2ZWlyYUA1YjM2OGIudmlkeW8uaW8ANjM3MjY3NTcwOTUAAGYxYTg2ODExYzhiOTczZjE2MjhjNjI3YTZhYjNjNzFkMTZiZjA0MjcwZTViZDViYWE3MzI0Njg4ZTIzMDJkYjY0MDVhYjc0Y2MyZjM1MDVkNGM1NmIzMjM0ODJjNDEyZg==");
const resourceId        = getUrlParameterByName("resourceId", "_CODEINQUERO12");
const displayName       = getUrlParameterByName("displayName", "user2");
const useNativeWebRTC   = getUrlParameterByName("useNativeWebRTC", true);

loadRemoteVidyoClientLib(useNativeWebRTC, false);

const viewId                = "renderer";
const viewStyle             = "VIDYO_CONNECTORVIEWSTYLE_Default";
const remoteParticipants    = 8;
const logFileFilter         = "warning all@VidyoConnector info@VidyoClient";
const logFileName           = "";
const userData              = "";

export default class VideoCall extends React.Component {
    render() {
        return (
            <VidyoConnector 
                    host        = { host }
                    token       = { token }
                    resourceId  = { resourceId }
                    displayName = { displayName }
                    viewId             = { viewId }
                    viewStyle          = { viewStyle }
                    remoteParticipants = { remoteParticipants }
                    logFileFilter      = { logFileFilter }
                    logFileName        = { logFileName }
                    userData           = { userData }
                />
        );
    }
}

function loadRemoteVidyoClientLib(useNativeWebRTC = false, plugin = false) {
    let script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = `https://static.vidyo.io/latest/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded&useNativeWebRTC=${useNativeWebRTC}&plugin=${plugin}&webrtcLogLevel=info`;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function getUrlParameterByName(name, _default = '') {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) || _default;
}
