/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    config.removePlugins = 'elementspath,enterkey,entities,forms,pastefromword,htmldataprocessor,specialchar,horizontalrule,wsc';
    //config.toolbar = 'Basic';
    config.height = 50;
    /*
     CKEDITOR.config.toolbar = [
     ['Styles', 'Format', 'Font', 'FontSize'],
     '/',
     ['Bold', 'Italic', 'Underline', 'StrikeThrough', '-', 'Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'Find', 'Replace', '-', 'Outdent', 'Indent', '-', 'Print'],
     '/',
     ['NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
     ['Image', 'Video', 'Table', '-', 'Link', 'Flash', 'Smiley', 'TextColor', 'BGColor', 'Source']
     ];
     */
    CKEDITOR.config.toolbar = [
        ['Bold', 'StrikeThrough', '-', 'Undo', 'Redo'],
        ['Image', 'Video', '-', 'Link', 'Smiley']
    ];
    config.extraPlugins = 'video';
};
