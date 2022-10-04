define([
    'jquery',
    'Magento_Ui/js/modal/confirm'
], function ($, confirm) {
    return function (config, element) {
        $(element).click(() => confirm({
            title: $.mage.__('Ir a Google'),
            content: $.mage.__('¿Estás seguro de querer ir a Google?'),
            buttons: [{
                text: $.mage.__('cancel'),
                class: 'action-secondary action-dismiss',
                click: function (event) {
                    this.closeModal(event);
                }
            }, {
                text: $.mage.__('OK'),
                class: 'action-primary action-accept',
                click: function (event) {
                    window.location.replace("http://www.google.com")
                    this.closeModal(event, true);
                }
            }, {
                text: $.mage.__('Quiero ir a bing mejor'),
                class: 'action-primary action-bing',
                click: function (event) {
                    window.location.replace("http://www.bing.com")
                    this.closeModal(event, true);
                }
            }]
        }))
    }
});
