/* @flow */

export const HTTP_HEADER = {
    CONTENT_TYPE:    'content-type',
    X_FRAME_OPTIONS: 'X-Frame-Options'
};

export const HTTP_CONTENT_TYPE = {
    TEXT:       'text/plain',
    HTML:       'text/html',
    JAVASCRIPT: 'application/jasvascript'
};

export const HTTP_STATUS_CODE = {
    SUCCESS:      200,
    CLIENT_ERROR: 400,
    SERVER_ERROR: 500
};

export const EVENT = {
    RENDER: 'smart_button_render',
    ERROR:  'smart_button_error'
};
