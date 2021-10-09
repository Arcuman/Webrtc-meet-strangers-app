import * as constants from './constants.js'

let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingStream: null,
  allowConnectionFromStrangers: false,
  screenSharingActive: false,
  callState: constants.callState.CALL_AVAILABLE_ONLY_CHAT
};

export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
};

export const setLocaleStream = (localStream) => {
  state = {
    ...state,
    localStream,
  };
};

export const setAllowConnectionsFromStrangers = (
  allowConnectionFromStrangers
) => {
  state = {
    ...state,
    allowConnectionFromStrangers,
  };
};

export const setScreenSharingActive = (screenSharingActive) => {
  state = {
    ...state,
    screenSharingActive,
  };
};

export const setScreenSharingStream = (screenSharingStream) => {
  state = {
    ...state,
    screenSharingStream,
  };
};

export const setRemoteStream = (remoteStream) => {
  state = {
    ...state,
    remoteStream,
  };
};

export const setCallState = (callState) => {
  state = {
    ...state,
    callState,
  };
};

export const getState = () => {
    return state
}
